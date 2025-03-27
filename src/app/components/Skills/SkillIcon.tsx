import Image from "next/image";
import {SkillItem} from "../../definitions/types";

import {default as IconMapping} from "../../utils/iconMapping";

interface SkillIconProps {
  skill: SkillItem;
}

function SkillIcon({skill}: SkillIconProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 flex items-center justify-center rounded-[3px]"
        style={{backgroundColor: `#${skill.color}`}}
      >
        <Image src={IconMapping[skill.icon]} alt={skill.name} width={26} height={26} />
      </div>
      <span className="lg:text-base text-sm">{skill.name}</span>
    </div>
  );
}

export default SkillIcon;
