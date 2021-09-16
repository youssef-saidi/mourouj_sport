import React,{useEffect}  from 'react'

import Carroussel from '../Components/Carroussel';
import Card from '../Components/Card';
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"





const Home = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  });


 

  const slides = [
    {
      key:'1',
      content: <Card  id='1'
                      title="Nicola Karabatic" 
                      post="Demi Center"
                      img='Images/karabatic.png'
                      
                      />
       
    },
    {
      key:'2',
    content: <Card  id="2"
        title="Thierry Omeyer" 
        post="GoalKeeper"
        img='Images/Omayer.png'
        
        />
      },

      {
        key:'3',
        content: <Card  id="3"
            title="Gensheimer" 
            post="Ailier Droit"
            img='Images/Gensheimer.png'
            
            />
          },
          {
            key:'4',
            content: <Card  id="4"
                title="Nicola Karabatic" 
                post="Arrière Droit"
                img='Images/karabatic.png'
                
                />
              },
              {
                key:'5',
                content: <Card  id="5"
                    title="Gensheimer" 
                    post="Ailier Droit"
                    img='Images/Gensheimer.png'
                    
                    />
                  },
                  {
                    key:'6',
                    content: <Card  id="6"
                        title="Gensheimer" 
                        post="Ailier Droit"
                        img='Images/Gensheimer.png'
                        
                        />
                      },
   
  
  ];
    return (
        <>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >

       <div className=" relative flex w-full  ">
               
                <div className="flex flex-col md:flex-row ">
                <div class="  absolute flex flex-col items-center   lg:mt-0 md:mt-8 mt-16 md:left-28  left-0 justify-center md:w-1/4 w-full h-full ">
                    <h1 class="font-bold 2xl:text-8xl lg:text-7xl md:text-5xl text-3xl text-white  py-5 uppercase text-center ">Welcome </h1>
                    <p className="text-center text-white font-thin  text-sm" >Lorem ipsum, ddebitis velit quo est esse reruaecati autem.</p>
                    <a  href="#about" class="flex text-black my-4  md::w-1/2  items-center font-extrabold text-md shadow  py-3 pl-6  bg-white  rounded-lg" data-aos="zoom-in-up">
                    <span >Get Started</span>
                  <img src="Images/DropDown.png" className="w-8 lg:ml-2 mt-2 animate-bounce " alt="" />
                </a>
                </div>
                <img src="Images/MsLogo.png" className="md:absolute md:block hidden  xl:w-96  md:w-72 left-2/3 mr-36 top-1/4 " alt="" />
                </div>
                <div className="w-full">
            <img src="Images/BgBlack.png" className="w-full " alt="" /></div>
        </div>
        <div id="about"></div>
        <div className="  grid md:grid-cols-2  grid-cols-1 justify-items-center my-10" >
            <div className="flex flex-col  justify-center items-left w-1/2">
                <h1 className="text-black title font-bold md:text-3xl text-2xl">Mourouj Sport</h1>
                <p className="font-then py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
                <NavLink exact to="/About"   activeClassName="coloritem" className="flex text-white my-4   md:w-36  items-center font-extrabold text-md shadow  py-3 justify-center  bg-black  rounded-lg" data-aos="zoom-in-up">
                    <span >Read More</span>
                </NavLink>
            </div>
                    <img src="Images/Hand.png" className="h-auto w-1/2" alt="" />


        </div>

        <div className="relative my-16 w-full ">
            <div className="absolute w-full  ">
           <h1 className="text-white font-bold  text-4xl m-8 ">First Team</h1>
           <Carroussel
        cards={slides}
        offset={2}
        showArrows={true}
        goToSlideDelay={2000}
     

        
        
      /></div>
      
        <div className="w-full">
            <img src="Images/BgBlack1.png" className="w-full bgblack" alt="" />
            </div>
        </div> 
        
       
       
        </motion.div>
        </>
    )
}

export default Home
