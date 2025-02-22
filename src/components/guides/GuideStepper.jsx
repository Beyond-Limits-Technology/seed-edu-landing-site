import { useState } from "react";
import guideStepsData from "../../data/guideStepsData";

const GuideForAU = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < guideStepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <ol className="relative text-gray-500 border-s border-gray-200">
        {guideStepsData
          .slice(0, currentStep + 1)
          .map(({ title, description }, index) => {
            return (
              <li
                key={title}
                className={`mb-8 ms-8 ${
                  index === currentStep ? "fade-in" : ""
                }`}
              >
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-400 rounded-full -start-4 ring-4 ring-white">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-[500] sm:text-xl text-lg text-black">
                  {title}
                </h3>
                <p className="sm:text-lg text-base font-[400] text-black">
                  {description}
                </p>
              </li>
            );
          })}
      </ol>
      {currentStep < guideStepsData.length - 1 ? (
        <button
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-primary-400 text-white rounded"
        >
          Next
        </button>
      ) : (
        <div>
          <p className="sm:text-lg text-base font-[400] text-black">
            Finally, you are on the way to encounter your new adventure!
          </p>
        </div>
      )}
    </div>
  );
};

export default GuideForAU;
