import  "./paymentDetails.css";
  import { useSelector } from "react-redux";
export const Paymentdetails = ()=>{
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
            <h2 className="H">Secure Checkout</h2> 
            <h5 className="H">Already have a Borderfree account?<span> Click<a href=""> here.</a> ?</span></h5><br />   
            <hr />
            <h3 className="H">2. Payment</h3> 
            <form >
               <input  className="H" type="radio"  name="fav_language"  value="Creadit Cart"/>
                <label for="Credit Cart">Credit Card</label>
               <input className="H" type="radio"  name="fav_language" value="PayPal"/>
               <label for="PayPal">PayPal</label>
               <input className="H" type="radio"  name="fav_language" value="Debit Cart"/>
               <label for="Debit Cart">Debit Cart</label><br /><br />  
              <input id="email" type="text" placeholder="Name on Card" /><br/><br />
              <input id="address" type="number" placeholder="Credit Card Number" /><br /><br />
              <input id="first" type="text" placeholder="Expiry Date" />
              <input id="last" type="number"placeholder="CVV" /><br/><br />
              <input id="checkbox" type="checkbox" name="chechout" value=""/>
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
                       <p>₹ {sum}</p>
                       <p>₹ {ship}</p>
                       <p>₹ {tax}</p>
                       <p>-₹ {discount}</p>
                       <h3>₹ {Total}</h3>
                   </div>
               </div>
          </div>
         </div>
     );
}


