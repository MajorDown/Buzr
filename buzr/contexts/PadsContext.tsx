import { createContext, useContext, useState, PropsWithChildren, useMemo } from "react";
import { Pads, PadsContext } from "../types";
import padsData from "../padsData";

const AllPadsContext = createContext({} as PadsContext);

export function usePadsContext() {
  const context = useContext(AllPadsContext);
  return context;
}

export const PadsProvider = (props: PropsWithChildren) => {
  const [pads, setPads] = useState<Pads>(padsData);

  const contextValue = useMemo(() => {
    return { pads, updatePads: setPads };
  }, [pads]);

  return (
    <AllPadsContext.Provider value={contextValue}>
      {props.children}
    </AllPadsContext.Provider>
  );
};
