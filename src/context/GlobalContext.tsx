import React, { createContext, useState } from "react";
import { GetUser } from "../controllers/apiUsers";
import {
  alertaMensagem,
  carregando,
  finalizarCarregamento,
} from "../functions/Alertas";

interface ISelectUser {
  id: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface IGlobalContextData {
  dataUser: ISelectUser;
  activePage: string;
  searchUser(user: string): void;
  handlePage(page: string): void;
}

export const GlobalContext = createContext<IGlobalContextData>(
  {} as IGlobalContextData
);

export const GlobalProvider: React.FC = ({ children }) => {
  const [dataUser, setDataUser] = useState({
    id: "",
    name: "",
    bio: "",
    avatar_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: "",
  });
  const [activePage, setActivePage] = useState("search");

  async function searchUser(user: string): Promise<void> {
    carregando("");
    try {
      const response = await GetUser(user);

      if (response.status === 200) {
        finalizarCarregamento();
        setDataUser({
          id: response.data.id,
          name: response.data.name,
          bio: response.data.bio,
          avatar_url: response.data.avatar_url,
          public_repos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following,
          created_at: response.data.created_at,
        });
        setActivePage("profile");
      }
    } catch (error) {
      finalizarCarregamento();
      alertaMensagem("Algo deu errado", "error");
    }
  }

  function handlePage(page: string) {
    setActivePage(page);
  }

  return (
    <GlobalContext.Provider
      value={{
        dataUser,
        searchUser,
        activePage,
        handlePage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
