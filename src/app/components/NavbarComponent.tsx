"use client";
import Link from "next/link";
import ButtonComponent from "@/components/ButtonComponent";
import {useEffect, useState} from "react";

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Détecter le scroll pour changer la couleur de fond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 flex justify-between items-center py-2 lg:py-2 px-8 transition-all duration-300 ${
          isScrolled ? "bg-milk-980" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center lg:w-1/5">
          <Link href="/" className="text-strawberry-700 text-lg lg:text-2xl font-michael">
            Oriane Ratelade
          </Link>
        </div>

        {/* nav */}
        <div className="hidden lg:flex gap-8 items-center ">
          <Link href="/#a-propos" className="hover:text-strawberry-700  transition font-medium">
            À propos
          </Link>
          <Link href="/#skills" className="hover:text-strawberry-700  transition font-medium">
            Mes skills
          </Link>
          <Link href="/#parcours" className="hover:text-strawberry-700  transition font-medium">
            Mon parcours
          </Link>
          <Link href="/#projets" className="hover:text-strawberry-700  transition font-medium">
            Mes projets
          </Link>
        </div>

        {/* GitHub & Contact */}
        <div className="hidden lg:flex gap-4 items-center w-1/5">
          <ButtonComponent
            title="Github"
            colorBg="transparent"
            colorText="=text-strawberry-200"
            colorBgHover="hover:bg-strawberry-800"
            colorTextHover="hover:text-strawberry-300"
            routeLink="https://github.com/orinaya"
            target="_blank"
            iconBefore="github"
          />
          <ButtonComponent
            title="Contact"
            colorBg="bg-strawberry-800"
            colorText="text-strawberry-200"
            colorBgHover="hover:bg-strawberry-700"
            colorTextHover="hover:text-milk-980"
            routeLink="https://www.linkedin.com/in/oriane-ratelade/"
            target="_blank"
            iconBefore="letter"
          />
        </div>
        <div className="lg:hidden">
          <ButtonComponent
            colorBg="bg-strawberry-900"
            colorText="text-strawberry-200"
            colorBgHover="hover:bg-strawberry-800"
            colorTextHover="hover:text-strawberry-300"
            target="_blank"
            iconCenter="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-milk-980 z-40 transform transition-transform duration-300 ease-in-out pt-24 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden`}
        >
          <div>
            <ButtonComponent
              colorBg="bg-strawberry-900"
              colorText="text-strawberry-200"
              colorBgHover="hover:bg-strawberry-800"
              colorTextHover="hover:text-strawberry-300"
              iconCenter="close-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="m-auto"
            />
          </div>

          <div className="flex flex-col items-center gap-6 p-6">
            <Link href="/#a-propos" className="font-medium" onClick={handleClick}>
              À propos
            </Link>
            <Link href="/#skills" className="font-medium" onClick={handleClick}>
              Mes skills
            </Link>
            <Link href="/#parcours" className="font-medium" onClick={handleClick}>
              Mon parcours
            </Link>
            <Link href="/#projets" className="font-medium" onClick={handleClick}>
              Mes projets
            </Link>
            <div className="mt-6 flex flex-col gap-4 w-full max-w-xs">
              <ButtonComponent
                title="Github"
                colorBg="transparent"
                colorText="=text-strawberry-200"
                colorBgHover="hover:bg-strawberry-800"
                colorTextHover="hover:text-strawberry-300"
                routeLink="https://github.com/orinaya"
                iconBefore="github"
                target="_blank"
                onClick={handleClick}
              />
              <ButtonComponent
                title="Contact"
                colorBg="bg-strawberry-800"
                colorText="text-strawberry-200"
                colorBgHover="hover:bg-strawberry-700"
                colorTextHover="hover:text-milk-980"
                routeLink="https://www.linkedin.com/in/oriane-ratelade/"
                iconBefore="letter"
                target="_blank"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
