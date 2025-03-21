import SkillCategory from "./SkillCategory";
import {hardSkills, langSkills, softSkills} from "../../datas/skillsData";
import SoftSkillItem from "./SoftSkillItem";
import TitleComponent from "../TitleComponent";

function SkillsComponent() {
  return (
    <div
      id="skills"
      className="min-h-screen bg-milk-980 relative px-4 py-16 sm:p-12 md:p-16 lg:p-24"
    >
      <div className="max-w-7xl mx-auto p-6">
        <TitleComponent uptitle="Mes Skills" title="Découvrez mon panel de compétences" />

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <i className="text-mocha-200 icon-laptop" />
              </div>
              <h2 className="text-xl font-bold">Hard Skills</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hardSkills.map((category, index) => (
                <SkillCategory key={index} category={category} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="text-mocha-200 icon-brain" />
                </div>
                <h2 className="text-xl font-bold">Soft Skills</h2>
              </div>
              <div className="w-full">
                {softSkills.map((skill, index) => (
                  <SoftSkillItem key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="text-mocha-200 icon-lang" />
                </div>
                <h2 className="text-xl font-bold">Langues</h2>
              </div>
              <div className="w-full">
                {langSkills.map((category, index) => (
                  <SkillCategory key={index} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
