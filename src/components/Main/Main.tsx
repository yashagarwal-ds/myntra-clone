import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from "../../assets/banner.webp";
import Sale from "../../assets/sale.webp";
import Image from 'next/image';
import Deals from '../Deals/Deals';
import Category from '../Category/Category';

const Main = () => {
  return (
    <div>
        <Navbar />
        <div className="main-banner" style={{marginTop : "90px"}}>
          <Image src={Banner} alt="banner" style={{width : "100%", height : "40vh"}} />
        </div>
        <div className="sale-banner" style={{marginTop : "20px"}}>
          <Image src={Sale} alt="sale" style={{width : "100%", height : "60vh"}} />
        </div>
        <Deals heading="Now or never deals" />
        <Deals heading="Festive crazy offers" />
        <Category />
    </div>
  )
}

export default Main