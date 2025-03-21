import AboutComponent from "./components/About/AboutComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import TimelineComponent from "./components/Journey/TimelineComponent";
import FooterComponent from "./components/FooterComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";

export default function Home() {
  return (
    <>
      <h2 className="p-1 bg-red-500 text-center text-white ">⚠️En cours de construction⚠️</h2>

      <div className="min-h-screen overflow-x-hidden">
        <NavbarComponent />
        <HeroComponent />
        <AboutComponent />
        <TimelineComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    </>
  );
}
