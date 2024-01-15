import React from "react";
import "./HeaderSection.scss";
function HeaderSection() {
  return (
    <div className="header">
      <div className="header_TextContainer">
        <h5>Best IT Solution in your city</h5>
        <div className="line"></div>
        <p>
          Prevent data loss with encrypted storage and virtualized recovery,
          then enjoy increased productivity.
        </p>
        <button>Find Out More</button>
      </div>
    </div>
  );
}

export default HeaderSection;
