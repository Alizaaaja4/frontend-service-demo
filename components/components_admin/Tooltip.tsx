import { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap z-[100] shadow-md transition-opacity duration-200 ease-in-out">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
