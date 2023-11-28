import { createContext, useContext, useState, PropsWithChildren } from "react";
import { OpenConfig } from "../types";

const OpenConfigCtxt = createContext({} as OpenConfig);

export function useOpenConfigContext() {
  const context = useContext(OpenConfigCtxt);
  return context;
}

export function OpenConfigProvider(props: PropsWithChildren) {
  const [openConfig, setOpenConfig] = useState<boolean>(false);
  const updateOpenConfig = (isOpen: boolean) => {
    setOpenConfig(isOpen);
  };

  return (
    <OpenConfigCtxt.Provider value={{openConfig, updateOpenConfig}}>
      {props.children}
    </OpenConfigCtxt.Provider>
  );
}
