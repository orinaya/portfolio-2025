import Link from "next/link";
import {ButtonProps} from "../definitions/types";

function ButtonParticle({
  title,
  colorBg,
  colorText,
  routeLink,
  iconBefore,
  iconAfter,
}: ButtonProps) {
  return (
    <>
      <Link
        href={routeLink}
        className={`btn ${colorBg} ${colorText} flex items-center justify-center text-center px-4 py-2 rounded-full font-semibold text-base transition-transform duration-250 ease-in-out`}
      >
        {iconBefore && (
          <i className={`link-icon-before icomoon icon-${iconBefore}`} />
        )}
        {title}
        {iconAfter && (
          <i className={`link-icon-after icomoon icon-${iconAfter}`} />
        )}
      </Link>
    </>
  );
}

export default ButtonParticle;
