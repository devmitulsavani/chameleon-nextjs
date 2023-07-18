import React from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  return (
    <>
    <section className="container my-20 md:my-28 lg:my-32">
    <h2 className="text-[38px] leading-[47px] lg:text-[48px] font-bold lg:leading-[57px] text-center">Trusted From <span
        className="text-secondary">Our Clients</span></h2>
    <div className="flex mt-16 items-center flex-wrap">
      <div className="w-full lg:w-1/2 lg:order-1">
        <div className="slider-clientscard relative z-10 p-0 w-full">
          <div>
            <div className="clients-card max-w-[380px] mx-auto md:mx-0 xl:max-w-[480px] w-full">
              <div className="p-5 bg-white rounded-[20px] md:shadow-[4px_4px_20px_7px_rgba(0,0,0,0.03)]">
                <div className="relative rounded-[20px] overflow-hidden client-main">
                  <Image width={600} height={800} src="/malik.jpg" alt="" className="rounded-[20px] client-img h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] xl:h-[400px] xl:w-[400px] 2xl:h-[440px] 2xl:w-[440px] object-cover" />
                </div>
                <div className="flex justify-between pt-5 items-center px-4">
                  <div>
                    <h6 className="font-medium text-lg md:text-[22px]">Malik Brixi</h6>
                    <span className="inline-block md:pt-2 text-base md:text-lg text-[#A9A9A9] capitalize">Red mal CEO</span>
                  </div>
                  <Image width={600} height={800} src="/1640002953801.jpg" alt=""
                    className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="clients-card max-w-[380px] mx-auto md:mx-0 xl:max-w-[480px] w-full">
              <div className="p-5 bg-white rounded-[20px] md:shadow-[4px_4px_20px_7px_rgba(0,0,0,0.03)]">
                <div className="relative rounded-[20px] overflow-hidden client-main">
                  <Image width={600} height={800} src="/Olivia-Chen.jpg" alt="" className="rounded-[20px] client-img h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] xl:h-[400px] xl:w-[400px] 2xl:h-[440px] 2xl:w-[440px] object-cover" />                  
                </div>
                <div className="flex justify-between pt-5 items-center px-4">
                  <div>
                    <h6 className="font-medium text-lg md:text-[22px]">Olivia Chen</h6>
                    <span className="inline-block md:pt-2 text-base md:text-lg text-[#A9A9A9] capitalize">Studio Chenchen CEO</span>
                  </div>
                  <Image width={600} height={800} src="/logo-dark.svg" alt=""
                    className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="clients-card max-w-[380px] mx-auto md:mx-0 xl:max-w-[480px] w-full">
              <div className="p-5 bg-white rounded-[20px] md:shadow-[4px_4px_20px_7px_rgba(0,0,0,0.03)]">
                <div className="relative rounded-[20px] overflow-hidden client-main">
                  <Image width={600} height={800} src="/bodinevanderkogel.jpg" alt="" className="rounded-[20px] client-img h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] xl:h-[400px] xl:w-[400px] 2xl:h-[440px] 2xl:w-[440px] object-cover" />
                </div>
                <div className="flex justify-between pt-5 items-center px-4">
                  <div>
                    <h6 className="font-medium text-lg md:text-[22px]">Bodine van der Kogel</h6>
                    <span className="inline-block md:pt-2 text-base md:text-lg text-[#A9A9A9] capitalize">gogetters CEO</span>
                  </div>
                  <Image width={600} height={800} src="/GG-2020-logo-zwart_final_e1bf1243-fb57-4604-8243-ae77b3a3d127.png" alt=""
                    className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="clients-card max-w-[380px] mx-auto md:mx-0 xl:max-w-[480px] w-full">
              <div className="p-5 bg-white rounded-[20px] md:shadow-[4px_4px_20px_7px_rgba(0,0,0,0.03)]">
                <div className="relative rounded-[20px] overflow-hidden client-main">
                  <Image width={600} height={800} src="/Sergio.jpeg" alt="" style="object-position: top;" className="rounded-[20px] client-img h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] xl:h-[400px] xl:w-[400px] 2xl:h-[440px] 2xl:w-[440px] object-cover" />                  
                </div>
                <div className="flex justify-between pt-5 items-center px-4">
                  <div>
                    <h6 className="font-medium text-lg md:text-[22px]">Sergio</h6>
                    <span className="inline-block md:pt-2 text-base md:text-lg text-[#A9A9A9] capitalize">New School Marketing Stack CEO</span>
                  </div>
                  <Image width={600} height={800} src="/newschoolmarkingsrack.svg" alt=""
                    className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-center pt-14 lg:pt-0">
        <div className="max-w-[470px] mx-auto">
          <svg className="mx-auto" width="61" height="34" viewBox="0 0 61 34" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2848 0.5H30.7851L18.3333 33.2104H0.833252L13.2848 0.5Z" fill="#FF6854" />
            <path d="M43.237 0.5H60.737L48.2852 33.2104H30.7852L43.237 0.5Z" fill="#FF6854" />
          </svg>
          <div className="clientscard-quotes">
            <div>
              <p className="text-[14px] leading-[26px] md:text-[16px] lg:text-[20px] md:leading-[29px] italic mt-4 md:mt-7">Chameleon team contain great talents. Always ready for challenges and they do not want their clients to settle for less! Positively contributes to the overall performance of the project through consistent and high-quality work. I'll recommend working with them and will surely reach out to them for my new ideas. It's so Great to find a team like Chameleon</p>
            </div>
            <div>
              <p className="text-[14px] leading-[26px] md:text-[16px] lg:text-[20px] md:leading-[29px] italic mt-4 md:mt-7">Tushar, and his company (Chameleon Infotech LLP) , has been extremely professional and a great help to our agency.
                He is very easy to communicate with and has great Shopify expertise.
                We have worked with them three times on creating Shopify e-commerce sites.</p>
            </div>
            <div>
              <p className="text-[14px] leading-[26px] md:text-[16px] lg:text-[20px] md:leading-[29px] italic mt-4 md:mt-7">Tushar and his team has helped me tremendously! I really enjoy working with him. He's very creative and innovative. If you're looking for someone who's a good communicator and has the skills to create amazing websites, then Tushar is your guy!</p>
            </div>
            <div>
              <p className="text-[14px] leading-[26px] md:text-[16px] lg:text-[20px] md:leading-[29px] italic mt-4 md:mt-7">Tushar and the team at Chameleon Infotech have been instrumental in developing innovative web & content solutions for some of my Klaviyo and Salesforce Marketing Cloud clients. Their knowledge of CSS/HTML for email development (as well as Javascript for stunning preference pages) is second to none, I couldn't recommend them enough.</p>
            </div>
          </div>
          <div className="flex justify-center mt-12 lg:mt-28 space-x-9">
            <svg className="cursor-pointer prev text-black hover:opacity-100 duration-300 opacity-40" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_96_248)">
              <path d="M2.09815e-06 48L0 0L48 -2.09815e-06L48 48L2.09815e-06 48Z" fill="currentColor" fill-opacity="0.01"/>
              <path d="M6 24L42 24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 12L6 24L18 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_96_248">
              <rect width="48" height="48" fill="currentColor" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
              </clipPath>
              </defs>
              </svg>              

            <svg className="cursor-pointer next text-black hover:opacity-100 duration-300 opacity-40" width="48" height="48" viewBox="0 0 48 48" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_96_244)">
                <path d="M48 48L48 0L0 -2.09815e-06L-2.09815e-06 48L48 48Z" fill="currentColor" fill-opacity="0.01" />
                <path d="M42 24L6 24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30 12L42 24L30 36" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_96_244">
                  <rect width="48" height="48" fill="currentColor" transform="translate(48) rotate(90)" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Testimonial