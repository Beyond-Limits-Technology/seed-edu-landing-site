import { useState } from "react";
import AccordionCard from "../common/AccordionCard";

const Content = () => {
  const [show, setShow] = useState(undefined);

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-20 px-5">
      <h6 className=" text-3xl font-bold text-black text-center">
        Frequently Asked Questions
      </h6>

      <div className="mt-8">
        <AccordionCard
          title="How do I reset my password?"
          answer={
            <div>
              As a student, you can access course materials through your
              dedicated student portal. Log in using your credentials, and
              you'll find a comprehensive list of courses you're enrolled in.
              Click on each course to access lecture notes, assignments, and
              other relevant resources. If you encounter any issues, our
              technical support team is available to assist you.
            </div>
          }
          index={1}
          value={show}
          callback={(index) =>
            setShow((prev) => (prev === index ? undefined : index))
          }
        />
        <AccordionCard
          title="What is the warranty period?"
          answer="Our products come with a 1-year warranty."
          index={2}
          value={show}
          callback={(index) =>
            setShow((prev) => (prev === index ? undefined : index))
          }
        />
        <AccordionCard
          title="How can I cancel a subscription?"
          answer="Log in and go to account settings for cancellation."
          index={3}
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
