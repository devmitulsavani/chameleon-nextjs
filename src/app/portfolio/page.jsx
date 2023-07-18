import React from 'react'
import Image from "next/image";
import { PriceEstimate } from "../components/priceEstimate/PriceEstimate";

export const metadata = {
  title: 'Portfolio',
  openGraph: {
    title: 'Portfolio',
    description: 'To Create Exceptional Digital Experiences, We Collaborate With Our Clients. Here Is A Sample Of The Projects Weve Created For Our Clients.',
  },
}

const Portfolio = () => {
  return (
    <>
    {/* text section */}
    <section className="container mt-8 mb-20 md:mb-28 lg:mb-32">
    <h6 className="text-secondary font-heading font-bold text-lg mb-3">Portfolio</h6>
    <h2 className="text-[38px] leading-[47px] lg:text-[48px] font-bold lg:leading-[57px]">Our <span
        className="text-secondary">Last Work</span></h2>
    <p className="text-base sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize max-w-[840px] mt-4 md:mt-7">To create exceptional digital experiences, we collaborate with our clients. Here is a sample of the projects we've created for our clients.</p>
    <div className="text-center mt-24 overflow-scroll whitespace-nowrap -mr-4 portfolioOverflow">
      <ul id="filters" className="clearfix inline-flex justify-center items-center border border-black rounded-[10px] overflow-hidden">
        <li><span className="filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold active" data-filter="webdesign">Web Design</span></li>
        <li><span className="filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold" data-filter="graphics">GRAPHICS</span></li>
        <li><span className="filter uppercase py-4 px-5 md:px-9 inline-block cursor-pointer text-sm md:text-lg font-bold" data-filter="logodesign">LOGO DESIGN</span></li>
      </ul>
    </div>
    <div id="portfoliolist" className="mt-6 sm:mt-10 md:mt-16">
      <div className="portfolio webdesign" data-filter="webdesign">
        <div className="flex flex-wrap -mx-4">
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/Rectangle 133.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/Rectangle 134.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/Rectangle 135.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/sharmi-thumb.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/blue-feather.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/chameleon-pro.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/idealure.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/srisri.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/fullfill.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/3 py-6 prot-items">
            <Image width={600} height={600} src="/Litter-star.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
          </div>
          <div className="text-center w-full">
            <a href="" id="loadMore" className="text-white uppercase bg-secondary text-base md:text-lg font-medium mt-10 px-7 py-4 inline-block rounded-[10px] hover:bg-transparent hover:text-secondary duration-300 border border-secondary">load more</a>
          </div>
        </div>
      </div>
      <div className="portfolio" data-filter="graphics">
        <div className="flex flex-wrap -mx-4 items-start">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/highfive.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/mugbeebox-final.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/hund-world.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/benars.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/product-image.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/Untitled-1.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio" data-filter="logodesign">
        <div className="flex flex-wrap -mx-4 items-start">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/pupslannding.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/Untitled-1.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/Artboard 1.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/3.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/Artboard 11_4.png" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 my-6 space-y-8">
            <div className="">
              <Image width={600} height={600} src="/4.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/9.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
            <div className="">
              <Image width={600} height={600} src="/5.jpg" alt="" className="rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)] bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
     </section>
    {/* work with us section */}
    <PriceEstimate />
    </>
  )
}

export default Portfolio