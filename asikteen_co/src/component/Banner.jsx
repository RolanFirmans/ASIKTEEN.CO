import React from "react";
import "../Css/Css.css";
import sepatu from "../assets/img/sepatu.png";
import freeshiping from "../assets/img/freeshiping.png"
import payment from "../assets/img/payment.png"
import Money from "../assets/img/money.png"
import chat from "../assets/img/chat.png"
import dus from "../assets/img/dus.png"
import men from "../assets/img/men.png"
import women from "../assets/img/women.png"
import collection from "../assets/img/collection.png"


const Banner = () => {
    return (
        <div className="ad-section">
        <div className="content">
          <h2>Asikeen.co</h2>
          <h1>Start Shopping <br></br>
            on the website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nunc ex libero, vulputate eget
            viverra ac, viverra in eros. Aenean faucibus <br />
            vehicula convallis. Phasellus non porta ex,
            ac lacinia lacus.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="image">
          <img src={sepatu} />
        </div>
      </div>
    );
}



const Features = () => {
    return(
        <div className="features">
        <div className="feature1">
          <img src={freeshiping} />
          <p>3x Free Shipping</p>
        </div>
        <div className="feature2">
          <img src={payment} />
          <p>Secure Payment</p>
        </div>
        <div className="feature3">
        <img src={Money} />
          <p>100% Money Back</p>
        </div>
        <div className="feature4">
          <img src={chat} />
          <p>Online Support</p>
        </div>
      </div>
    );
}

const DeliverySection = () => {
    return (
      <section className="delivery-section">
        <div className="delivery-content">
          <h1>ASIKTEEN.CO <br />
          DELIVERS TO YOU
          </h1>
      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex libero, vulputate eget viverra ac, viverra in eros.
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="delivery-image">
          <img src={dus} alt="Boxes" />
        </div>
      </section>
    );
  }

const Categories = () => {
    return (
      <div className="categories">
        <div className="category1">
          <img src={men} alt="Men's" />
          <div className="category-content">
            <h2>Men's</h2>  
          </div>
        </div>
        <div className="category2">
          <img src={women} alt="Women's" />
          <div className="category-content">
            <h2>Women's</h2>
          </div>
        </div>
      </div>
    );
  }
  
  const Collection = () => {
    return (
        <div className="collection-compo">
        <div className="collection-images">
          <img src={collection} />
        </div>
        </div>
    );
  }



  export default Banner;
  export { Features};
  export { DeliverySection};
  export {Categories};
  export {Collection};
