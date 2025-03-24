import Link from "next/link";
import { ButtonProps } from "@/definitions/types";

function ButtonComponent({
  title,
  colorBg,
  colorText,
  routeLink,
  iconBefore,
  iconAfter,
  iconCenter,
  target,
  onClick,
  className,
}: ButtonProps) {
  const buttonClasses = `btn ${colorBg} ${colorText} flex items-center justify-center text-center px-4 py-2 rounded-full font-semibold text-base transition-transform duration-250 ease-in-out`;

  return (
    <>
      {onClick ? (
        <button type="button" className={`${buttonClasses} ${className}`} onClick={onClick}>
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconCenter && <i className={`link-icon-before icomoon icon-${iconCenter} ${className}`} />}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </button>
      ) : routeLink ? (
        <Link href={routeLink} className={`${buttonClasses} ${className}`} target={target}>
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconCenter && <i className={`link-icon-before icomoon icon-${iconCenter} ${className}`} />}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </Link>
      ) : null}
    </>
  );
}

export default ButtonComponent;
