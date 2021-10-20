import React from "react";
import OrderItem from "../../components/order-item/OrderItem";
import Arrow from "../../assets/img/svg/flechita.svg";
import "./MyOrder.css";

export const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={Arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
