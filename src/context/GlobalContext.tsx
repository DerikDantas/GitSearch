import React, { createContext, useState } from "react";
import { GetRepositorys, GetUser } from "../controllers/apiUsers";
import { carregando, finalizarCarregamento } from "../functions/Alertas";

interface ISelectUser {
  id: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  login: string;
}

interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  visibility: string;
}

interface IGlobalContextData {
  dataUser: ISelectUser;
  listRepository: Array<IRepository>;
  activePage: string;
  error: string;
  searchUser(user: string): void;
  handlePage(page: string): void;
  getRepositorys(user: string): void;
}

export const GlobalContext = createContext<IGlobalContextData>(
  {} as IGlobalContextData
);

export const GlobalProvider: React.FC = ({ children }) => {
  const [activePage, setActivePage] = useState<string>("search");
  const [error, setError] = useState<string>("");

  const [dataUser, setDataUser] = useState<ISelectUser>({
    id: "",
    name: "",
    bio: "",
    avatar_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: "",
    login: "",
  });
  const [listRepository, setListRepository] = useState<IRepository[]>([]);

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
          login: response.data.login,
        });
        setActivePage("profile");
      }
    } catch (error) {
      finalizarCarregamento();
      setError("Algo deu errado, tente novamente!");
    }
  }

  async function getRepositorys(user: string): Promise<void> {
    carregando("");
    try {
      const response = await GetRepositorys(user);

      if (response.status === 200) {
        finalizarCarregamento();
        setListRepository(response.data);
      }
    } catch (error) {
      finalizarCarregamento();
      setError("Algo deu errado, tente novamente!");
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
        error,
        getRepositorys,
        listRepository,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
