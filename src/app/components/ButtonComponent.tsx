import Link from "next/link";
import {ButtonProps} from "@/definitions/types";

function ButtonComponent({
  title,
  colorBg,
  colorText,
  routeLink,
  iconBefore,
  iconAfter,
  target,
  onClick,
}: ButtonProps) {
  const buttonClasses = `btn ${colorBg} ${colorText} flex items-center justify-center text-center px-4 py-2 rounded-full font-semibold text-base transition-transform duration-250 ease-in-out`;

  return (
    <>
      {onClick ? (
        <button type="button" className={buttonClasses} onClick={onClick}>
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </button>
      ) : routeLink ? (
        <Link href={routeLink} className={buttonClasses} target={target}>
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </Link>
      ) : null}
    </>
  );
}

export default ButtonComponent;
