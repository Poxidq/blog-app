export interface IAuthUser {
  id: number;
  username: string;
  email: string;
  password: string;
  img: string;
}

export interface IAuthContext {
  currentUser: IAuthUser;
  login: ({ username: string, password: string }) => void;
  logout: () => void;
  register: ({ username: string, password: string, email: string }) => void;
}

export const defaultState = {
  currentUser: {
    id: 0,
    username: "",
    email: "",
    password: "",
    img: "",
  },
  login: () => console.log("login)"),
  logout: () => console.log("logout("),
  register: () => console.log("register("),
};
