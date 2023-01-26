import RestrauntCard from  "./RestrauntCard"
import { useState, useEffect } from "react";  
import Shimmer from "./Shimmer";
function filterData(searchText,restraunts){
    const filterData = restraunts.filter((e)=>
    e?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())); 
    return filterData;
}
const Body = () => {
 // let searchText="KFC"
 const [allRestaurants, setAllRestaurants]= useState([]);
 const [filteredRestraunts, setFilteredRestraunts]= useState([])
 const [searchText, setSearchText]=useState("");
// console.log("render()")
useEffect(()=>{
//API call
getRestaurants();
},[])
async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
//  console.log(json);
setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
}
if(!allRestaurants) return null;
    return (allRestaurants?.length===0) ? <Shimmer/> : (
<>
<div className="search-container" >
   <input type="text" className="search-input" placeholder="search"
    value={searchText}
    onChange={(e)=>{
      setSearchText(e.target.value);
    }}
   />
   <button className="search-btn" onClick={()=>{
    //need to filter the data
   const data= filterData(searchText,allRestaurants);
   setFilteredRestraunts(data);
   }} >search</button>
</div>
<div className="restaurant-list" >
{
    // if(filteredRestraunts?.length===0){
    //   return <h1>No Restaurants matches your filter!!</h1>
    // }
  filteredRestraunts.map((restaurant)=>{
    return <RestrauntCard {...restaurant.data}  key={restaurant.data.id} />;
  })
}
    </div>
</>
    )
  }
  export default Body;
