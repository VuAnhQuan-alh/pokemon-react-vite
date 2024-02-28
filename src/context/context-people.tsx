import { ReactNode, createContext, useEffect, useState } from "react";

type IContext = {
  children: ReactNode;
};
type IPeopleContext = {
  peoples: [];
  user: string;
};
export const PeopleContext = createContext<IPeopleContext | null>(null);
export const PeopleProvider = ({ children }: IContext) => {
  // danh sách user,
  // action crud là thêm sửa xóa user
  const [state, setState] = useState<IPeopleContext>({ peoples: [], user: "" });

  useEffect(() => {
    setState({ peoples: [], user: "Quanva" });
  }, []);

  // function login, register => setState
  // function logout => setState null

  // bắt sự keienj kết thúc game => cập nhật điểm của user => rerender ranking
  return (
    <PeopleContext.Provider value={{ ...state }}>
      {children}
    </PeopleContext.Provider>
  );
};
