import { useContext } from "react";
import { PeopleContext } from "../context/context-people";

export const usePeopleContext = () => {
  return useContext(PeopleContext);
};
