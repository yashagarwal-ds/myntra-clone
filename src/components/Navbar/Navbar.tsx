"use client";
import React from 'react';
import "./Navbar.css";
import Image, { StaticImageData } from 'next/image'
import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.png";
import Wishlist from "../../assets/wishlist.png";
import Bag from "../../assets/bag.png";
import { useRouter } from 'next/navigation';

interface navbarAction {
    image : StaticImageData;
    menu : string;
};

interface navMenu {
    menu : string;
    url : string;
};

const Navbar = () => {

    // const navMenu = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"];

    const navMenu : navMenu[] = [
        {
            menu : "MEN",
            url : "men"
        },
        {
            menu : "WOMEN",
            url : "women"
        },
        {
            menu : "KIDS",
            url : "kids"
        },
        {
            menu : "HOME & LIVING",
            url : "home-living"
        },
        {
            menu : "BEAUTY",
            url : "beauty"
        },
        {
            menu : "STUDIO",
            url : "studio"
        }
    ]

    const navbarAction : navbarAction[] = [
    {
        image : Profile,
        menu : "Profile"
    },
    {
        image : Wishlist,
        menu : "Wishlist"
    },
    {
        image : Bag,
        menu : "Bag"
    }
]

    const router = useRouter();

    const handleClick = (id : string) => {
        console.log(id);
        router.push(`/shop/${id}`);
    };

  return (
    <div className="navbar-container">
        <div className="navbar-logo" onClick={() => router.push("/")}>
            <Image src={Logo} width={50} height={50} alt="logo" />
        </div>
        <div className="navbar-menus">
            {navMenu.map((value : navMenu, index : number) => {
                return <span key={index} onClick={() => handleClick(value.url)}>{value.menu}</span>
            })}
        </div>
        <div className="navbar-search">
            <input type="text" placeholder="Search for products, brands and more" />
        </div>
        <div className="navbar-actions">
            {navbarAction.map((value : navbarAction, index : number) => {
                return <div className='navbar-action-data' key={index}>
                <Image src={value.image} width={20} height={20}  alt="profile" />
                <span>{value.menu}</span>
            </div>
            })}
        </div>
    </div>
  )
}

export default Navbar