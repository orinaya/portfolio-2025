"use client";
import {useState, useEffect} from "react";
import ButtonComponent from "@/components/ButtonComponent";

function ScrollTopComponent() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollFunction = (): void => {
    const scrollPosition: number =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setShowButton(scrollPosition > 20);
  };

  const scrollToTop = (): void => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  if (!showButton) return null;

  return (
    <>
      <div className="z-50 fixed bottom-10 right-6 h-14 w-14">
        <ButtonComponent
          iconCenter="double-arrow-up"
          colorBg="bg-strawberry-900"
          colorBgHover="bg-strawberry-800"
          colorText="text-strawberry-200"
          colorTextHover="text-strawberry-300"
          onClick={scrollToTop}
          className="py-3"
        />
      </div>
    </>
  );
}

export default ScrollTopComponent;
