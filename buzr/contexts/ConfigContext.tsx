import { createContext, useContext, useState, PropsWithChildren } from "react";
import { PadId, ConfigContext } from "../types";

const ConfigIdContext = createContext({} as ConfigContext);

export function useConfigContext() {
  const context = useContext(ConfigIdContext);
  return context;
}

export function ConfigIdProvider(props: PropsWithChildren) {
  const [idToConfig, setIdToConfig] = useState<PadId>(1);
  const updateIdToConfig = (newId: PadId) => {
    setIdToConfig(newId);
  };

  return (
    <ConfigIdContext.Provider value={{idToConfig, updateIdToConfig}}>
      {props.children}
    </ConfigIdContext.Provider>
  );
}
