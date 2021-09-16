import React,{useState} from 'react'
import Card from "../Components/Card"

const OurTeam = () => {
    const [tab,SetTab]= useState([
        {
            id:"1", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
        {
            id:"2", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
        {
            id:"3", 
            title:"karabatic" ,
            post:"Demi Center",
            img:'Images/karabatic.png',
        },
        {
            id:"4", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
        {
            id:"5", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Omayer.png',
        },
        {
            id:"6", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
        {
            id:"7", 
            title:"karabatic" ,
            post:"Arriere Droit",
            img:'Images/karabatic.png',
        },
        {
            id:"8", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
        {
            id:"9", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/karabatic.png',
        },
        {
            id:"10", 
            title:"Gensheimer" ,
            post:"Ailier Droit",
            img:'Images/Gensheimer.png',
        },
      


    ])


    return (
        <>
             <div className=" relative flex  w-full z-20 mb-36 ">
               
               <div className=" absolute  mt-20 w-full ">
           <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-items-center">
           { tab.map(tb => ( <Card  id={tb.id}
                    title={tb.title} 
                    post={tb.post}
                    img={tb.img}
                    
                    />)) }
           </div>
                    <div className="flex justify-center items-center ">
               <Card  id="5"
                    title="Gensheimer" 
                    post="Ailier Droit"
                    img='Images/Gensheimer.png'
                    
                    />
                    <Card  id="5"
                    title="Gensheimer" 
                    post="Ailier Droit"
                    img='Images/karabatic.png'
                    
                    />
               </div>
               <div className="flex justify-center items-center ">
               <Card  id="5"
                    title="Coach" 
                    post="Coach"
                    img='Images/coach.png'
                    
                    />
                  
               </div>
               </div>
           
               <div className="w-full">
           <img src="Images/BgBlack.png" className="w-full bgblackTeam " alt="" />
           </div>
       </div>
           
        </>
    )
}

export default OurTeam
