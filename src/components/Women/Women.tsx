import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from "../../assets/womenclothing.webp";
import Image from 'next/image';
import Womenclothing from '../Womenclothing/Womenclothing';

const Women = () => {
  return (
    <div>
        <Navbar />
        <div className="main-banner" style={{marginTop : "90px"}}>
            <Image src={Banner} alt="banner" style={{width : "100%", height : "50vh"}} />
        </div>
        <Womenclothing />
    </div>
  )
}

export default Women