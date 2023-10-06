"use client";
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Image from "next/image";
import Loader from '@/common/Loader/Loader';
import Button from '@/common/Button/Button';
import "./productdetail.css";
import GreenRating from "../../../assets/greenrating.png";
import YellowRating from "../../../assets/yellowrating.png";
import { IProducts } from '@/interfaces';

const page = ({params} : {params : {productid : number}}) => {
    console.log(params);

    const [data, setData] = React.useState<IProducts>();

    const getData = () => {
        fetch(`https://fakestoreapi.com/products/${params.productid}`).then((response) => response.json()).then((result) => {
            console.log(result);
            setData(result);
        });
    };

    React.useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Navbar />
        {data ? 
        <div className="product-container">
            <div className="product-container-image">
                <Image src={data.image} alt="productimage" width={500} height={500} unoptimized />
            </div>
            <div className="product-container-data">
                <h2>{data.title}</h2>
                <p>{data.category}</p>
                <div className="product-rating-container">
                    <span>{data.rating.rate}</span>
                    <Image src={GreenRating} alt="rating" width={20} height={20} />
                    <span style={{borderLeft : "2px solid #d4d5d9"}}>&nbsp; &nbsp;{data.rating.count} Ratings</span>
                </div>
                <b style={{fontWeight : 700, color: "#282c3f"}}>₹{data.price}</b>
                <span style={{color : "#03a685", fontWeight : 700, fontSize : "14px", marginLeft : "2px"}}>inclusive all taxes</span>
                <div className="product-action-btn">
            <Button>Add to bag</Button>
            <Button>Wishlist</Button>
          </div>
            </div>
        </div> : <Loader /> }
    </div>
  )
}

export default page