"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import PassionsComponent from "@/components/About/PassionsComponent";
import TitleComponent from "@/components/TitleComponent";
import ButtonParticle from "@/components/ButtonComponent";
import FramerMotion from "../Animation/FramerMotion";

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
        id="a-propos"
        className={`left-0 w-full bg-milk-980 text-mocha-200 rounded-t-3xl z-10 transform mt-[100vh] lg:px-8 px-4 py-20 md:p-24 transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-16"
        }`}
      >
        <div className="max-w-6xl mx-auto lg:pt-16 pt-8 lg:pb-16 flex flex-col lg:flex-row justify-between lg:gap-12 gap-32">
          <FramerMotion xInitial={-50} xWhileInView={0} className="flex flex-col w-full lg:w-1/2">
            <TitleComponent uptitle="À propos" title="En quête d’alternance" />
            <div className=" bg-white rounded-2xl p-6 md:p-8 self-stretch text-center justify-start">
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
                <span className="text-base font-medium">Mon but ?</span> Poursuivre mes études en{" "}
                <strong className="font-medium">MBA Développeur Full-Stack</strong> et pourquoi pas,
                vous rejoindre pour une alternance, et ce dès{" "}
                <strong className="font-medium">septembre 2025</strong>.
              </p>

              <p className="text-base font-light">
                {" "}
                <br />
                <br />
                Si mon profil vous intéresse, <br />
                n’hésitez pas à me contacter ! ✨
              </p>
              <div className="flex justify-center mt-4">
                <ButtonParticle
                  title="Contact"
                  colorBg="bg-strawberry-900"
                  colorBgHover="hover:bg-strawberry-800"
                  colorText="text-strawberry-200"
                  colorTextHover="hover:text-strawberry-300"
                  routeLink="#"
                  iconBefore="letter"
                />
              </div>
            </div>
          </FramerMotion>
          <FramerMotion xInitial={50} xWhileInView={0} className="flex flex-col w-full lg:w-1/2">
            <TitleComponent uptitle="Passions & Hobbies" title="Explorez mon univers" />
            <PassionsComponent />
          </FramerMotion>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
