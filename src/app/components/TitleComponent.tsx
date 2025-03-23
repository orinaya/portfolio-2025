import {TitleProps} from "@/definitions/types";

function TitleComponent({uptitle, title}: TitleProps) {
  return (
    <>
      <div className="text-center lg:mb-12 mb-6">
        <span className="text-strawberry-700 uppercase tracking-wider">{uptitle}</span>
        <div>
          <h2 className="text-mocha-200 text-4xl font-bold mt-2 font-michael ">{title}</h2>
        </div>
      </div>
    </>
  );
}

export default TitleComponent;
