import { useState } from "react";
import AccordionCard from "../common/AccordionCard";
import FAQs from "data/FAQs";

const CompoundAccordionCard = () => {
  const [show, setShow] = useState(undefined);
  return (
    <>
      {FAQs.slice(0, 4).map((data, index) => (
        <AccordionCard
          key={data.id}
          title={data.question}
          answer={data.answer}
          index={index}
          value={show}
          callback={(index) =>
            setShow((prev) => (prev === index ? undefined : index))
          }
        />
      ))}
    </>
  );
};

export default CompoundAccordionCard;
