import React, { useEffect, useState } from 'react'
import Proudectpage from '../components/Proudectpage';

export const Proudectpageview = ({match}) => {
    const [item, setItem] = useState([]);
    useEffect(() =>{
const fetchproudects=async()=>{
const res=await fetch(`https://fakestoreapi.herokuapp.com/products/${match.params.id}`) .then(res=>res.json()) .then(json=>setItem(json))


}

fetchproudects()
    },[])
    return (
       
        <Proudectpage item={item}/>
    )
}
export default Proudectpageview;
