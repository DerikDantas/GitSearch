import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Profile from "../../pages/Profile";
import Search from "../../pages/Search";

const Wrapper: React.FC = () => {
  const { activePage } = useContext(GlobalContext);

  return (
    <>
      {activePage === "search" ? (
        <Search />
      ) : activePage === "profile" ? (
        <Profile />
      ) : null}
    </>
  );
};

export default Wrapper;
