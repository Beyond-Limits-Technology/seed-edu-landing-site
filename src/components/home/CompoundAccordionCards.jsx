import { useState } from "react";
import AccordionCard from "../common/AccordionCard";

const CompoundAccordionCard = () => {
  const [show, setShow] = useState(1);
  return (
    <>
      <AccordionCard
        title="hello"
        answer="hello ans"
        index={1}
        value={show}
        callback={(index) =>
          setShow((prev) => (prev === index ? undefined : index))
        }
      />
      <AccordionCard
        title="hello"
        answer="hello ans"
        index={2}
        value={show}
        callback={(index) =>
          setShow((prev) => (prev === index ? undefined : index))
        }
      />
      <AccordionCard
        title="hello"
        answer="hello ans"
        index={3}
        value={show}
        callback={(index) =>
          setShow((prev) => (prev === index ? undefined : index))
        }
      />
    </>
  );
};

export default CompoundAccordionCard;
