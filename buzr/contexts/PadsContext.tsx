import { createContext, useContext, useState, PropsWithChildren } from "react";
import { Pads, PadsContext } from "../types";
import padsData from "../padsData";

const AllPadsContext = createContext({} as PadsContext);

export function usePadsContext() {
  const context = useContext(AllPadsContext);
  return context;
}

// Utilisation de React.memo ici
export const PadsProvider = (props: PropsWithChildren) => {
  const [pads, setPads] = useState<Pads>(padsData);
  const updatePads = (newPads: Pads) => {
    setPads(newPads);
  };

  return (
    <AllPadsContext.Provider value={{ pads, updatePads }}>
      {props.children}
    </AllPadsContext.Provider>
  );
};
