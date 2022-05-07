import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Main,
  Wishlist,
} from "../../Style/ProductDetail/ProductDetail";
import { addToCart } from "../../Redux/Cart/cartAction";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [size, setSize] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ ...data, size, itemId: uuidv4() }));
  };

  return (
    <Main>
      {/* <Link to="/cart">
        <button>Cart</button>
      </Link> */}
      <img src={data.Image} alt="" />
      <div>
        <h2>{data.title}</h2>
        <p>{data.details}</p>
        <h4>{`€ ${data.price}`}</h4>
        <p>VAT exception. VAT not included. </p>
        <p>item no. P00624438</p>
        <select
          name=""
          id="sizeOption"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Choose your Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <p> Open Size Chart</p>
        <Button onClick={handleClick}>ADD TO SHOPPING BAG </Button>
        <Wishlist>ADD TO WISHLIST</Wishlist>

        {/* <select name="" id="">
          <option className="relative">
            All orders are shipped worldwide via our affiliate courier DHL.
            Please see the shipping method as well as shipping costs and
            delivery times for your destination here. We gladly accept returns
            within 30 days of receipt free of charge.
          </option> */}
        {/* </select> */}

        <p>More questions about this item?</p>
        <p>See more Zimmermann</p>
        <p>See more Clothing by Zimmermann</p>
        <p>See more Midi dresses</p>
      </div>
    </Main>
  );
}
