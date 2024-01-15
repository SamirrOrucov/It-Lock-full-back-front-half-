import React, { useContext, useEffect, useState } from "react";

import "./GlobalBrands.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
function GlobalBrands() {
  const [dbData, setDbData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const [search, setSearch] = useState('')
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
    <input type="text" name="search" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)} id="" />
      <div className="global">
        <div className="global_container">
          <div className="global_container_head">
            <p>OUR CASE STUDY</p>
            <h5>We work with global brands</h5>
          </div>
          <div className="global_container_cards">
            {dbData
            .filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <div key={x._id} className="global_container_cards_card">
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
                      onClick={() => addBasket(x)}
                      className="fa-solid fa-cart-shopping"
                    ></i>
                    {wishlist.some((item) => item._id === x._id) ? (
                      <i
                        onClick={() => handleWishlist(x)}
                        className="fa-solid fa-heart red"
                      ></i>
                    ) : (
                      <i
                        onClick={() => handleWishlist(x)}
                        className="fa-solid fa-heart "
                      ></i>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalBrands;
