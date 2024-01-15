import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./WishlistPage.scss";
function WishlistPage() {
  const { wishlist, handleWishlist } = useContext(WishlistContext);

  return (
    <>
      {wishlist.length ? (
        <div className="wishlist_container">
          <div className="wishlist_container_cards">
            {wishlist.map((x) => (
              <div className="wishlist_container_cards_card">
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
                      onClick={() => handleWishlist(x)}
                      className="fa-solid fa-xmark"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Wishlist is empty...</h1>
      )}
    </>
  );
}

export default WishlistPage;
