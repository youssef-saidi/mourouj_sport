import React ,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {motion} from "framer-motion"


const Details = () => {
    let location = useLocation();
    
    const tbl =location.state.Tab
    useEffect(() => {
       
          window.scrollTo(0, 0);
        });
    
    return (
        <>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >

      <div className=" relative flex  w-full z-20 mb-36 ">
               
                <div className=" absolute flex flex-col lg:flex-row  mt-16 w-full ">
                <div class=" z-20  flex flex-col m-auto  lg:pt-24     ">


                   <div className="  flex flex-col items-center justify-center my-10">  
                    <h1 class="font-bold 2xl:text-8xl  lg:text-5xl text-3xl text-white   ">{tbl.title}</h1>
                    <h2 class="font-bold  title   text-red text-xl  py-2">{tbl.post} </h2>                
                   </div>
                   
                    <div className=" flex flex-row  2xl:text-5xl lg:text-4xl md:text-3xl text-xl my-5 lg:items-start  items-center lg:justify-start justify-center ">
                           <h2 class="font-bold  text-red  py-2 pr-5">Birth Date :</h2>                
                           <h2 class="font-bold    text-white py-2">1985-10-09</h2>                
                      </div>
                      <div className=" flex flex-row 2xl:text-5xl lg:text-4xl md:text-3xl text-xl my-5 lg:items-start  items-center lg:justify-start justify-center  ">
                           <h2 class="font-bold  text-red  py-2 pr-5">Weight :</h2>                
                           <h2 class="font-bold     text-white  py-2">85 Kg</h2>                
                      </div>
                      <div className=" flex flex-row 2xl:text-5xl lg:text-4xl md:text-3xl text-xl my-5 lg:items-start  items-center lg:justify-start justify-center">
                           <h2 class="font-bold   text-red py-2 pr-5">Height :</h2>                
                           <h2 class="font-bold    text-white  py-2">189 cm</h2>                
                      </div>
                      <div className=" flex flex-col  my-5  lg:items-start  items-center lg:justify-start justify-center">
                           <h2 class="font-bold lg:text-2xl text-lg   text-red text-lg ">Biography :</h2>                
                           <p className="text-center text-white font-thin  text-sm py-2  lg:mx-0 mx-16 " >Lorem ivpsum, ddebitis velit quo est autem.
                         quo est esse reruaecati autem.</p>
              
                      </div>
               
               
               
               
                </div>
                   

                <img src={tbl.img} className=" xl:w-96  lg:w-72 w-64 lg:mx-0 mx-auto lg:mr-36  lg:mr-28 lg:mt-36 " alt="" />
                </div>
                <div className="w-full">
            <img src="Images/BgBlack.png" className="w-full bgblackDet " alt="" />
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Details
