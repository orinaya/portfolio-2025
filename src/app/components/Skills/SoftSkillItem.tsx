import React from "react";
import {SoftSkill} from "../../definitions/types";

interface SoftSkillItemProps {
  skill: SoftSkill;
}

function SoftSkillItem({skill}: SoftSkillItemProps) {
  return (
    <div className="flex items-center mb-3">
      <div className="w-4 h-4 mr-3 flex items-center justify-center">
        <span className="text-orange-400">❋</span>
      </div>
      <span>{skill.text}</span>
    </div>
  );
}

export default SoftSkillItem;
