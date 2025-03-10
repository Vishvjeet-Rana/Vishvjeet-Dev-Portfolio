import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Styles/Navbar.css";

const navItems = ["Home", "About", "Projects", "Interests", "Skills", "HireMe"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    }

    // in this case user is scrolling down
    else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    }

    // user scrolling up
    else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // animations for navbar
  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="h-16 rounded-lg fixed inset-x-0 sm:inset-x-6 top-1 z-50 transition-all border-none duration-700 flex items-center justify-center"
    >
      <header className="absolute top-1/2 w-[50%] -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* here are the items of navbar */}
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}img/navbarimg.png`}
              alt="logo image"
              className="w-10"
            />

            {/* <Buttton
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 items-center justify-center gap-1 sm:flex hidden sm:block"
            /> */}
          </div>

          {/* right side items of the navbar */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {/* {navItems.map((item, index) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn px-4"
                  key={index}
                >
                  {item}
                </a>
              ))} */}
              <p className="mr-45 font-robert-medium text-lg">
                Welcome To My Tech Space
              </p>
            </div>

            {/* audio button */}
            <button
              className="ml-10 space-x-0.5 flex items-center justify-center border-animate cursor-pointer h-8 w-8 rounded-full"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src={`${import.meta.env.BASE_URL}audio/sunset.mp3`}
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{
                    "--animation-order":
                      bar /* Set CSS variable for animation delay */,
                    animationDelay: `${
                      bar * 0.1
                    }s` /* This will work as fallback */,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
