import { useState } from "react";
import AccordionCard from "../common/AccordionCard";
import homeFaqsData from "../../data/homeFaqsData";

const CompoundAccordionCard = () => {
  const [show, setShow] = useState(undefined);
  return (
    <>
      {homeFaqsData.map((data, index) => (
        <AccordionCard
          key={index}
          title={data.title}
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
