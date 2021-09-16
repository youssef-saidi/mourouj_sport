import React ,{useState} from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    const [ShowNav ,setShowNav]=useState(true)
    const ShowNavbar = () =>{
        setShowNav(!ShowNav)
        console.log(ShowNav)
    }
  

    return (
        <>
        
        <nav className= "text-blue-4 fixed flex md:flex-row flex-col md:bg-white top-0  md:h-auto h-0 w-full z-30 cursor-pointer md:shadow-2xl select-none	" >
      
<div className="text-left flex bg-white py-5  ">
    <img src="/Images/MsLogo.png" className="relative h-11 w-11 ml-8 left-0" alt="" />
   <p className="md:absolute md:right-0   md:text-right text-center  w-full   font-extralight mt-2 mr-5"> Beta Version</p>
    <button  onClick={ShowNavbar}  class="text-black  mr-8 mb-3  rounded md:hidden ml-auto" >
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 18H11M4 6H20H4ZM4 12H20H4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
              


               
</div>


        <div className={ShowNav ? "  md:m-auto    py-10 md:py-0    flex md:flex-row flex-col   links  font-bold z-20  " : "    md:m-auto  py-10 md:py-0    font-bold  flex md:flex-row flex-col links active z-20  "}>
        <NavLink exact to="/" className="px-4 "  activeClassName="coloritem"  onClick={ShowNavbar}>Home</NavLink>
        <NavLink  to="/OurTeam" className="px-4 " activeClassName="coloritem"  onClick={ShowNavbar}>Our Team</NavLink>
        <NavLink exact to="/About" className="px-4 "  activeClassName="coloritem"  onClick={ShowNavbar}>About</NavLink>
        <NavLink  to="/Training" className="px-4 " activeClassName="coloritem"  onClick={ShowNavbar}>Training</NavLink>
        <NavLink  to="/Gallery" className="px-4 " activeClassName="coloritem"  onClick={ShowNavbar}>Gallery</NavLink>

 

    </div>


        </nav>
     


            
        </>
    )
}

export default Navbar

