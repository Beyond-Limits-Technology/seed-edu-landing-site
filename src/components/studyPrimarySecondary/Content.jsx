import { useState } from "react";
import AccordionCard from "../common/AccordionCard";

const Content = () => {
  const [show, setShow] = useState(undefined);

  return (
    <div className="max-w-7xl mx-auto px-2 py-[20px] ">
      <div className="w-full">
        <img
          src="https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="study-primary-secondary"
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-4 border-l-[4px] border-gray-600 border-opacity-30 py-4 pl-4">
        <p className="text-base font-[400] text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          voluptatem adipisci deleniti velit, alias reprehenderit sit totam.
          Quis, dolores distinctio harum, officia porro quidem sint sequi,
          aliquid sed aut officiis.
        </p>
      </div>

      <div className="mt-6">
        <AccordionCard
          title="Overview"
          answer={
            <p>
              The United States is a popular destination for international
              students seeking a high-quality education. Explore the diverse
              range of universities, programs, and cultural experiences
              available in the US
            </p>
          }
          index={1}
          value={show}
          callback={(index) =>
            setShow((prev) => (prev === index ? undefined : index))
          }
        />
        <AccordionCard
          title="Admission Process"
          answer={
            <ul className=" list-disc list-inside">
              <li>
                Research Universities: Explore institutions based on your field
                of study and preferences.
              </li>
              <li>
                Standardized Tests: Check the specific requirements for exams
                like the SAT, GRE, or TOEFL.
              </li>
              <li>
                Application Documents: Prepare your transcripts, letters of
                recommendation, and personal statements.
              </li>
            </ul>
          }
          index={2}
          value={show}
          callback={(index) =>
            setShow((prev) => (prev === index ? undefined : index))
          }
        />
      </div>
    </div>
  );
};

export default Content;
