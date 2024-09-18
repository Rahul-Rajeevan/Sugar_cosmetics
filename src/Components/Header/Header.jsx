import React from "react";
import styles from "./header.module.css";
import logo from "./Assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div>
          <p>New launch⚠️: Try our Transferproof Lipgloss at Rs.699</p>
          <div>
            <span>
              <i class="fa-solid fa-phone fa-lg"></i>GET APP
            </span>
            <span>
              <i class="fa-solid fa-location-pin fa-lg"></i>STORE
            </span>
            <span>
              <i class="fa-solid fa-gift fa-lg"></i>GIFT CARD
            </span>
            <span>
              <i class="fa-solid fa-question fa-lg"></i>HELP
            </span>
          </div>
        </div>
        <nav>
          <img src={logo} alt="" />
          <div>
            <input type="text" placeholder='Try "Liquid Lipstick"' />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
          <div>
            <p>
              <i class="fa-solid fa-user"></i>Login/Register
            </p>
          </div>
          <div>
            <i class="fa-regular fa-heart" title="Favorites"></i>
            <i class="fa-solid fa-bag-shopping" title="Cart"></i>
            <i class="fa-solid fa-tag" title="Offers"></i>
          </div>
        </nav>
        <div>
          <span>SUGAR PLAY</span>
          <span>LIPS</span>
          <span>EYES</span>
          <span>FACE</span>
          <span>NAILS</span>
          <span>SKINCARE</span>
          <span>ACCESSORIES</span>
          <span>GIFTING</span>
          <span>BESTSELLERS</span>
          <span>NEW LAUNCHES</span>
          <span>OFFERS</span>
          <span>BLOG</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
