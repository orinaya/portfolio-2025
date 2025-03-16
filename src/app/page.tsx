import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import TimelineComponent from "./components/TimelineComponent";

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <NavbarComponent />
        <HeroComponent />
        <AboutComponent />
        <TimelineComponent />
      </div>
    </>
  );
}
