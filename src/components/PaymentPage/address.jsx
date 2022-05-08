import "./address.css";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
export const Address = ()=>{
    const Price = useSelector((store)=>store.cart);
    console.log( "P", Price);
      var sum=0;
    for(let i=0; i<Price.length; i++){
       sum  += Price[i].price;
    }
    var ship = 687;
    var tax = 200;
    var discount = (sum*10)/100;
    var Total = sum + ship + tax - discount; 

     return(
         <div className="mainbox">
           <div className="leftbox">
            <h2 id="H">Secure Checkout</h2> 
            <h5 id="H">Already have a Borderfree account?<span> Click<a href=""> here.</a> ?</span></h5> <br />   
            <hr />
            <h3 id="H">1. Delivery</h3>
          <form action="">
              <input id="email" type="text" placeholder="Email" /><br/><br />
              <input id="first" type="text" placeholder="First Name" />
              <input id="last" type="text"placeholder="Last Name" /><br/><br />
              <input id="address" type="text" placeholder="Address" /><br /><br />
              <input id="address2" type="text" placeholder="Address2 (Optional)"/>
              <input id="postalcode" type="number"placeholder="Postal Code" /><br /><br />
              <input id="city" type="text" placeholder="City" />
              <input id="region" type="text" placeholder="Region (Optional)" /><br /><br />
              <input id="phone" type="number" placeholder="Phone" />
              <input id="location" type="text" placeholder="Location" /><br /><br />
          </form>
          <Link to="/payment">
          <p id="btn">Continue</p> 
          </Link>
          </div> 
          <div className="rightbox">
              <h2>Your Order</h2>
               <Link to="/payment">
               <p id="button">Continue</p>
               </Link>
               <div id="cart">
                   <div className="left">
                    <p>Items</p>
                    <p>Shipping </p>
                    <p>Duties & Taxes </p>
                    <p>Order Discount</p>
                    <h2>Total</h2>
                   </div>
                   <div className="right">
                       <p>€ {sum}</p>
                       <p>€ {ship}</p>
                       <p>€ {tax}</p>
                       <p>-€ {discount}</p>
                       <h3>€ {Total}</h3>
                   </div>
               </div>
          </div>
         </div>
     );
}