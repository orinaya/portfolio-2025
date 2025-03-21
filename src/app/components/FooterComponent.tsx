import React from "react";
import Image from "next/image";

interface ExternalLinkParticleProps {
  href: string;
  target?: string;
  title: string;
  color: string;
  iconAfter?: string;
}

function ExternalLinkParticle({href, target, title, color, iconAfter}: ExternalLinkParticleProps) {
  return (
    <a
      href={href}
      target={target}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-${color} text-white font-medium hover:opacity-90 transition-opacity`}
    >
      {title}
      {iconAfter === "download" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative flex items-end bg-cover bg-no-repeat bg-top md:h-[600px] h-[860px] bg-mocha-950">
      <div className="container">
        <div className="w-full flex flex-col items-start justify-between bottom-0 py-3 lg:px-6 px-0 text-darkOlive-200">
          <div className="h-20 w-full flex justify-center lg:mt-12 mb-12">
            <Image
              src="/img/ori-logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <div className="w-full flex flex-wrap items-start lg:justify-around justify-between bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-200 lg:h-40 h-fit gap-4 md:gap-0">
            <h2 className="md:text-4xl text-3xl font-extrabold lg:w-fit w-full mb-8 lg:mb-0 font-['michael']">
              Une opportunité ? <br />
              <span className="font-normal">Discutons-en !</span>
            </h2>

            <div className="flex flex-col gap-2 justify-start">
              <p className="font-semibold">Email</p>
              <p className="flex items-center gap-2">
                <span className="icon-mail"></span>
                ori.frouin@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-2 justify-start">
              <p className="font-semibold">Réseaux sociaux</p>
              <a
                href="https://www.linkedin.com/in/oriane-frouin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="icon-linkedin">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </span>
                /in/oriane-frouin
                <span className="icon-squareout"></span>
              </a>
              <a
                href="https://github.com/orinaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="icon-github"></span>
                orinaya
                <span className="icon-squareout"></span>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:mt-12 mt-4">
            <ExternalLinkParticle
              href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
              target="_blank"
              title="Télécharger mon CV"
              color="strawberry"
              iconAfter="download"
            />
          </div>

          <div className="w-full mt-12">
            <p className="text-center">&copy; 2024 Oriane Frouin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
