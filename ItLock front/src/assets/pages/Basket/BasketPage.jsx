import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./BasketPage.scss"
function BasketPage() {
  const { basket, deleteBasket } = useContext(BasketContext);

  return (
    <>
      {basket.length ? (
        <div className="basket_container">
        <div className="basket_container_cards">
          {basket.map((x) => (
            <div className="basket_container_cards_card">
              <div className="image">
                <img src={x.image} alt="" />
              </div>
              <div className="title">
                <p>{x.title}</p>
              </div>
              <div className="bottom">
                <div className="company">
                  <span>{x.company}</span>
                </div>
                <div className="operations">
                <i
                  onClick={() => deleteBasket(x)}
                  className="fa-regular fa-trash-can"
                ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          ) : (
          <h1>Basket is empty...</h1>
        
      )}
    </>
  );
}

export default BasketPage;
