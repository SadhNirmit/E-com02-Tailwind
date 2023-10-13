import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn w-[160px] bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shoping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Items in your cart : 3</p>
            <p className="ml-5">Whislist Item : 0</p>
          </div>
          <button className="btn">Check out</button>
        </div>

        {/* central div  */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            {/* list of products div  */}
            <div className="flex w-[100%] h-auto items-center  ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>1234666
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing sky shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$69.99</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/* 2nd product div  */}
            <div className="flex w-[100%] h-auto items-center  ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>1234666
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Creamy Hooody Orignal
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="bg-red-200 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$79.99</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className=" p-5 flex-[0.4] w-auto h-[44vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping Charges</p>
              <p>-$20</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-2xl font-bold">
              <p>Total </p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
