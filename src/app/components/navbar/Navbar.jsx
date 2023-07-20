"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
    },
    {
      id: 3,
      title: "Portfolio",
      url: "/portfolio",
    },
  ];
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        document.querySelector("header").classList.add("active");
      } else {
        document.querySelector("header").classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  useEffect(() => {
    const handleLinkClick = () => {
      setShowMenu(false);
      document.querySelector("header").classList.remove("active");
    };

    // Add click event listeners to all the links in the menu
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach(link => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      // Remove click event listeners when the component unmounts
      menuLinks.forEach(link => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header className={`py-6 ${showMenu ? 'active' : ''}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href="/">
            <Image
                src="/chameleonlogo.svg"  
                className="max-w-[130px] md:max-w-[188px]"
                width={200}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>
          <div className={`burgerMenu lg:hidden w-6 h-5 cursor-pointer bg-transparent duration-300 ease-in-out rotate-0 relative z-[51] ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="absolute block w-full h-[2px] bg-black rounded-[2px] duration-150 ease-in-out origin-[left-center] top-0"></span>
            <span className="absolute block w-full h-[2px] bg-black rounded-[2px] duration-150 ease-in-out origin-[left-center] top-2"></span>
            <span className="absolute block w-full h-[2px] bg-black rounded-[2px] duration-150 ease-in-out origin-[left-center] top-4"></span>
          </div>
          <nav className={`lg:block fixed lg:static h-screen lg:h-full bottom-0 top-0 right-0 w-full sm:w-1/2 bg-white bg-opacity-95 px-7 pt-20 z-50 lg:pt-0 lg:px-0 lg:bg-transparent lg:w-auto backdrop-blur-[10px] lg:backdrop-blur-0 ${showMenu ? 'flex' : 'hidden'}`}>
            <ul className="flex flex-col h-full space-y-[28px]  lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[48px] uppercase text-[#838383] font-medium text-base">
              {links.map((link, index) => (
                <li key={`${link.id}-${index}`}>
                  <Link
                    href={link.url}
                    className={`${pathname == link.url ? "active" : ""} hover:text-black duration-300 menu-link`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="menu-link inline-block lg:hidden uppercase text-[16px] font-medium border px-[30px] py-2 text-black border-black rounded-[10px] hover:bg-black hover:text-white duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-block uppercase text-[16px] font-medium border px-[30px] py-4 border-black rounded-[10px] hover:bg-black hover:text-white duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;