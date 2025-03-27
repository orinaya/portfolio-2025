import {BreadcrumbTypes} from "@/definitions/types";
import Link from "next/link";

function BreadcrumbComponent({pageName, previousPages}: BreadcrumbTypes) {
  return (
    <>
      <div className="mt-8 md:text-base text-xs flex items-center">
        {previousPages.map((page) => (
          <Link
            className="text-darkOlive-200 decoration-0 flex items-center "
            href={page.path}
            title={page.name}
            key={page.name}
          >
            {page.name} /{""}
          </Link>
        ))}
        <p className="font-bold m-0 pl-1">{pageName}</p>
      </div>
    </>
  );
}

export default BreadcrumbComponent;
