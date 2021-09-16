import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"


const Gallery = () => {
    const [Gallery ,SetGallery] = useState(false);
    
    const Img =() =>{

SetGallery(false)
console.log(false)
    }
    const Vd =() =>{
        SetGallery(true)
        }
     const [TabImg,SetTabImg]=useState([
        "Images/Img/img1.jpg",
        "Images/Img/img2.jpg",
        "Images/Img/img3.jpg",
        "Images/Img/img4.jpg",
        "Images/Img/img2.jpg",
        "Images/Img/img1.jpg",
        "Images/Img/img4.jpg",
        "Images/Img/img3.jpg",
       ]
     )  
    
     const [TabVd,SetTabVd]=useState([
        "https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Fmouroujsport%2Fvideos%2F3849267191820895%2F&show_text=false&width=560&t=0" ,
       " https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Fmouroujsport%2Fvideos%2F3849267191820895%2F&show_text=false&width=560&t=0" ,
        "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fmouroujsport%2Fvideos%2F1385500978494078%2F&show_text=false&width=560&t=0",
        "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fmouroujsport%2Fvideos%2F1385500978494078%2F&show_text=false&width=560&t=0",


       ]

     )
      
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (
        <>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >

          <div className="mt-28 z-50" >
            <div className="flex flex-row grid grid-cols-2  justify-items-center font-bold cursor-pointer   ">
            <h1 className={Gallery ? "  py-4 " :"bg-white shadow-sm  text-red w-full  text-center  py-4 "} onClick={Img}>Images</h1>
            <h1 className={Gallery ? " bg-white shadow-sm  text-red w-full  text-center  py-4 " :"  py-4 "} onClick={Vd}>Video</h1>
            
            </div>
            {Gallery ? 
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center my-10 bg-white py-8 ">   
               {TabVd.map(tab =>   ( <iframe src={tab} width="380" height="250" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>))}
           </div>
           :
           <motion.div initial={{scaleX:0}} animate={{scaleX:1}} exit={{scaleX:0}} transition={{duration:0.7}} >

           <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center my-10 bg-white py-8 ">
           {TabImg.map(tab =>   (<img className=" w-auto h-72  p-1 shadow-lg rounded-sm cursor-pointer transform  hover:scale-90 duration-700	 " src={tab} alt="" />))}
         </div>
         </motion.div>

        
         }
          
        </div>
       
        </motion.div>
            
        </>
    )
}

export default Gallery
