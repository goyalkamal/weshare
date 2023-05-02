import React from "react";
import Heading from "../components/Heading";
import Catalog from "../components/Catalog";
import Card from "../components/Services";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import { data, sellerCatalog, buyerCatalog } from "../utils";
import Footer from "../components/Footer";
import Services from "../components/Services";
const Home = () => {
  return (
    <section>
      <div className="main-container overflow-hidden relative">
        <div className="w-[100%]">
          <img
            className="w-[100%] "
            src="/img/farak-padta-hai-background.webp"
            alt="Image"
          />
        </div>
        <div className="absolute w-[100%] z-50 top-0">
          <h3 className="text-[3.5rem]  text-center">Farak Padhta hai</h3>
        </div>
        <div className="absolute bottom-[-15px]  w-[100%]">
          <div className="relative flex justify-center">
            <img src="/img/farak-padta-hai-children.png" alt="" />
            <div className="absolute w-[100%] bottom-[15%]">
              <div className="flex flex-col items-center text-black pb-[2rem] ">
                <h2 className="text-[5rem] font-bold text-[#318216] ">
                  200000+
                </h2>
                <span className="text-[1.5rem] ">
                  waste diverted through land fill
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto pt-10">
        <div className="justify-center gap-4 flex flex-wrap mt-4 mx-2">
          <div className="grow-0 shrink-0 basis-auto">
            <div className="bg-[#005099] px-7 py-5 rounded-lg">
              <div className="flex items-center">
                <img
                  src="/img/impact-water.png"
                  className="align-middle"
                  alt=""
                />
                <div className="px-6 text-start">
                  <h6>13.8crore</h6>
                  <p>LITRES OF WATER</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto">
            <div className="bg-[#ac0303] px-7 py-5 rounded-lg">
              <div className="flex items-center">
                <img
                  src="/img/impact-electricity.png"
                  className="align-middle"
                  alt=""
                />
                <div className="px-6 text-start">
                  <h6>13.8crore</h6>
                  <p>LITRES OF WATER</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto">
            <div className="bg-[#917304] px-7 py-5 rounded-lg">
              <div className="flex items-center">
                <img
                  src="/img/impact-fuel.png"
                  className="align-middle"
                  alt=""
                />
                <div className="px-6 text-start">
                  <h6>13.8crore</h6>
                  <p>LITRES OF WATER</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto">
            <div className="bg-[#318216] px-7 py-5 rounded-lg">
              <div className="flex items-center">
                <img
                  src="/img/impact-trees.png"
                  className="align-middle"
                  alt=""
                />
                <div className="px-6 text-start">
                  <h6>13.8crore</h6>
                  <p>LITRES OF WATER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Heading title="OUR SERVICES" />
        <Services data={data} />
      </div>
      {/* Seller Catalog  */}
      <div className="seller-catalog mt-4">
        <Heading title="SELLER CATALOG" />
        <Catalog data={sellerCatalog} />
      </div>
      {/* Buyer Catalog */}
      <div className="buyer-catalog mt-4">
        <Heading title="BUYER CATALOG" />
        <Catalog data={buyerCatalog} />
      </div>
      <Blog />
      {/* Footer */}
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
