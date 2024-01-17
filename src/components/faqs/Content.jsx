import { useState } from "react";
import AccordionCard from "../common/AccordionCard";
import FAQs from "data/FAQs";

const Content = () => {
  const [show, setShow] = useState(undefined);

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-20 px-5">
      <h6 className=" text-3xl font-bold text-black text-center">
        Frequently Asked Questions
      </h6>

      <div className="mt-8">
        {FAQs.map((f, i) => {
          return (
            <AccordionCard
              key={f.id}
              title={f.question}
              answer={f.answer}
              index={i}
              value={show}
              callback={(index) =>
                setShow((prev) => (prev === index ? undefined : index))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
