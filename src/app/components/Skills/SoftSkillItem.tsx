"use client";
import {SoftSkill} from "@/definitions/types";
import {useEffect, useRef, useState} from "react";

interface SoftSkillItemProps {
  skill: SoftSkill;
}

function SoftSkillItem({skill}: SoftSkillItemProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth + 8);
    }
  }, [skill.text]);

  return (
    <>
      <div className="relative mb-4 group">
        <div className="rounded-lg bg-mocha-950 overflow-hidden pl-10">
          <div
            className="absolute inset-0 bg-mocha-900 rounded-lg origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{transformOrigin: "ease-in-out", width: textWidth}}
          />

          <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 z-20">
            <div className="w-3 h-3 rounded-full bg-strawberry-800" />
          </div>

          <div className="relative py-1 pr-4 z-10">
            <span className="text-mocha-200 font-medium">{skill.text}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftSkillItem;
