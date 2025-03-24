"use client";

import React, { useState } from "react";
import { EducationTypes } from "@/definitions/types";
import TitleComponent from "@/components/TitleComponent";
import { educationData } from "@/datas/educationData";

function TimelineComponent() {
  const [selectedEducation, setSelectedEducation] = useState<EducationTypes | null>(educationData[0]);

  return (
    <div className="relative z-20 bg-milk-900 lg:p-24 py-16" id="parcours">
      <div className="max-w-7xl mx-auto p-6">
        <TitleComponent uptitle="Mon parcours" title="Plongez dans mon histoire" />

        <div className="md:hidden mb-6">
          <select
            className="w-full p-3 rounded-lg bg-[#F8F6F6] border border-gray-300 text-mocha-200 font-medium"
            onChange={(e) => {
              const selected = educationData.find((edu) => edu.id === Number(e.target.value));
              setSelectedEducation(selected || null);
            }}
            value={selectedEducation?.id || ""}
          >
            {educationData.map((education) => (
              <option key={education.id} value={education.id}>
                {education.title} ({education.years})
              </option>
            ))}
          </select>
        </div>
        <div className="md:flex-row gap-8 md:flex">
          {/* w-full md:w-1/2 */}
          <div className="hidden md:flex  bg-[#F8F6F6] rounded-2xl p-6">
            <div className="space-y-4">
              {educationData.map((education) => (
                <div
                  key={education.id}
                  onClick={() => setSelectedEducation(education)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedEducation?.id === education.id
                      ? "bg-[#E7DFDF] shadow-md transform scale-105"
                      : "bg-[#F2EEEE] hover:bg-[#E7DFDF]"
                  }`}
                >
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-red-200 text-red-800 mb-2">
                    {education.years}
                  </div>
                  <h3 className="font-bold text-mocha-200">{education.title}</h3>
                  <p className="text-mocha-200">
                    {education.institution}
                    {education.location && `, ${education.location}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#F8F6F6] rounded-2xl p-6">
            {selectedEducation ? (
              <div>
                <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-red-200 text-red-800 mb-2">
                  {selectedEducation.years}
                </div>
                <h2 className="text-2xl font-bold text-mocha-200 mb-2 font-michael">
                  {selectedEducation.title}
                </h2>
                <p className="text-mocha-200 mb-4">
                  {selectedEducation.institution}
                  {selectedEducation.location && `, ${selectedEducation.location}`}
                </p>

                {selectedEducation.description && (
                  <div className="mt-4 mb-6 flex flex-col gap-2">
                    <h4 className="text-lg font-semibold text-mocha-200 mb-2">Description</h4>
                    <p className="text-mocha-200 bg-gray-50 p-4 rounded-lg border border-gray-200 text-[0.9rem]">
                      {selectedEducation.description}
                    </p>
                  </div>
                )}

                {selectedEducation.skills && selectedEducation.skills.length > 0 && (
                  <div className="mb-6 flex flex-col gap-2">
                    <h4 className="text-lg font-semibold text-mocha-200 mb-2">Apprentissages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-cremeBrulee-900 bg-opacity-20 text-cremeBrulee-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEducation.achievements && selectedEducation.achievements.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold text-mocha-200 mb-2">Réalisations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-mocha-200 text-[0.9rem]">
                      {selectedEducation.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Sélectionnez un élément du parcours pour voir les détails
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineComponent;
