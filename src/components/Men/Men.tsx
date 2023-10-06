import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from "../../assets/menimage.webp";
import Image from 'next/image';
import Menclothing from '../Menclothing/Menclothing';

const Men = () => {
  return (
    <div>
        <Navbar />
        <div className="main-banner" style={{marginTop : "90px"}}>
            <Image src={Banner} alt="banner" style={{width : "100%", height : "50vh"}} />
        </div>
        <Menclothing />
    </div>
  )
}

export default Men