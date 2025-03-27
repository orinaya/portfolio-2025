"use client";
import {hardSkills, langSkills, softSkills} from "../../datas/skillsData";
import SkillCategory from "@/components/Skills/SkillCategory";
import SoftSkillItem from "@/components/Skills/SoftSkillItem";
import TitleComponent from "@/components/TitleComponent";
import FramerMotion from "../Animation/FramerMotion";

function SkillsComponent() {
  return (
    <div
      id="skills"
      className="min-h-screen bg-milk-980 relative px-4 py-16 sm:p-12 md:p-16 lg:p-24"
    >
      <TitleComponent uptitle="Mes Skills" title="Découvrez mon panel de compétences" />
      <FramerMotion yInitial={50} yWhileInView={0} className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">
          {/* Hard Skills */}

          <FramerMotion yInitial={-50} yWhileInView={0} className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <span className="text-mocha-200 icon-laptop" />
              </div>
              <h2 className="lg:text-xl text-lg font-bold">Hard Skills</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hardSkills.map((category, index) => (
                <FramerMotion
                  key={index}
                  yInitial={-50}
                  yWhileInView={0}
                  scaleInitial={0.9}
                  scaleWhileInView={1}
                  transitionDuration={0.5}
                  transitionDelay={0.3 + index * 0.1}
                  className="mb-8 lg:mb-0"
                >
                  <SkillCategory category={category} />
                </FramerMotion>
              ))}
            </div>
          </FramerMotion>

          {/* Soft Skills & Langues */}

          <FramerMotion
            yInitial={50}
            yWhileInView={0}
            transitionDelay={0.4}
            className="flex flex-col gap-8"
          >
            {/* Soft Skills */}

            <FramerMotion
              scaleInitial={0.9}
              scaleWhileInView={1}
              transitionDuration={0.5}
              transitionDelay={0.5}
            >
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <span className="text-mocha-200 icon-brain" />
                </div>
                <h2 className="lg:text-xl text-lg font-bold">Soft Skills</h2>
              </div>
              <div className="w-full">
                {softSkills.map((skill, index) => (
                  <FramerMotion
                    key={index}
                    scaleInitial={0.9}
                    scaleWhileInView={1}
                    transitionDuration={0.5}
                    transitionDelay={0.6 + index * 0.1}
                  >
                    <SoftSkillItem skill={skill} />
                  </FramerMotion>
                ))}
              </div>
            </FramerMotion>

            {/* Langues */}

            <FramerMotion
              scaleInitial={0.9}
              scaleWhileInView={1}
              transitionDuration={0.5}
              transitionDelay={0.7}
            >
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <span className="text-mocha-200 icon-lang" />
                </div>
                <h2 className="lg:text-xl text-lg font-bold">Langues</h2>
              </div>
              <div className="w-full">
                {langSkills.map((category, index) => (
                  <FramerMotion
                    key={index}
                    scaleInitial={0.9}
                    scaleWhileInView={1}
                    transitionDuration={0.5}
                    transitionDelay={0.8 + index * 0.1}
                  >
                    <SkillCategory category={category} />
                  </FramerMotion>
                ))}
              </div>
            </FramerMotion>
          </FramerMotion>
        </div>
      </FramerMotion>
    </div>
  );
}

export default SkillsComponent;
