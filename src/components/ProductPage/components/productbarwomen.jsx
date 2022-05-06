import {useEffect,useState} from "react"
import { BsHeart } from "react-icons/bs";
import styledComponents from "styled-components";
import axios from "axios";


const Container=styledComponents.div`
    width:100%;
  height:100%;
    display:flex;
  flex-direction: column;
`;
const Titlebar=styledComponents.div`
   display:flex;
   flex-direction: column;
`;

const Sort=styledComponents.div`
   display:flex;
   justify-content:space-between;
`;
// const ItemSort=styledComponents.div`
//   background-color:rgb(245,244,242);
//   display:flex;
//   justify-content:center;

// `;
// const Btn=styledComponents.button`

//   border:0;
//   background-color:white;
// `;

const Box=styledComponents.div`
   flex:4;
   height:1000px;
   display:grid;
   grid-template-columns: repeat(4,25%);
   grid-template-rows: repeat(40,500px);
`;
const Productcount=styledComponents.p`
font-size:x-large;
`;
const SortButton=styledComponents.select`
background-color:white;
color:black;
font-weight:bold;
padding:0px 35px;
height:35px;
margin-top:25px;
`;
const ProductBox = styledComponents.div`
 border:0.1px solid gainsboro;
 display:flex;
 flex-direction:column;
 
`;
const Image=styledComponents.img`
  width:90%;
  height:100%;
  object-fit:cover;
`;
const ImageDiv=styledComponents.div`
height:70%;
flex:3;
width:100%;
margin:auto;
padding:10px;
`;
const ProductInfo=styledComponents.div`
   width:100%;
   height:30%;
   display:flex;
   flex-direction: column;
   padding:5px;
   justify-content:center;
   flex:1;
`;
const InfoDiv=styledComponents.div`
  width:100%;
  height:40%;
  flex:1;
`;
const Details=styledComponents.p`
   margin-top:-15px;
   font-size:15px;
`;
const ProTitle=styledComponents.p`
   font-size:large;
`;
const Pricediv=styledComponents.div`
  display:flex;
  justify-content:left;

`;
const Offprice=styledComponents.p`
  text-decoration: line-through;
  font-weight:bold;
`;
const Proprice=styledComponents.p`
  color:red;
  font-weight:bold;
  margin-left:5px;
`;
const Offer=styledComponents.p`
 color:gray;
 margin-left:10px;
`;
const Icondiv=styledComponents.div`

 width:8%;
 height:8%;
 border-radius:50%
 margin:auto;
 background-color:white;
 margin-left:200px;
 transition:all 0.5s ease;
 cursor:pointer;
 &:hover{
  transform:scale(1.5);
 }
`;

//Popup styles



export const ProductbarW=()=>{
  const { id } = useParams();
  const [data, setData] = useState({});
  //  const [data,setData]=useState();
  //  const handleSort = (e)=>{
  //   if(e.target.value==="highToLow"){
  //      setData([...data].sort((a,b)=>b.offprice-a.offprice))
  //   }
  //   else if(e.target.value==="lowToHigh"){
  //    setData([...data].sort((a,b)=>a.offprice-b.offprice))
  //   }
  //   else if(e.target.value==="no"){
  //     setData(WomensData)
  //   }
  // }

  useEffect(() => {
    axios.get(`http://localhost:8080/data/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);




    return (
      <Container>
            <main>
        <Titlebar>
             <Sort>
                <Productcount>{}Products,Stores</Productcount>
               <SortButton onChange={handleSort}>
                      <option value="no">Sort By Recommended</option>
                      <option  value="highToLow">Sort by price(high to low)</option>
                      <option value="lowToHigh">Sort by price(low to high)</option>
                 </SortButton>
             </Sort>
             {/* <ItemSort>
               <Btn>+ Tops</Btn>
               <Btn>+ Dresses</Btn>
               <Btn>+ Pants</Btn>
               <Btn>+ Knitwear</Btn>
               <Btn>+ Jackets</Btn>
               <Btn>+ Skirts</Btn>
               <Btn>+ Jeans</Btn>
               <Btn>+ Activewear</Btn>
               <Btn>+ Beachwear</Btn>
               <Btn>+ Lingerie</Btn>
               <Btn>+ Shorts</Btn>
               <Btn>+ Coats</Btn>
               <Btn>+ Nightwear</Btn>
             </ItemSort> */}
        </Titlebar>
           <Box>
            {data.map((e)=>(
              
               <ProductBox >
                  <ImageDiv>
                  <Image src={e.image}></Image>
                  </ImageDiv>
                  
                   <ProductInfo>
                 <Icondiv><BsHeart/></Icondiv>
                     <InfoDiv><ProTitle>{e.title}</ProTitle>
                     <Details>{e.details}</Details></InfoDiv>
                     <Pricediv>
                     <Offprice>{e.price} </Offprice>
                   <Proprice>${e.offprice}</Proprice>
                     <Offer>({e.off})</Offer>
                     </Pricediv>
                   </ProductInfo>
               </ProductBox>
              
            ))}
           </Box>
           </main>
          
      </Container>
    );
};