import { useEffect, useState } from "react";
import Proudect from "../components/Proudect"

export const Home = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
const fetchproudects=async()=>{
const res=await fetch('https://fakestoreapi.herokuapp.com/products') .then(res=>res.json()) .then(json=>setItems(json))

console.log(items)
}
fetchproudects()
    },[])
    
    return (
    <div className="row">

        {items.map((item) => {
            return <Proudect item={item}/>})
        }
    </div>    
    )
}
export default Home;