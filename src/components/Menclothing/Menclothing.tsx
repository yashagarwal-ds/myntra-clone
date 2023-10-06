"use client";
import React from "react";
import "./Menclothing.css";
import Causal from "../../assets/casual.webp";
import Image from 'next/image';
import Loader from "@/common/Loader/Loader";
import Button from "../../common/Button/Button";
import { useRouter } from 'next/navigation';
import { IProducts } from "@/interfaces";

const Menclothing = () => {

    const router = useRouter();

    const [data, setData] = React.useState<IProducts[]>([]);

    const getData = () => {
        fetch("https://fakestoreapi.com/products").then((response) => response.json()).then((result) => {
            console.log(result);
            setData(result);
        });
    };

    const handleClick = (id : number) => {
        router.push(`/product/${id}`);
    };

    React.useEffect(() => {
        getData();
    }, []);

  return (
    <div className="card-container">
        {data.length > 0 ? data.filter((value : IProducts) => value.category === "men's clothing").map((value : IProducts, index : number) => {
            return <div className="card" key={index}>
            <Image src={value.image} width={100} height={250} onClick={() => handleClick(value.id)} objectFit="contain" alt="clothing" style={{width : "100%", height : "250px"}} unoptimized />
          <div className="container">
            <h4>
              <b>{value.title}</b>
            </h4>
            <p>{value.category}</p>
          </div>
          <div className="card-btn">
            <Button>Add to bag</Button>
            <Button>Wishlist</Button>
          </div>
        </div>
        }) : <Loader />}
    </div>
  );
};

export default Menclothing;
