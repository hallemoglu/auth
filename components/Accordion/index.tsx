import { useState } from 'react';

interface AccordionMenu {
    title: string;
    children: any;
    type: string;
    text?: string;
}

const Accordion: React.FC<AccordionMenu> = ({ title, type, text, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleOpen, setToggleOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const handleToggle = () => {
      setToggleOpen(!toggleOpen);
    }
  
    return (
      <div className="border border-gray-300 rounded-md mb-2">
        <div
          className="flex items-center justify-between px-4 py-2 cursor-pointer"
          onClick={toggleAccordion}
        >
          <div className="font-medium">{title}</div>
          <div className="transform transition-transform duration-300">
            {type === "dropdown" &&
              <>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </>
            }
            {type === "toggle" &&
              <div 
                className={`${"toggle"} ${isOpen ? "toggle-checked" : "toggle"}`}
                onClick={ handleToggle }></div>
            }
            {type === "text" &&
              <span className="text-green-500 font-semibold">
                { text }
              </span>
            }
          </div>
        </div>
        {isOpen && (
          <div className="border-t border-gray-300 px-4 py-2">
            {children}
          </div>
        )}
      </div>
    );
};

export default Accordion;