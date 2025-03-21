import SkillIcon from "./SkillIcon";
import {SkillCategory as SkillCategoryType} from "../../definitions/types";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

function SkillCategory({category}: SkillCategoryProps) {
  return (
    <div className="lg:mb-6">
      <h3 className="text-base font-medium mb-3">{category.title}</h3>
      <div className="flex flex-wrap lg:flex-col lg:gap-3 gap-2 mt-4">
        {category.items.map((skill, index) => (
          <div key={index} className="bg-mocha-950 p-2 rounded-md">
            <SkillIcon skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
