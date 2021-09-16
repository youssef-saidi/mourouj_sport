import React ,{useEffect}from 'react'
import {motion} from "framer-motion"


const About = () => {
     
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (
        <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.8}} >
        <div className="mt-28 mb-36">
        <div className="flex lg:flex-row flex-col    lg:justify-around justify-center items-center mx-20 my-10">
          
               <div className="flex flex-col  justify-center lg:items-start  items-center lg:w-1/4 ">
                    <h1 className="text-black title font-bold md:text-3xl text-2xl" data-aos="fade-up"  data-aos-duration="1000">About The Academy</h1>
                    <p className="font-then lg:text-left text-center py-5" data-aos="zoom-in"  data-aos-duration="1000">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
                </div>
     <img src="Images/Hand.png" className="h-auto md:w-1/4 w-1/2 "  data-aos="zoom-in-up"  data-aos-duration="1000" alt="" />
        </div>
        <div className="flex lg:flex-row-reverse flex-col    lg:justify-around justify-center items-center mx-10 my-10">
          
               <div className="flex flex-col  justify-center lg:items-start  items-center lg:w-1/4 ">
                    <h1 className="text-black title font-bold  md:text-3xl text-2xl" data-aos="fade-up"  data-aos-duration="1000">Our Objectif</h1>
                    <p className="font-then lg:text-left text-center py-5" data-aos="zoom-in"  data-aos-duration="1000">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
                </div>
     <img src="Images/Hand.png" className="h-auto md:w-1/4 w-1/2 " data-aos="zoom-in-up"  data-aos-duration="1000" alt="" />
        </div>

   

        <div className="flex justify-center items-center my-28 ">
            
            <h1 className="font-bold title text-black md:text-4xl text-3xl  " data-aos="fade-up"  data-aos-duration="1000">Members</h1></div>
            <div className="grid md:grid-cols-3 grid-cols-1  justify-items-center ">
           <div className="bg-white  w-56 h-56  flex flex-col justify-center items-center  shadow-xl rounded-md my-20 " data-aos="flip-left"  data-aos-duration="1000">
               <img src="Images/Gensheimer.png" className="w-36 h-42 relative bottom-16 " alt="" />
               <div className="relative  bottom-14  ">
               <h1 className="font-bold text-red text-center py-1">Gensheimer</h1>
               <h1 className="font-bold text-black text-center py-1">President</h1>
               <h3 className="font-thin text-black py-1">Phone : +216 96 232 ..</h3>

               </div>
            </div>

            <div className="bg-white  w-56 h-56  flex flex-col justify-center items-center  shadow-xl rounded-md md:relative md:top-16 my-20 " data-aos="flip-up"  data-aos-duration="1000">
               <img src="Images/Gensheimer.png" className="w-36 h-42 relative bottom-16 " alt="" />
               <div className="relative  bottom-14  ">
               <h1 className="font-bold text-red text-center py-1">Gensheimer</h1>
               <h1 className="font-bold text-black text-center py-1">President</h1>
               <h3 className="font-thin text-black py-1">Phone : +216 96 232 ..</h3>

               </div>
            </div>

            <div className="bg-white  w-56 h-56  flex flex-col justify-center items-center  shadow-xl rounded-md  my-20" data-aos="flip-right"  data-aos-duration="1000">
               <img src="Images/Gensheimer.png" className="w-36 h-42 relative bottom-16 " alt="" />
               <div className="relative  bottom-14  ">
               <h1 className="font-bold text-red text-center py-1">Gensheimer</h1>
               <h1 className="font-bold text-black text-center py-1">President</h1>
               <h3 className="font-thin text-black py-1">Phone : +216 96 232 ..</h3>

               </div>
            </div>
            
            
            
             </div>

             <div className="flex flex-col justify-center items-center my-28 ">
            
            <h1 className="font-bold title text-black md:text-4xl text-3xl  " data-aos="fade-up"  data-aos-duration="1000">Find  Us on Google Maps</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.6252960343888!2d10.211615036388695!3d36.740555669256246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd370d894e31a5%3A0x4d465795622d246e!2sstade%20municipale%20El%20Mourouj%201!5e0!3m2!1sfr!2stn!4v1631462690638!5m2!1sfr!2stn"  style={{border:"0"}} allowfullscreen="" loading="lazy" title="Stade municipale El mourouj 1" className="w-full md:px-20 px-5 my-10 h-96" ></iframe>
            
            </div>
            
             </div>
             </motion.div>
        </>
    )
}

export default About
