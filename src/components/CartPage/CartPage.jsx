import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart } from "../../Redux/Cart/cartAction";
import {
  Cart,
  Checkout,
  ContactDiv,
  Div,
  Input,
  Item,
  ItemDiv,
  NavDiv,
} from "../../Style/CartPage/CartPage";
import { Price } from "../ProductPage/components/dropdown";

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
        <Checkout>
          <Link to="/address">
            <button>PROCEED TO CHECKOUT</button>
          </Link>
          <div>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>
        </Checkout>
        <hr />
      </div>
      <div>
        {store.map((e) => {
          return (
            <ItemDiv key={e.id}>
              <Item>
                <img src={e.Image} alt="" />
                <div className="div">
                  <h2>{e.title}</h2>
                  <h4>{e.details}</h4>
                  <h4>Size: {e.size}</h4>
                  <button onClick={() => handleRemove(e)}>Remove</button>
                  <button>Add to Wishlist</button>
                </div>
                <div className="flex">
                  <p>{e.price}</p>
                  <p>1</p>
                  <p>{e.price}</p>
                </div>
              </Item>
            </ItemDiv>
          );
        })}

        <Price>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </Price>
      </div>
      <p className="leftAlign">YOUR CURRENT PROMOTIONS</p>
      <p className="leftAlign">Free Shipping</p>
      <hr />
      <Div>
        <div>
          <Input
            type="text"
            placeholder="Gift Card/ Store Credit/ Promo Code"
          />
          <button className="code">USE CODE</button>
        </div>

        <div>
          <p>Subtotal: </p>
          <h5>Grand Total: </h5>
          <p>VAT exception. VAT not included. Shipping not included.</p>
        </div>
      </Div>
      <NavDiv>
        <button>CONTINUE SHOPPING</button>
        <Link to="/address">
          <button>PROCEED TO CHECKOUT</button>
        </Link>
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
