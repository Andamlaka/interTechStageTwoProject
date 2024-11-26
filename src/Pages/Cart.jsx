import React from 'react';
import { useState } from 'react';

const Cart = () => {
  const [selected, setSelected] = useState(null);

  const breadcrumbItems = ["Home", "Kids", "Shoes", "Sneakers"];
  return (
    <div className="relative w-[326px] h-[24px] top-[5px] left-[82px] gap-[12px]
    flex items-center text-gray-500 text-sm">
    {breadcrumbItems.map((item, index) => (
      <div key={index} className="flex items-center">
        <span
          className={`cursor-pointer ${
            selected === index
              ? "font-bold text-black"
              : "font-normal text-gray-500"
          }`}
          onClick={() => setSelected(index)}
        >
          {item}
        </span>
        {index < breadcrumbItems.length - 1 && (
          <span className="mx-2 text-gray-400">{">"}</span>
        )}
      </div>
    ))}
  </div>
  )
}

export default Cart;