import { ReactNode, createContext, useEffect, useState } from "react";
type IContext = {
  children: ReactNode;
};
type IGameContext = {
  status: string;
};

const GameContext = createContext<IGameContext | null>(null);
export const GameProvider = ({ children }: IContext) => {
  const [state, setState] = useState<IGameContext>({ status: "init" });
  // point của user,
  // trạng thái của game
  useEffect(() => {
    setState({ status: "completed" });
  }, []);

  // function cộng điểm

  return (
    <GameContext.Provider value={{ ...state }}>{children}</GameContext.Provider>
  );
};
