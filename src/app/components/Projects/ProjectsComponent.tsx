"use client";

import {useState, useMemo, Fragment} from "react";
import {motion} from "framer-motion";
import {projectsData, projectsFiltersData} from "@/datas/projectsData";
// import { useRouter } from "next/navigation";
import CardComponent from "@/components/Projects/CardComponent";
import TitleComponent from "@/components/TitleComponent";
import ButtonComponent from "@/components/ButtonComponent";
import FramerMotion from "../Animation/FramerMotion";

const ProjectsPage = () => {
  // const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSort] = useState<string>("default");

  // const getProjectDetails = (path: string) => {
  //   router.push(`/projets/${path}`);
  // };

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
    <div id="projets" className="relative bg-mocha-950 lg:p-24 py-16 z-20">
      <div className="max-w-7xl mx-auto p-6">
        <TitleComponent uptitle="Mes projets" title="Suivez l’évolution de mes projets" />
        <FramerMotion yInitial={50} yWhileInView={0}>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            <div className="flex flex-wrap gap-5 py-6 relative">
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
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-sm lg:text-lg font-light transition-colors duration-300 "
                    onClick={() => setSelectedCategory(item.value)}
                    colorBg="bg-transparent"
                    colorBgHover="hover:bg-mocha-900"
                    colorText="text-mocha-200"
                    colorTextHover="hover:text-mocha-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-cremeBrulee-800 text-cremeBrulee-300 px-3 py-1 rounded-full">
              {filteredProjects.length} résultats
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              // <CardComponent
              //   key={item.id}
              //   id={item.id}
              //   title={item.title}
              //   description={item.description}
              //   image={projectsImgMapping[item.image]}
              //   softwares={item.softwares}
              //   date={item.date}
              //   onClick={() => getProjectDetails(item.path)}
              // />
              <Fragment key={item.id}>
                <CardComponent
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  softwares={item.softwares}
                  date={item.date}
                  project_status={item.project_status}
                />
              </Fragment>
            ))}
          </div>
        </FramerMotion>
      </div>
    </div>
  );
};

export default ProjectsPage;
