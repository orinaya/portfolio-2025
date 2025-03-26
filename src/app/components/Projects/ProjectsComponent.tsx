"use client";
import {useState, useMemo, Fragment} from "react";
import {projectsData, projectsFiltersData} from "@/datas/projectsData";
import CardComponent from "@/components/Projects/CardComponent";
import TitleComponent from "@/components/TitleComponent";
import ButtonComponent from "@/components/ButtonComponent";
import FramerMotion from "../Animation/FramerMotion";

const ProjectsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSort] = useState<string>("default");

  const filteredProjects = useMemo(() => {
    let filtered = [...projectsData];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category?.includes(selectedCategory.toUpperCase()));
    }

    return filtered.sort((a, b) => {
      if (selectedSort === "date_asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (selectedSort === "date_desc") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  }, [selectedCategory, selectedSort]);

  return (
    <div id="projets" className="relative bg-mocha-950 py-16 lg:py-24 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <TitleComponent uptitle="Mes projets" title="Suivez l’évolution de mes projets" />

        <FramerMotion yInitial={50} yWhileInView={0}>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-wrap gap-4 lg:gap-6 py-6">
              {projectsFiltersData.map((item) => (
                <div key={item.id} className="relative">
                  {selectedCategory === item.value && (
                    <FramerMotion
                      layoutId="activeTab"
                      transitionDuration={0.3}
                      className="absolute inset-0 bg-mocha-900 rounded-md -z-10"
                    />
                  )}
                  <ButtonComponent
                    title={item.label}
                    iconBefore={item.icon}
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-sm lg:text-lg font-light transition-colors duration-300"
                    onClick={() => setSelectedCategory(item.value)}
                    colorBg="bg-transparent"
                    colorBgHover="hover:bg-mocha-900"
                    colorText="text-mocha-200"
                    colorTextHover="hover:text-mocha-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-cremeBrulee-800 text-cremeBrulee-300 px-4 py-2 rounded-full text-sm lg:text-base font-semibold">
              {filteredProjects.length} {filteredProjects.length > 1 ? "projets" : "projet"}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {filteredProjects.map((item) => (
              <Fragment key={item.id}>
                <CardComponent
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  softwares={item.softwares}
                  date={item.date}
                />
              </Fragment>
            ))}
          </div>
        </FramerMotion>
      </div>
    </div>
  );
};

export default ProjectsComponent;
