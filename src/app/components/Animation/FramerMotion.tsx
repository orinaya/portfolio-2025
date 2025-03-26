import {FramerProps} from "@/definitions/types";
import useIsMobile from "@/hooks/useIsMobile";
import {easeInOut, motion} from "framer-motion";

function FramerMotion({
  children,
  xInitial,
  xWhileInView,
  yInitial,
  yWhileInView,
  className,
  scaleInitial,
  scaleWhileInView,
  transitionDuration,
  transitionDelay,
  layoutId,
}: FramerProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div>{children}</div>
  ) : (
    <motion.div
      initial={!isMobile ? {opacity: 0, x: xInitial, y: yInitial, scale: scaleInitial} : {}}
      whileInView={
        !isMobile ? {opacity: 1, x: xWhileInView, y: yWhileInView, scale: scaleWhileInView} : {}
      }
      viewport={{once: true}}
      transition={{
        duration: transitionDuration ? transitionDuration : 0.8,
        delay: transitionDelay ? transitionDelay : 0.2,
        ease: easeInOut,
      }}
      className={className}
      layoutId={layoutId}
    >
      {children}
    </motion.div>
  );
}

export default FramerMotion;
