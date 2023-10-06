"use client";
import React from 'react';
import Men from '@/components/Men/Men';
import Women from '@/components/Women/Women';
import Comingsoon from '@/common/Comingsoon/Comingsoon';

const page = ({params} : {params : {shopid : string}}) => {
    console.log(params);
  return (
    <div>{params.shopid === "men" ? <Men /> : params.shopid === "women" ? <Women /> : <Comingsoon />}</div>
  )
}

export default page