import React from "react";
import {useState, useEffect} from "react";
import shoes from "../assets/home/shoes1.jpg";
import gentlman from "../assets/home/gentlman.jpg";
import tshirt from "../assets/home/tishrt.jpg";
import frenchKissBag from "../assets/home/frenchKissBag.png";
import like from "../assets/home/like.jpg";
import shoess from "../assets/home/shoess.png";
import dress from "../assets/home/dress.png";
import star from "../assets/home/star.jpg";
import heal from "../assets/home/heals.png";
import bags from "../assets/home/bags.png";
import jackets from "../assets/home/jacket.png";
import lingerie from "../assets/home/lingerie.png";
import belts from "../assets/home/belts.png";
import streetWear from "../assets/home/streetWear.png";
import sunglass from "../assets/home/sunglass.png";
import sunWear from "../assets/home/sunWear.png";
import hats from "../assets/home/hats.png";
import slippers from "../assets/home/slippers.png";
import wigs from "../assets/home/wigs.png";
import cosmotics from "../assets/home/cosmotics.png";
import image from "../assets/home/flowe+hat.png";
import causual from "../assets/home/causual_wear.png";
import beauty_product from "../assets/home/beauty_products.png";
import vintage from "../assets/home/vintage.png";
import gymWear from "../assets/home/gym_wear.png";


