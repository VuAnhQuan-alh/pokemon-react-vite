import { createContext } from "react";

const GameContext = createContext(null);
export const GameProvider = ({ children }) => {
  // point của user,
  // trạng thái của game

  // function cộng điểm

  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
