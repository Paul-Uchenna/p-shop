import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (175)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          E-commerce, short for electronic commerce, refers to the buying and
          selling of goods or services over the Internet. This includes online
          retail, where consumers purchase products on websites like Amazon or
          eBay. It also encompasses electronic marketplaces, where businesses
          and individuals can trade goods and services. Online auctions, where
          items are sold to the highest bidder, are another form of e-commerce,
          as are payment gateways that process online payments through systems
          like PayPal or Stripe.
        </p>
        <p>
          E-commerce also involves online banking services, enabling the
          management of financial transactions over the Internet, and the sale
          of digital content, such as music, videos, or e-books. E-commerce has
          transformed traditional retail by offering convenience, a broader
          selection of products, and the ability to shop globally.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
