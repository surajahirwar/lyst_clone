import { useSelector } from "react-redux";
import {
  Cart,
  ContactDiv,
  Div,
  NavDiv,
  ProdDiv,
} from "../../Style/CartPage/CartPage";

export default function CartPage() {
  const store = useSelector((store) => store);

  console.log("store", store);
  return (
    <Cart>
      <div></div>
      <ProdDiv>
        {store.map((e) => {
          return (
            <div>
              <div>
                <img src={e.Image} alt="" />
                <div>
                  <h2>{e.title}</h2>
                  <h4>{e.details}</h4>
                  <h4>Size: {e.size}</h4>
                  <button>Remove</button>
                  <button>Add to Wishlist</button>
                </div>
              </div>
            </div>
          );
        })}
      </ProdDiv>
      <p>YOUR CURRENT PROMOTIONS</p>
      <p>Free Shipping</p>
      <Div>
        <hr />
        <div>
          <input
            type="text"
            placeholder="Gift Card/ Store Credit/ Promo Code"
          />
          <button>USE CODE</button>
        </div>
        <div>
          <p>Subtotal: </p>
          <h5>Grand Total: </h5>
          <p>VAT exception. VAT not included. Shipping not included.</p>
        </div>
      </Div>
      <NavDiv>
        <button>CONTINUE SHOPPING</button>
        <button>PROCEED TO CHECKOUT</button>
      </NavDiv>
      <hr />
      <div>
        <p>You can also place your order via telephone.</p>
        <ContactDiv>
          <div>
            <p>CALL US</p>
            <p>+49 89 127695-101</p>
            <p>Available 24/7</p>
          </div>
          <div>
            <p>MAIL US</p>
            <p>customercare@lyst.com</p>
          </div>
        </ContactDiv>
      </div>
    </Cart>
  );
}
