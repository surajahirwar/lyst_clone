import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../Redux/Cart/cartAction";
import {
  Cart,
  ContactDiv,
  Div,
  Item,
  NavDiv,
  ProdDiv,
} from "../../Style/CartPage/CartPage";

export default function CartPage() {
  const store = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleRemove = (data) => {
    dispatch(deleteCart(data));
  };

  return (
    <Cart>
      <div>
        <h2>YOUR SHOPPING BAG </h2>
      </div>
      <ProdDiv>
        {store.map((e) => {
          return (
            <>
              <Item key={e.id}>
                <img src={e.Image} alt="" />
                <div>
                  <h2>{e.title}</h2>
                  <h4>{e.details}</h4>
                  <h4>Size: {e.size}</h4>
                  <button onClick={() => handleRemove(e)}>Remove</button>
                  <button>Add to Wishlist</button>
                </div>
              </Item>
            </>
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
