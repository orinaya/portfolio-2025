import {ReactNode, useState} from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

function TooltipComponent({children, text}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-mocha-200 text-milk-980 text-xs rounded-lg px-3 py-1 whitespace-nowrap">
          {text}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full border-4 border-transparent border-t-mocha-200"></span>
        </span>
      )}
    </span>
  );
}

export default TooltipComponent;
