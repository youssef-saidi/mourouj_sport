import React from 'react'
import {NavLink} from 'react-router-dom'




const Card = (props) => {
    const tableau = 
        {
                      id:props.id,
                      title:props.title ,
                      post:props.post,
                      img:props.img
        }
    
    
    return (
        <>
           
            <div  class="md:w-52 w-48 m-3 h-96 bg-transparent  relative group overflow-hidden cursor-pointer mb-10">
     <div class="overflow-hidden">
     <NavLink exact to={{
   pathname:'/Details',
   state: {Tab:tableau}  
 }}
  >  <img class="w-52 h-72 rounded-md"  src={props.img} alt=""/></NavLink>
        </div>
        <div class=" flex flex-col justify-center items-center  p-3" >
        <NavLink exact to={{
   pathname:'/Details',
   state: {Tab:tableau}  
 }}
  >
      <h1 class="font-bold  text-white text-xl py-2">{props.title}</h1></NavLink>

            
      <NavLink exact to={{
   pathname:'/Details',
   state: {Tab:tableau}  
 }}
  >  <h2 class="font-bold  title   text-red text-md py-2">{props.post}</h2></NavLink>

           
        </div>
    </div>
        </>
    )
}

export default Card
