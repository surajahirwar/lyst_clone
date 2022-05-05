import  "./paymentDetails.css";

export const Paymentdetails = ()=>{

     return(
         <div className="mainbox">
           <div className="leftbox">
            <h2>Secure Checkout</h2> 
            <h5>Already have a Borderfree account?<span> Click<a href=""> here.</a> ?</span></h5>   
            <hr />
            <h3>2. Payment</h3> 
          <form action="">
                <input type="radio"  name="fav_language"  value="Creadit Cart"/>
                <label for="Credit Cart">Credit Card</label>
               <input type="radio"  name="fav_language" value="PayPal"/>
               <label for="PayPal">PayPal</label>
               <input type="radio"  name="fav_language" value="Debit Cart"/>
               <label for="Debit Cart">Debit Cart</label><br /><br />
              <input id="email" type="text" placeholder="Name on Card" /><br/><br />
              <input id="address" type="number" placeholder="Credit Card Number" /><br /><br />
              <input id="first" type="text" placeholder="Expiry Date" />
              <input id="last" type="number"placeholder="CVV" /><br/><br />
              <input type="checkbox" name="chechout" value=""/>
              <label htmlFor="checkout">Save credit card</label><br /><br />

          </form>
          <p id="btn">SAVE & CONTINUE </p> 
          </div> 
          <div className="rightbox">
              <h2>Your Order</h2>
               <p id="button">SAVE & CONTINUE</p>
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

