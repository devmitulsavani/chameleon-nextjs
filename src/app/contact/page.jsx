import React from "react";
import ContactFrom from "../components/contactFrom/ContactFrom";
export const metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact",
    description:
    "We are the ideal technology partner for providing scalable businesses with custom web development services.",
  },
};

const Contact = () => {
  return (
    <>
      {/* contact text section */}
      <section className="container mt-8 mb-20 md:mb-28 lg:mb-32">
        <h6 className="text-secondary font-heading font-bold text-lg mb-3">
          Contact
        </h6>
        <h2 className="text-[38px] leading-[47px] lg:text-[48px] font-bold lg:leading-[57px] capitalize">
          right here in <span className="text-secondary">surat</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-7 text-[#4C4342] capitalize max-w-[840px] mt-4 md:mt-7">
          Get a free estimate for web design and development based on your
          requirements.
        </p>
        {/* contact form */}
        <div className="flex flex-wrap -mx-4 pt-16">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0 lg:pt-7">
            <div className="lg:max-w-[460px] lg:sticky top-28">
              <h4 className="font-heading text-3xl lg:text-4xl capitalize font-bold">
                contact info
              </h4>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#1A1818] my-4 lg:my-9">
                Plot No. 24, 2nd floor, <br /> Mahalaxmi Society, behind Tulsi
                Hotel, <br /> Nana Varachha, Surat, <br /> Gujarat 395006
              </p>
              <div className="text-lg md:text-2xl lg:text-3xl text-[#1A1818] my-4 lg:my-9">
                <p>+91 (909)-949 9095</p>
                <p>+91 95103 03655</p>
              </div>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#1A1818] my-4 lg:my-9">
                info@chameleoninfotech.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white px-6 md:px-12 py-8 md:py-14 rounded-[10px] shadow-[4px_4px_20px_rgba(0,0,0,0.07)]">
              <h3 className="capitalize font-heading text-3xl md:text-4xl font-bold text-center">
                get in touch
              </h3>
              <ContactFrom />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;