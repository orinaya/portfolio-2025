"use client";

import { motion } from "framer-motion";
import { hardSkills, langSkills, softSkills } from "@/datas/skillsData";
import SkillCategory from "@/components/Skills/SkillCategory";
import SoftSkillItem from "@/components/Skills/SoftSkillItem";
import TitleComponent from "@/components/TitleComponent";

function SkillsComponent() {
  return (
    <div id="skills" className="min-h-screen bg-milk-980 relative px-4 py-16 sm:p-12 md:p-16 lg:p-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto p-6"
      >
        <TitleComponent uptitle="Mes Skills" title="Découvrez mon panel de compétences" />

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-0"
          >
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <span className="text-mocha-200 icon-laptop" />
              </div>
              <h2 className="lg:text-xl text-lg font-bold">Hard Skills</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hardSkills.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCategory category={category} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Langues */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <span className="text-mocha-200 icon-brain" />
                </div>
                <h2 className="lg:text-xl text-lg font-bold">Soft Skills</h2>
              </div>
              <div className="w-full">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SoftSkillItem skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Langues */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <span className="text-mocha-200 icon-lang" />
                </div>
                <h2 className="lg:text-xl text-lg font-bold">Langues</h2>
              </div>
              <div className="w-full">
                {langSkills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SkillCategory category={category} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsComponent;
