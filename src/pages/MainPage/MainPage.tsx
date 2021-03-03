import React from "react";
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/post">Запись 1</NavLink> <NavLink to="/add-post"><span>Добавить запись</span></NavLink> </li>
      </ul>
    </>
  );
};

export default MainPage;
