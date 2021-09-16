import React from 'react'
import {Link} from 'react-router-dom'
import {BiEnvelope} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'



const Footer = () => {
    return (
        <>
        <footer className="bg-white z-30  shadow-2xl ">
     <div className="w-full flex justify-center">  <img src="Images/MsLogo.png" className=" mt-10 h-24 w-24" alt="" /></div> 


            <div className="grid md:grid-cols-2 grid-cols-1 bg-transparent text-white-1 justify-items-center py-10">
                <div className="my-2 ">
                    <h1 className="uppercase text-3xl font-bold select-none ">Contact Us</h1>
                   <div className="flex my-5 font-semibold  ">
                       <BiEnvelope className='mr-3 text-2xl text-black' />
                       <p>info@example.com</p>
                   </div>
                   <div className="flex  my-5  font-semibold">
                       <BiPhoneCall className='mr-3  text-2xl text-black' />
                       <p>06.23.77.82.32</p>
                   </div>
                </div>
                <div  className="my-2">
                    <h1 className="uppercase text-3xl font-bold select-none ">Navigate</h1>
                   <div className="flex flex-col my-2 md:items-start items-center  font-semibold ">
                   <Link to="/" className="hover:text-gray-700" >Home</Link>
                     <Link  to="/OurTeam" className="hover:text-gray-700" >OurTeam</Link>
                 <Link  to="/About" className="hover:text-gray-700" >About</Link>
                    <Link  to="/Training" className="hover:text-gray-700" >Training</Link>
                    <Link  to="/Gallery" className="hover:text-gray-700" >Gallery</Link>
                   </div>
                </div>

            </div>
            <div className="bg-black px-5">
                <h1 className='text-center md:text-2xl text-md text-white pt-5'>Copyright © Mourouj Sport 2021, All rights reserved</h1>
                <h1 className='text-center font-light md:text-sm text-sm text-white py-2 '>Powered By : <strong className="font-bold "> <a href="https://www.facebook.com/youssefsaidi869/" target='_blank' className="hover:text-blue-600">Youssef Saidi</a> </strong> && <strong className="font-bold">Nour Ayechi</strong></h1>

            </div>
           
        </footer>
            
        </>
    )
}

export default Footer

