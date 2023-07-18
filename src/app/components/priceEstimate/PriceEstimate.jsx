import React from "react";
import Link from "next/link";

export const PriceEstimate = () => {
  return (
    <section className="container my-20 md:my-28 lg:my-32">
      <div className="bg-[url('/newsletter.png')] bg-cover bg-right before:bg-white before:absolute relative before:inset-0 overflow-hidden before:bg-opacity-90 p-8 md:p-16 rounded-3xl shadow-[inset_0_0_2000px_rgba(255,255,255,.8)] text-center">
        <h2 className="text-[30px] md:text-[36px] font-bold font-primary leading-[37px] md:leading-[47px] relative">
          Intrested To Work With Us?
        </h2>
        <p className="text-xl md:text-2xl capitalize font-medium mt-4 relative">
          Send a line here and get update daily
        </p>
        <Link
          href="/contact"
          className="relative text-white uppercase bg-secondary text-base md:text-lg font-medium mt-10 px-7 py-4 inline-block rounded-[10px] hover:bg-transparent hover:text-secondary duration-300 border border-secondary"
        >
          PRICE ESTIMATE
        </Link>
      </div>
    </section>
  );
};
