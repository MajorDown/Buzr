import { createContext, useContext, useState, PropsWithChildren } from "react";
import { AppScreen, AppScreenContext } from "../types";

const ScreenContext = createContext({} as AppScreenContext);

export function useScreenContext() {
  const context = useContext(ScreenContext);
  return context;
}

export function ScreenProvider(props: PropsWithChildren) {
  const [screen, setScreen] = useState<AppScreen>("play");
  const updateScreen = (newScreen: AppScreen) => {
    setScreen(newScreen);
  };

  return (
    <ScreenContext.Provider value={{screen, updateScreen}}>
      {props.children}
    </ScreenContext.Provider>
  );
}
