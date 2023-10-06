"use client";
import React from 'react';
import Skybags from "../../assets/skybags.webp";
import Blackberrys from "../../assets/blackberrys.webp";
import Metronaut from "../../assets/metronaut.webp";
import Tommyhilfiger from "../../assets/tommyhilfiger.webp";
import Varanga from "../../assets/varanga.webp";
import Rebook from "../../assets/reebok.webp";
import Image from 'next/image';
import "./Deals.css";

interface IProps {
    heading : string;
};

const Deals:React.FC<IProps> = ({heading}) => {

    const dealsGallery = [Skybags, Blackberrys, Metronaut, Tommyhilfiger, Varanga, Rebook];

  return (
    <div className="deals-container">
        <span>{heading}</span>
        <div className="deals-container-gallery">
            {dealsGallery.map((value : any, index : number) => {
                return <Image key={index} src={value} width={200} height={300} alt="deals" />
            })}
        </div>
    </div>
  )
}

export default Deals