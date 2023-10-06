"use client";
import React from 'react';
import Ethnic from "../../assets/ethnic.webp";
import Casual from "../../assets/casual.webp";
import Activewear from "../../assets/activewear.webp";
import Activewearmen from "../../assets/activewearmen.jpg";
import Westernwear from "../../assets/westernwear.webp";
import Sportwear from "../../assets/sportswear.jpg";
import Image from "next/image";
import "./Category.css";

const Category = () => {

    const categoryGallery = [Ethnic, Casual, Activewear, Activewearmen, Westernwear, Sportwear, Ethnic, Casual, Activewear, Activewearmen, Westernwear, Sportwear];

  return (
    <div className="category-container">
        <span>Shop by category</span>
        <div className="category-container-gallery">
            {categoryGallery.map((value : any, index : number) => {
                return <Image key={index} src={value} width={200} height={300} alt="category" />
            })}
        </div>
    </div>
  )
}

export default Category