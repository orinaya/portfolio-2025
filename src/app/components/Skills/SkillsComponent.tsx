import SkillCategory from "./SkillCategory";
import {hardSkills, softSkills} from "../../datas/skillsData";
import SoftSkillItem from "./SoftSkillItem";
import TitleComponent from "../TitleComponent";

function SkillsComponent() {
  return (
    <div className="min-h-screen bg-white relative p-24">
      <div className="max-w-7xl mx-auto p-6">
        <TitleComponent uptitle="Mes Skills" title="Découvrez mon panel de compétences" />

        <div className="flex justify-between">
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <i className="text-mocha-200 icon-laptop" />
              </div>
              <h2 className="text-xl font-bold">Hard Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

              <div className="pl-4">
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

              <div className="pl-4">
                {softSkills.map((skill, index) => (
                  <SoftSkillItem key={index} skill={skill} />
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

// // pages/index.tsx
// import type {NextPage} from "next";
// import SkillsPanel from "../components/SkillsPanel";
// import {SkillItem} from "../definitions/types";
// import SkillCategory from "./SkillCategory";

// const Home: NextPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <SkillsPanel />
//     </div>
//   );
// };

// export default Home;
