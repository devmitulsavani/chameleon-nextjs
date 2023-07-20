import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="container mt-8 mb-20 md:mb-28 lg:mb-32">
      <h2 className="text-[38px] leading-[47px] lg:text-[48px] font-bold lg:leading-[57px] text-center">
        Terms <span className="text-secondary">&</span> Conditions
      </h2>
      <p className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize mt-4 md:mt-7">
        Chameleon Infotech LLP owns and manages this website, as well as the
        copyright to it. We offer top-notch web and software development
        services to online business owners. The visitor to Chameleon Infotech
        LLP&lsquo;s website must abide by the terms and conditions of the company.
      </p>
      <h4 className="text-secondary font-heading font-bold text-2xl mb-3 mt-10">
        CONDITIONS
      </h4>
      <p className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize max-w-[840px] mt-4">
        As soon as you place an order with us, you confirm that you will follow
        the terms and conditions enumerated below:
      </p>
      <ul className="pl-5 md:pl-10">
        <li className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize my-5 list-disc">
          We consider the businesses and individuals who use our web-based
          services as clients.
        </li>
        <li className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize my-5 list-disc">
          When a client and Chameleon Infotech LLP enter into a contract through
          a phone conversation or email agreement, it considers being an order
        </li>
        <li className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize my-5 list-disc">
          The graphics, web content, and all coding will be considered Chameleon
          Infotech LLP&lsquo;s property.
        </li>
        <li className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize my-5 list-disc">
          {" "}
          Chameleon Infotech LLP will own the copyright of the works executed
          for the client project. And the client might not reproduce or resell
          it without the knowledge of Chameleon Infotech LLP.
        </li>
        <li className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize my-5 list-disc">
          Any legal action taken to enforce copyright against the client&lsquo;s
          submitted content and materials will not be our responsibility in any
          way.
        </li>
      </ul>
      <p className="text-sm sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize mt-4">
        Contact us to learn more about our terms and conditions and web
        development services.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
