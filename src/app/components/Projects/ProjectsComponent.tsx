"use client";

import {useState, useMemo} from "react";
import {useRouter} from "next/navigation";
import CardComponent from "@/components/Projects/CardComponent";
import {projectsData} from "@/datas/projectsData";
import TitleComponent from "../TitleComponent";

const ProjectsPage = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("default");

  const getProjectDetails = (path: string) => {
    router.push(`/projets/${path}`);
  };

  const filteredProjects = useMemo(() => {
    let filtered = [...projectsData];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category.includes(selectedCategory.toUpperCase()));
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
    <div id="projets" className="relative bg-mocha-950 lg:p-24 z-20">
      <div className="max-w-7xl mx-auto p-6">
        <TitleComponent uptitle="Mes projets" title="Suivez l’évolution de mes projets" />

        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <div className="flex flex-wrap gap-5 py-6">
            {[
              {label: "Tous mes projets", value: "all", icon: "icon-all"},
              {label: "Développement", value: "DEVELOPPEMENT", icon: "icon-dev"},
              {label: "Webdesign", value: "WEBDESIGN", icon: "icon-layout"},
              {label: "Design", value: "DESIGN GRAPHIQUE", icon: "icon-design"},
              {label: "Marketing", value: "MARKETING", icon: "icon-marketing"},
            ].map(({label, value, icon}) => (
              <button
                key={value}
                onClick={() => setSelectedCategory(value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-lg font-light transition ${
                  selectedCategory === value
                    ? "bg-verdigris-400 text-white"
                    : "hover:bg-verdigris-300"
                }`}
              >
                <i className={icon}></i> {label}
              </button>
            ))}
          </div>

          <div className="bg-verdigris-900 text-verdigris-400 font-semibold px-3 py-1 rounded">
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
            <>
              <CardComponent
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                softwares={item.softwares}
                date={item.date}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
