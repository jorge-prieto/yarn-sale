import React, { useState, useContext } from "react";
import { Menu } from "../menu/Menu";
import { AppContext } from "../../context/AppContext";
import Menuu from "../../assets/img/svg/icon_menu.svg";
import Logo from "../../assets/logo/logo_yard_sale.svg";
import Cart from "../../assets/img/svg/icon_shopping_cart.svg";
import "./Header.css";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="navbar">
      <img src={Menuu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />
        <ul className="list-left">
          <li className="list-item-left">
            <a href="/">All</a>
          </li>
          <li className="list-item-left">
            <a href="/">Clothes</a>
          </li>
          <li className="list-item-left">
            <a href="/">Electronics</a>
          </li>
          <li className="list-item-left">
            <a href="/">Furnitures</a>
          </li>
          <li className="list-item-left">
            <a href="/">Toys</a>
          </li>
          <li className="list-item-left">
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="list-right">
          <li className="navbar-email" onClick={handleToggle} >platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={Cart} alt="shopping cart" />
            {state.cart.lenght > 0 ? <div className="shopping-div">{state.cart.lenght}</div>  : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};
