import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Yours Email </h1>
      <p>Suscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your email" />
        <button>Succribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
