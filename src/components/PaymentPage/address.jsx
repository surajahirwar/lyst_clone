import "./address.css";

export const Address = ()=>{

     return(
         <div className="mainbox">
           <div className="leftbox">
            <h2>Secure Checkout</h2> 
            <h5>Already have a Borderfree account?<span> Click<a href=""> here.</a> ?</span></h5>   
            <hr />
            <h3>1. Delivery</h3>
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
          <p id="btn">Continue</p> 
          </div> 
          <div className="rightbox">
              <h2>Your Order</h2>
               <p id="button">Continue</p>
               <div id="cart">
                   <div className="left">
                    <p>Items</p>
                    <p>Shipping ?</p>
                    <p>Duties & Taxes ?</p>
                    <p>Order Discount</p>
                    <h2>Total</h2>
                   </div>
                   <div className="right">
                       <p>₹ 4,545</p>
                       <p>₹ 6,87</p>
                       <p>₹ 8,67</p>
                       <p>-₹ 4,87</p>
                       <h3>₹5,887</h3>
                   </div>
               </div>
          </div>
         </div>
     );
}