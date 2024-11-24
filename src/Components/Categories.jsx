import { useContext, useEffect, useState } from "react"
import {  NavLink } from "react-router-dom";
import  { AuthContextApi } from "../AuthContext/AuthContext";
// import '../Style/categories.css';


export default function Categories (){
    
    const [categories, setCategories] = useState([]);
    const {handleCategories} = useContext(AuthContextApi)

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="flex flex-col">
            <h1 className="font-display font-semibold mb-5">All Categories</h1>
           {
            categories.map(category => <NavLink onClick={() => handleCategories(category.id)} key={category.id} className="text-[#9F9F9F] p-5">{category.name}</NavLink>)
           }
        </div>
    )
}