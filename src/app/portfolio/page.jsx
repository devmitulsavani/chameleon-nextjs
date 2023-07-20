"use client"
import React, { useState } from "react";
import Image from "next/image";
import { PriceEstimate } from "../components/priceEstimate/PriceEstimate";
import {YourPortfolioItems} from "./data";

export const metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Portfolio",
    description:
      "To Create Exceptional Digital Experiences, We Collaborate With Our Clients. Here Is A Sample Of The Projects Weve Created For Our Clients.",
  },
};


const Portfolio = () => {
  

  const [activeFilter, setActiveFilter] = useState("webdesign");
  const [visibleItems, setVisibleItems] = useState(6);
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setVisibleItems(6); // Reset the visible items when a new filter is clicked
  };
  
  const handleLoadMoreClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const portfolioItemsToShow = YourPortfolioItems.filter(
    (item) => item.category === activeFilter
  ).slice(0, visibleItems);

  const showLoadMoreButton =
    visibleItems < YourPortfolioItems.filter(
      (item) => item.category === activeFilter
    ).length;


  return (
    <>
      {/* text section */}
      <section className="container mt-8 mb-20 md:mb-28 lg:mb-32">
        <h6 className="text-secondary font-heading font-bold text-lg mb-3">
          Portfolio
        </h6>
        <h2 className="text-[38px] leading-[47px] lg:text-[48px] font-bold lg:leading-[57px]">
          Our <span className="text-secondary">Last Work</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize max-w-[840px] mt-4 md:mt-7">
          To create exceptional digital experiences, we collaborate with our
          clients. Here is a sample of the projects we&lsquo;ve created for our
          clients.
        </p>
        <div className="text-center mt-24 overflow-scroll whitespace-nowrap -mr-4 portfolioOverflow">
          <ul
            id="filters"
            className="clearfix inline-flex justify-center items-center border border-black rounded-[10px] overflow-hidden"
          >
            <li>
              <span
                className={`filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold ${
                  activeFilter === "webdesign" ? "active" : ""
                }`}
                data-filter="webdesign"
                onClick={() => handleFilterClick("webdesign")}
              >
                Web Design
              </span>
            </li>
            <li>
              <span
                className={`filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold ${
                  activeFilter === "graphics" ? "active" : ""
                }`}
                data-filter="graphics"
                onClick={() => handleFilterClick("graphics")}
              >
                GRAPHICS
              </span>
            </li>
            <li>
              <span
                className={`filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold ${
                  activeFilter === "logodesign" ? "active" : ""
                }`}
                data-filter="logodesign"
                onClick={() => handleFilterClick("logodesign")}
              >
                LOGO DESIGN
              </span>
            </li>
          </ul>
        </div>

        <div id="portfoliolist" className="mt-6 sm:mt-10 md:mt-16">
          <div
            className={`portfolio ${activeFilter}`}
            data-filter={activeFilter}
          >
            <div className="flex flex-wrap -mx-4">
              {portfolioItemsToShow.map(
                (item, index) =>
                  // Check the category and visibility before rendering each item
                  item.category === activeFilter &&
                  index < visibleItems && (
                    <div
                      key={index}
                      className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items"
                    >
                      {/* Render the item's content here */}
                      <Image
                        width={600}
                        height={600}
                        src={item.imageUrl}
                        alt={`Protfolio Image`}
                        className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] relative block"
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        {showLoadMoreButton && (
        <div className="text-center w-full clear-both">
          <button onClick={handleLoadMoreClick} id="loadMore" className="text-white uppercase bg-secondary text-base md:text-lg font-medium mt-10 px-7 py-4 inline-block rounded-[10px] hover:bg-transparent hover:text-secondary duration-300 border border-secondary">
            load more
          </button>
        </div>
      )}
      </section>
      {/* work with us section */}
      <PriceEstimate />
    </>
  );
};

export default Portfolio;
