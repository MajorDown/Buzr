import React, { createContext, useContext, useEffect, useState, PropsWithChildren, useMemo } from "react";
import { Pads, PadsContext } from "../types";
import padsData from "../padsData";
import StorageManager from "../tools/storageManager";

const AllPadsContext = createContext({} as PadsContext);

export function usePadsContext() {
  const context = useContext(AllPadsContext);
  return context;
}

export const PadsProvider = (props: PropsWithChildren) => {
  const [pads, setPads] = useState<Pads | null>(null);

  useEffect(() => {
    const loadPads = async () => {
      try {
        const savedPads = await StorageManager.load<Pads | null>('buzr_pads');
        if (savedPads.status === 'success') {
          setPads(savedPads.data);
        } else if (savedPads.status === 'empty') {
          setPads(padsData);
        } else {
          console.error('Erreur lors du chargement des données');
          setPads(padsData);
        }
      } catch (error) {
        console.error('Une erreur inattendue s\'est produite :', error);
        throw error;
      }
    };

    loadPads();
  }, []); // le tableau de dépendances est vide, donc cela s'exécutera une seule fois au montage du composant

  const contextValue = useMemo(() => {
    return { pads, updatePads: setPads } as PadsContext;
  }, [pads]);

  return ( pads &&
    <AllPadsContext.Provider value={contextValue}>
      {props.children}
    </AllPadsContext.Provider>
  );
};
