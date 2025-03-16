"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import PassionsComponent from "./PassionsComponent";

function AboutComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`min-h-screen bg-milk-980 text-mocha-200 rounded-t-3xl z-10 transform mt-[100vh] transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-16"
        }`}
      >
        <div className="max-w-6xl mx-auto pt-32 px-8 pb-32 flex justify-between gap-12">
          <div className="flex flex-col w-1/2">
            <div className="text-center mb-12">
              <span className="text-strawberry-700 uppercase tracking-wider">À propos</span>
              <h2 className="text-4xl font-bold mt-2 font-michael">En quête d’alternance</h2>
            </div>

            <div className=" bg-[#FFFFFF] rounded-2xl p-8 self-stretch text-center justify-start">
              <p className="text-base font-light">
                Je m’appelle Ori et je suis actuellement étudiante en troisième année de{" "}
                <strong className="font-medium">Bachelor Développement Web</strong> à{" "}
                <strong className="font-medium">
                  <Link href="https://www.mydigitalschool.com/">MyDigitalSchool</Link>
                </strong>{" "}
                Nantes.
              </p>

              <br />
              <br />
              <p className="text-base font-light">
                <span className="text-base font-medium">Mon but ?</span>
                Poursuivre mes études en
                <strong className="font-medium">MBA Développeur Full-Stack</strong> et pourquoi pas,
                vous rejoindre pour une alternance, et ce dès
                <strong className="font-medium">septembre 2025</strong>.
              </p>

              <p className="text-base font-light">
                {" "}
                !<br />
                <br />
                Si mon profil vous intéresse, n’hésitez pas à me contacter ✨
              </p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/contact"
                  className="bg-[#FF8FA3] text-white px-6 py-2 rounded-full hover:bg-[#ff7a91] transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="text-center mb-12">
              <span className="text-[#FF8FA3] uppercase tracking-wider">Passions & Hobbies</span>
              <h2 className="text-4xl font-bold mt-2 font-michael">Explorer mon univers</h2>
            </div>
            <PassionsComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