const Home = ( ) => {
 const  data = {
  title1: "Gebeya",
  image1: shoes,
  image2: gentlman,
  text: "Discover a world of convenience with our user-friendly platform, curated collections, and exceptional customer service",
  title2: "SHOP",
  title3:"TIMBU",
  image3: tshirt,
}
const cardData = [
  { id: 1, like: like, image: frenchKissBag, who: "Women", star: star, rate: "1K+ rating", kind: "French Kiss Bag", brand: "ALDO", price: "$500", action: "Add to Cart", place: "In Stock" },
  { id: 2, like: like, image: shoess, who: "Kids", star: star, rate: "1K+ rating", kind: "Burberry Shine", brand: "FENDI", price: "$150", action: "Add to Cart", place: "In Stock" },
  { id: 3, like: like, image: dress, who: "Women", star: star, rate: "5K+ rating", kind: "Alvero Gown", brand: "DIVINE", price: "$300", action: "Add to Cart", place: "In Stock" },
  { id: 1, like: like, image: frenchKissBag, who: "Women", star: star, rate: "1K+ rating", kind: "French Kiss Bag", brand: "ALDO", price: "$500", action: "Add to Cart", place: "In Stock" },
  { id: 2, like: like, image: shoess, who: "Kids", star: star, rate: "1K+ rating", kind: "Burberry Shine", brand: "FENDI", price: "$150", action: "Add to Cart", place: "In Stock" },
  { id: 3, like: like, image: dress, who: "Women", star: star, rate: "5K+ rating", kind: "Alvero Gown", brand: "DIVINE", price: "$300", action: "Add to Cart", place: "In Stock" },
];




const categoryData = {
  men: [
    { image: "https://via.placeholder.com/150", name: "Shirts", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Trousers", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Watches", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Shoes", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Belts", action: "See All Collections" },
  ],
  women: [
        { image: heal, name: "Shoes", action: "See All Collections" },
        { image: bags, name: "Bags", action: "See All Collections" },
        { image: jackets, name: "Jackets", action: "See All Collections" },
        { image: lingerie, name: "Lingerie", action: "See All Collections" },
        { image: belts, name: "Belts", action: "See All Collections" },
        { image: streetWear, name: "Street Wear", action: "See All Collections" },
        { image: sunglass, name: "Sun Glasses", action: "See All Collections" },
        { image: sunWear, name: "Sun Wear", action: "See All Collections" },
        { image: hats, name: "Hat", action: "See All Collections" },
        { image: slippers, name: "Slippers", action: "See All Collections" },
        { image: wigs, name: "Wigs", action: "See All Collections" },
        { image: cosmotics, name: "Cosmotics", action: "See All Collections" },
  ],
  kids: [
    { image: "https://via.placeholder.com/150", name: "Shirts", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Toys", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Backpacks", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Shoes", action: "See All Collections" },
  ],
  perfumes: [
    { image: "https://via.placeholder.com/150", name: "Floral", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Woody", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Citrus", action: "See All Collections" },
  ],
  sport: [
    { image: "https://via.placeholder.com/150", name: "Jerseys", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Football", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Shoes", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Bats", action: "See All Collections" },
  ],
  jewelry: [
    { image: "https://via.placeholder.com/150", name: "Necklaces", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Bracelets", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Rings", action: "See All Collections" },
    { image: "https://via.placeholder.com/150", name: "Earrings", action: "See All Collections" },
  ],
};

  const [selectedCategory, setSelectedCategory] = useState(Object.keys(categoryData)[0]);

const handleButtonClick = (category) => {
  setSelectedCategory(category);
};
const [currentCardIndex, setCurrentCardIndex] = useState(0);

const handleDotClick = (index) => {
  setCurrentCardIndex(index);
};
const categoryItems = [
  { id: 1, image: causual, name: "Causual Wear", description: "Over 20 categories in stock" },
  { id: 2, image: vintage, name: "Vintage", description: "Over 31 categories in stock" },
  { id: 3, image: beauty_product, name: "Beauty Products", description: "Over 24 categories in stock" },
  { id: 4, image: gymWear, name: "Gym Wear", description: "Over 52 categories in stock" },
];
const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto">
    <div className=" sm:hidden w-full h-[769px] bg-[#882BEC] top-[70.5px]
      ">
      {/* Main Grid */}
      <div className="grid grid-cols-3   gap-10  items-center text-white">
        
        {/* First Column */}
        <div className="relative sm:hidden flex flex-col left-6 top-20 w-fit h-full justify-center  
        gap-10 items-center">
          
          {/* Title */}
          <h1
            className=" relative w-[400px] h-[175px] 
              font-alfa-slab text-[110px] font-normal text-left 
              leading-[175.23px]"
          >
            {data.title1 || "Default Title"}
          </h1>
          
          {/* Image */}
          <img
            src={data.image1 || ""}
            alt={data.title1 || "Default Alt"}
            className=" sm:hidden relative w-[260px] h-[260px] top-[48px] left-[40px] rounded-full"
          />
        </div>
       
        
        {/* Second Column */}
        <div className="relative   flex flex-col left-[50px]  w-fit h-full top-28 gap-14 ">
                    {/* Image */}
                    <img
            src={data.image2 || ""}
            alt={data.title1 || "Default Alt"}
            className="relative w-[300px] h-[300px] rounded-full"
          />
           <button
                          
             type='button'
             className='relative py-3 px-3 w-[366px] h-[66px] font-poppins font-semibold text-[#222222] top-20 rounded-xl bg-[#FEA301]'>
             Explore Now
            </button>
        </div>
       
        {/* third column */}
        <div className="relative flex flex-col w-fit h-full top-28  ">
          <h1 className=" relative font-poppins font-normal text-left
           text-[20px]  leading-[32px] text-[#FFFFFF]">
            {data.text}
          </h1>
          <h1
          className="relative w-[400px] h-[175px] 
              font-alfa-slab text-[100px] font-normal text-left 
              leading-[175.23px]"
          >
            {data.title2}
          </h1>
          <img
            src={data.image3 }
            alt={data.title1}
            className="relative w-[223px] h-[223px] top-7 left-[40px] rounded-full"
          />

        </div>
      </div>
      
    </div>
    <div>
      {/* mobile home */}
      <div className=" hidden relative  sm:block w-full h-[400px] bg-[#882BEC] top-[70.5px]
     ">
      <div className="grid grid-cols-3  gap-10  items-center text-white">
         {/* mobile first column */}
         <div className=" relative  left-[20px] justify-center items-center top-[10px]">
        <h1
            className="relative 
             w-[125px] h-[44px] 
              font-alfa-slab text-[32px] font-normal text-left 
              leading-[40px]"
          >
            {data.title3 || "Default Title"}
          </h1>
          
        </div>
         {/* mobile second colunm */}
         <div className=" relative w-[150px] left-[20px] justify-center items-center top-[40px]">
          {/* Image */}
          <img
            src={data.image2 || ""}
            alt={data.title1 || "Default Alt"}
            className="relative w-[120px] h-[120px] rounded-full"
          />
        </div>
         {/* mobile third column */}
         <div className=" relative left-[5px] ">
         <h1
          className="relative w-[98px] h-[44px] top-[100px] 
              font-alfa-slab text-[32px] font-normal text-left 
              leading-[43.81px]"
          >
            {data.title2}
          </h1>

         </div>
      </div>
    </div>
    {/* text part */}
    <div className="relative hidden sm:block w-[330px] mt-[-80px] h-[54px]  left-[20px]">
    <h1 className=" relative font-poppins font-normal 
    text-center justify-center items-center
           text-[12px]  leading-[18px] text-[#FFFFFF]">
            {data.text}
          </h1>
    </div>
    {/* the button */}
    <button
         type='button'
         className='hidden sm:block relative px-[10px] py-[10px] w-[360px] h-[44px] 
         font-poppins font-semibold text-[#222222] 
         gap-[10px] left-[5px] rounded-xl bg-[#FEA301]'>
         Explore Now
        </button>
    </div>
    <div className=" flex relative  justify-between mr-[35px] mb-[30px]
    items-center  h-[60px] top-[50px] left-[30px] right-[60px]"> 
      <h1 className="text-[40px] font-semibold leading-[50px] text-[#1E1E1E]">
        Latest Collections
      </h1>
        <div className="sm:hidden relative flex gap-4 w-[100px] h-[100px]  justify-cneter items-center
           ">
<button className="bg-[#FEA301] rounded-tl-[100px] rounded-bl-[100px] ">
<svg width="40" height="40" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13L1.70711 7.70711C1.37377 7.37377 1.20711 7.20711 1.20711 7C1.20711 6.79289 1.37377 6.62623 1.70711 6.29289L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

</svg>
</button>
<button className="bg-[#FEA301] rounded-tr-[100px] rounded-br-[100px] ">
<svg width="40" height="40" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        </div>
    </div>
    {/* card items */}
    <div className="sm:hidden">
    <div className=" relative flex justify-between mr-[35px] left-[30px] mt-[10px] 
    items-center h-[500px] gap-2 mb-[20px] ">
      {cardData.map((id) => (
        <div key={id}
        className="relative w-[400px] h-[450px] border  justify-center 
        rounded-[10px] items-center border-[#C1C1C1]">
          <div className=" relative w-[400px] h-[250px] top-[10px] ml-[9px] mr-[9px] gap-[16px]
           ">
            <div className="flex relative w-[380px] h-[240px] rounded-[15px] bg-[#F2F2F2]">
              <button className="relative w-[40px] h-[40px] top-[2px] 
              items-center left-[10px]">
            <img src={id.like} alt="like emoji" 
            className=" relative w-[24px] h-[24px] rounded-full justify-center items-center  "/>
            </button>
            <img src={id.image} alt="" 
            className="relative w-[200px] h-[240px] mt-0 left-[35px] "/>
            <div className="relative w-[67px] h-[30px] top-[7px] right-[10px] left-[40px]
             rounded-[100px] px-[10px] py-[6px] bg-[#FFFFFF]">
              <h1 className=" relative w-[47px] h-[18px] font-poppins 
              font-normal text-[12px] leading-[18px] text-[#1E1E1E]">{id.place}</h1>
            </div>
        </div>
        {/* user and rating */}
        <div className=" flex relative w-[380px] h-[26px] mt-2 justify-between">
          <div className="w-fit h-[26px] rounded-[100px] top-[6px] border px-[10px] py-[3px] mt-0.5 bg-[#FFFFFF]">
          <h1 className=" h-[18px] font-poppins font-normal text-[14px] leading-[18px] text-[#808080]">{id.who}</h1>
          </div>
          <div className="relative flex w-[107px] h-[24px] gap-[2px]">
            <img src={id.star}
            className="w-[24px] h-[24px] text-[#FFD700]"alt="" />
            <h1 className="w-[81px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#1E1E1EB2]">{id.rate}</h1>
          </div>
        </div>
        <div className="flex relative">
        <div className="flex flex-col realtive w-[192px] h-[139px] top-[20px] left-[96px] gap-[40px]">
          <div className="relative flex flex-col w-[192px] h-[63px]">
            <h1 className="w-[192px] h-[36px] font-poppins font-semibold text-[24px] leading-[36px] text-[#1E1E1E]">
            {id.kind}
            </h1>
            <h1 className="w-[192px] h-[27px] font-poppins font-[500px] text-[18px] leading-[27px] text-[#808080]">
            {id.brand}
            </h1>
          </div>
            <h1 className="w-[192px] h-[36px] font-poppins font-[600px] text-[24px] text-[#1E1E1E]">
            {id.price}
            </h1>
            </div>
        <button className=" relative w-[150px] h-[50px] top-[10px] mt-20 left-[40px] rounded-[16px]
        bg-[#FEA301] px-[10px] py-[10px]  ">
          <h1 className=" realtive w-[130px] h-[30px] font-poppins font-[500px] leading-[30px]
           text-[20px] text-[#FFFFFF]">
            {id.action}
           </h1>
        </button>
        
        </div>
        </div>
        </div>
      ))}
      </div>
    </div>
    {/* mobile view card */}
    <div className="hidden sm:block relative  items-center">
      {/* Single Card View */}
      <div
        className="relative flex justify-center items-center w-full h-[500px] mb-[20px] transition-transform duration-300"
        key={cardData[currentCardIndex].id}
      >
        <div
          className="relative w-[400px] h-[450px] border justify-center 
          rounded-[10px] items-center border-[#C1C1C1]"
        >
          <div className="relative w-[400px] h-[250px] top-[10px] ml-[9px] mr-[9px] gap-[16px]">
            <div className="flex relative w-[380px] h-[240px] rounded-[15px] bg-[#F2F2F2]">
              <button className="relative w-[40px] h-[40px] top-[2px] items-center left-[10px]">
                <img
                  src={cardData[currentCardIndex].like}
                  alt="like emoji"
                  className="relative w-[24px] h-[24px] rounded-full justify-center items-center"
                />
              </button>
              <img
                src={cardData[currentCardIndex].image}
                alt=""
                className="relative w-[200px] h-[240px] mt-0 left-[35px]"
              />
              <div
                className="relative w-[67px] h-[30px] top-[7px] right-[10px] left-[40px]
                rounded-[100px] px-[10px] py-[6px] bg-[#FFFFFF]"
              >
                <h1
                  className="relative w-[47px] h-[18px] font-poppins 
                  font-normal text-[12px] leading-[18px] text-[#1E1E1E]"
                >
                  {cardData[currentCardIndex].place}
                </h1>
              </div>
            </div>

            {/* User and Rating */}
            <div className="flex relative w-[380px] h-[26px] mt-2 justify-between">
              <div className="w-fit h-[26px] rounded-[100px] top-[6px] border px-[10px] py-[3px] mt-0.5 bg-[#FFFFFF]">
                <h1
                  className="h-[18px] font-poppins font-normal text-[14px] leading-[18px] text-[#808080]"
                >
                  {cardData[currentCardIndex].who}
                </h1>
              </div>
              <div className="relative flex w-[107px] h-[24px] gap-[2px]">
                <img
                  src={cardData[currentCardIndex].star}
                  className="w-[24px] h-[24px] text-[#FFD700]"
                  alt=""
                />
                <h1
                  className="relative w-[81px] h-[24px] font-poppins font-normal text-[14px] leading-[24px] text-[#1E1E1EB2]"
                >
                  {cardData[currentCardIndex].rate}
                </h1>
              </div>
            </div>

            {/* Content and Action */}
            <div className="flex relative">
              <div className="flex flex-col relative w-[192px] h-[139px] top-[20px] left-[6px] gap-[40px]">
                <div className="relative flex flex-col w-[192px] h-[63px]">
                  <h1
                    className="w-[192px] h-[36px] font-poppins font-semibold text-[24px] leading-[36px] text-[#1E1E1E]"
                  >
                    {cardData[currentCardIndex].kind}
                  </h1>
                  <h1
                    className="w-[192px] h-[27px] font-poppins font-medium text-[18px] leading-[27px] text-[#808080]"
                  >
                    {cardData[currentCardIndex].brand}
                  </h1>
                </div>
                <h1
                  className="w-[192px] h-[36px] font-poppins font-semibold text-[24px] text-[#1E1E1E]"
                >
                  {cardData[currentCardIndex].price}
                </h1>
              </div>
              <button
                className="relative w-[150px] h-[50px] top-[10px] mt-[100px] left-[40px] rounded-[16px]
                bg-[#FEA301] px-[10px] py-[10px]"
              >
                <h1
                  className="relative w-[130px] h-[30px] font-poppins font-medium leading-[30px]
                  text-[20px] text-[#FFFFFF]"
                >
                  {cardData[currentCardIndex].action}
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mb-8">
        {cardData.map((_, index) => (
          <button
            key={index}
            className={`w-[20px] h-[6px] rounded-[16px] ${
              index === currentCardIndex ? "bg-[#222222]" : "bg-[#DCDCDC]"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    {/* catagory card*/}
    
    <div className=" relative flex flex-col justify-center  items-center mb-5">
      {/* Category Buttons */}
      <div className="relative flex w-[1344px] left-[10px]  justify-center gap-[24px] items-center ">
      {Object.keys(categoryData).map((category, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(category)}
            className={`py-2 px-4 font-semibold rounded-[100px]  border-[2px] border-[#C1C1C1]
              ${
                selectedCategory === category
                  ? "bg-[#FEA301] text-black"
                  : "bg-white text-black "
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Render Selected Category Items */}
{selectedCategory && (
  <div
    className="relative mt-6 w-[1200px] h-[232px]
    sm:w-[380px] top-[10px] left-[10px] mr-[10px] sm:gap-[0px]
    justify-center items-center gap-[24px] mb-[20px]"
  >
    {/* First Half */}
    <div className="grid grid-cols-6 sm:grid-cols-2 mx-0 gap-[10px] mb-6">
      {categoryData[selectedCategory].slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col w-[190px] h-[200px] items-center
          border-[2px] border-[#C1C1C1] px-[31px] py-[24px] gap-[10px] sm:gap-[2px]
          rounded-[16px]"
        >
          <div className="w-[150px] h-[184px] gap-[16px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-[143px] h-[100px] rounded-[16px] bg-[#F2F2F2]"
            />
            <div
              className="flex flex-col relative w-[150px] h-[68px] justify-center top-2 items-center gap-[2px]"
            >
              <h3
                className="flex text-[16px] justify-center items-center font-[600] font-poppins
                leading-[36px] text-gray-800"
              >
                {item.name}
              </h3>
              <a href="#">
                <h1
                  className="w-[150px] h-[24px] font-poppins font-[400] text-[16px] leading-[24px]
                  text-[#808080]"
                >
                  {item.action}
                </h1>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Second Half */}
    <div className="sm:hidden grid grid-cols-6 sm:grid-cols-2 mx-0 gap-[10px]">
      {categoryData[selectedCategory].slice(6).map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col w-[190px] h-[200px] items-center
          border-[2px] border-[#C1C1C1] px-[31px] py-[24px] gap-[10px] sm:gap-[2px]
          rounded-[16px]"
        >
          <div className="w-[150px] h-[184px] gap-[16px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-[143px] h-[100px] rounded-[16px] bg-[#F2F2F2]"
            />
            <div
              className="flex flex-col relative w-[150px] h-[68px] justify-center top-2 items-center gap-[2px]"
            >
              <h3
                className="flex text-[16px] justify-center items-center font-[600] font-poppins
                leading-[36px] text-gray-800"
              >
                {item.name}
              </h3>
              <a href="#">
                <h1
                  className="w-[150px] h-[24px] font-poppins font-[400] text-[16px] leading-[24px]
                  text-[#808080]"
                >
                  {item.action}
                </h1>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{/* See More Button */}
<div className=" flex justify-center mt-[230px] sm:mt-[400px] items-center">
   <button
    className="h-[45px] flex justify-center items-center
    rounded-[8px] font-poppins bg-[#882BECF2] 
    font-[500] text-[16px] text-[#FFFFFF] px-4 py-2"
    onClick={() => console.log("See More clicked")}
  >
    See More &gt;&gt;&gt;
   </button>
  </div>
  </div>
   {/* banner*/}
  <div
      className="relative flex items-center justify-between sm:h-[270px]
       bg-[#D0D0D0] rounded-[24px] overflow-hidden 
        mx-auto mb-[20px] sm:w-[400px] w-[1200px] h-[502px] sm:mb-[10px]"
    >
     
      <div className="absolute sm:left-[16px] sm:top-[10px] top-10 left-10">
        {/* Main Heading */}
        <h1 className="relative w-[511px] sm:w-[299px] sm:h-[54px] h-[60px] text-[40px] 
        sm:text-[24px] font-poppins text-[#9847EF] font-semibold sm:font-[600]
        
        leading-[40px] sm:leading-[27px] text-left">
          Our Curated Summer Collection
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 w-[623px] sm:w-[351px] sm:h-[84px] text-[24px] sm:text-[14px] text-[#9847EF] font-poppins
         font-normal leading-[40px] sm:leading-[21px] tracking-[0.04em] text-left">
          Explore our curated summer collection featuring trending styles,
          vibrant colors, and lightweight fabrics perfect for long days and
          nights.
        </p>

        {/* Explore Now Button */}
        <button
          className="relative flex mt-5 px-6 py-3 sm:w-[332px] sm:h-[44px] left-[10px] justify-center items-center text-white font-poppins rounded-[8px]
           font-medium text-[16px]  shadow bg-[#FEA301] transition"
        >
          Explore Now
        </button>
      </div>

      {/* Circles in the Middle */}
      <div className="absolute sm:hidden inset-0 flex justify-center items-center">
        <div className="absolute w-[22px] h-[22px] top-[352px] left-[430px] bg-[#882BEC7D] rounded-full"></div>
        <div className="absolute w-[22px] h-[22px] top-[38px] left-[599px] bg-[#FFD700] rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] top-[439px] left-[500px] bg-[#A35CF0] rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] top-[144px] left-[689px] bg-[#A35CF0] rounded-full"></div>
        <div className="absolute w-[58px] h-[58px] top-[331px] left-[680px] bg-[#FFD700] rounded-full"></div>
        <div className="absolute w-[22px] h-[22px] top-[457px] left-[605px] bg-[#882BEC7D] rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] top-[100px] left-[896px] bg-[#A35CF0] rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] top-[251px] left-[776px] bg-[#CAD3B8] rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] top-[40px] left-[796px] bg-[#CAD3B8] rounded-full"></div>
      </div>
      {/* circles on mobile view */}
      <div className="absolute hidden inset-0 sm:block justify-center items-center">
        <div className="absolute w-[9px] h-[9px] top-[155px] left-[151px] bg-[#882BEC7D] rounded-full"></div>
        <div className="absolute w-[18px] h-[18px] top-[165px] left-[186px] bg-[#A35CF0] rounded-full"></div>
        <div className="absolute w-[17px] h-[17px] top-[54px] left-[249px] bg-[#882BECF2] rounded-full"></div>
        <div className="absolute w-[25px] h-[25px] top-[156px] left-[257px] bg-[#A35CF0] rounded-full"></div>
        <div className="absolute w-[9px] h-[9px] top-[182px] left-[311px] bg-[#882BECC4] rounded-full"></div>
        <div className="absolute w-[18px] h-[18px] top-[53px] left-[349px] bg-[#882BECC4] rounded-full"></div>
        <div className="absolute w-[17px] h-[17px] top-[15px] left-[307px] bg-[#CAD3B8] rounded-full"></div>
      </div>
      {/* Right-Side Image */}
      <div className="absolute sm:hidden top-0 right-0 w-[1200px] h-full rounded-tr-[24px] overflow-hidden">
        <img
          src={image} // 
          alt="Summer Collection"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className=" flex relative  justify-between mr-[35px] mb-[30px]
    items-center  h-[60px] top-[30px] left-[30px] right-[60px]"> 
      <h1 className="text-[40px] sm:text-[24px] font-semibold leading-[50px] text-[#1E1E1E]">
      Browse by category
      </h1>
        <div className="sm:hidden relative flex gap-4 w-[100px] h-[100px]  justify-cneter items-center
           ">
<button className="bg-[#FEA301] rounded-tl-[100px] rounded-bl-[100px] ">
<svg width="40" height="40" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13L1.70711 7.70711C1.37377 7.37377 1.20711 7.20711 1.20711 7C1.20711 6.79289 1.37377 6.62623 1.70711 6.29289L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

</svg>
</button>
<button className="bg-[#FEA301] rounded-tr-[100px] rounded-br-[100px] ">
<svg width="40" height="40" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        </div>
    </div>
    {/* another card */}
    <div className="sm:hidden relative flex flex-row justify-center items-center top-[30px] left-[40px] gap-4">
      {categoryItems.map((id) => (
        <div key={id}
            className="relative flex flex-col w-[280px] h-[360px] items-center
          border-[2px]  gap-[10px] sm:gap-[2px]  
          rounded-[16px]">
            <div className="relative w-[280px]  flex flex-col h-[300px]  gap-[16px] bg-[#F2F2F2]">
            <img
              src={id.image}
              alt={id.name}
              className="relative w-[243px] h-[240px] rounded-[16px] justify-center 
              items-center top-[10px] left-[20px]"
            />
           </div>
            <div
              className="flex flex-col relative w-[250px] h-[68px] justify-center  items-center gap-[2px]"
            >
              <h3
                className="flex text-[18px] justify-center items-center font-[600] font-poppins
                leading-[36px] text-gray-800"
              >
                {id.name}
              </h3>
              <a href="#">
                <h1
                  className="w-[200px] h-[24px] font-poppins font-[400] text-[14px] leading-[24px]
                  text-[#808080]"
                >
                  {id.description}
                </h1>
              </a>
            
          </div>
        </div>
      ))}
    </div>
    {/* another card in mobile view */}
     <div className="hidden sm:block relative  flex-col items-center gap-4">
      {/* Card Display */}
      <div
        key={categoryItems[currentSlide]} // Ensure a unique key for re-renders
        className="relative flex flex-col w-[280px] h-[360px] items-center
        border-[2px] gap-[10px] left-[10px] rounded-[16px]"
      >
        <div className="relative w-[280px] flex flex-col h-[300px] gap-[16px] bg-[#F2F2F2]">
          <img
            src={categoryItems[currentSlide].image}
            alt={categoryItems[currentSlide].name}
            className="relative w-[243px] h-[240px] rounded-[16px] justify-center 
            items-center top-[10px] left-[20px]"
          />
        </div>
        <div className="flex flex-col relative w-[250px] h-[68px] justify-center items-center gap-[2px]">
          <h3
            className="flex text-[18px] justify-center items-center font-[600] font-poppins
            leading-[36px] text-gray-800"
          >
            {categoryItems[currentSlide].name}
          </h3>
          <a href="#">
            <h1
              className="w-[200px] h-[24px] font-poppins font-[400] text-[14px] leading-[24px]
              text-[#808080]"
            >
              {categoryItems[currentSlide].description}
            </h1>
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-1 mt-4">
        {categoryItems.map((_, index) => (
          <button
            key={index}
            className={`w-[30px] h-[10px] justfify-center items-center rounded-full ${
              index === currentSlide ? "bg-[#222222]" : "bg-[#DCDCDC]"
            }`}
            onClick={() => handleNextClick(index)}
          />
        ))}
      </div>
    </div>
</div>
  );
}; 

export default Home;
