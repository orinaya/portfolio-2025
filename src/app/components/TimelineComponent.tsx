"use client";

import React, {useState} from "react";
import {EducationTypes} from "../definitions/types";
import TitleComponent from "./TitleComponent";
import {educationData} from "../datas/educationData";

function TimelineComponent() {
  const [selectedEducation, setSelectedEducation] = useState<EducationTypes | null>(
    educationData[0]
  );

  return (
    <div className="relative z-20 bg-milk-900 py-16 px-8" id="parcours">
      <div className="max-w-6xl mx-auto">
        <TitleComponent uptitle="Mon parcours" title="Découvrir mes formations & expériences" />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-[#F8F6F6] rounded-2xl p-6 ">
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
          <div className="w-full md:w-1/2 bg-[#F8F6F6] rounded-2xl p-6 ">
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
                  <div className="mt-4 mb-6">
                    <h4 className="text-lg font-semibold text-mocha-200 mb-2">Description</h4>
                    <p className="text-mocha-200 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      {selectedEducation.description}
                    </p>
                  </div>
                )}

                {selectedEducation.skills && selectedEducation.skills.length > 0 && (
                  <div className="mb-6">
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
                  <div>
                    <h4 className="text-lg font-semibold text-mocha-200 mb-2">Réalisations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-mocha-200">
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
