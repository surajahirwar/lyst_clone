import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Button,
  Main,
  Wishlist,
} from "../../Style/ProductDetail/ProductDetail";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  //   const data = {
  //     id: 1,
  //     Image:
  //       "https://cdna.lystit.com/200/250/tr/photos/thehut/dbcff7e3/lacoste-White-Pima-T-shirt.jpeg",
  //     title: "BOSS BY HUGO BOSS",
  //     details: "3-pack Logo Short Sleeve T-shirt - Multicolor",
  //     price: 49,
  //     offPrice: 32,
  //     off: "35% off",
  //   };

  useEffect(() => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Main>
      <img src={data.Image} alt="" />
      <div>
        <h2>{data.title}</h2>
        <p>{data.details}</p>
        <h4>{`€ ${data.price}`}</h4>
        <p>VAT exception. VAT not included. </p>
        <p>item no. P00624438</p>
        <select name="" id="sizeOption">
          <option value="">Choose your Size</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <p> Open Size Chart</p>
        <Button>ADD TO SHOPPING BAG </Button>
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
