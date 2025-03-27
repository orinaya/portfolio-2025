import {TitleProps} from "../definitions/types";
import FramerMotion from "./Animation/FramerMotion";

function TitleComponent({uptitle, title, downtitle, small}: TitleProps) {
  return (
    <>
      <FramerMotion yInitial={50} yWhileInView={0}>
        <div className="text-center lg:mb-12 mb-6">
          <span className="text-strawberry-700 uppercase tracking-wider">{uptitle}</span>
          <div>
            <h2
              className={`text-mocha-200 ${
                small ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"
              } mt-2 font-michael`}
            >
              {title}
            </h2>
            <span className="text-mocha-200 text-lg md:text-2xl text-center -mt-1">
              {downtitle}
            </span>
          </div>
        </div>
      </FramerMotion>
    </>
  );
}

export default TitleComponent;
