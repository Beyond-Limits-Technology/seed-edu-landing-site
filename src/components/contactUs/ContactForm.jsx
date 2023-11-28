import { useState } from "react";
import SInput from "../common/SInput";
import STextarea from "../common/STextarea";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setData((data) => ({ ...data, [e.name]: e.target.value }));
  };

  return (
    <div className="w-full py-10 sm:px-6 bg-white sm:shadow-lg rounded-md">
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <SInput
            name="name"
            placeholder="Name*"
            data={data}
            onChangeHandler={onChangeHandler}
          />
          <SInput
            type="email"
            name="email"
            placeholder="Email*"
            data={data}
            onChangeHandler={onChangeHandler}
          />
        </div>
        <SInput
          name="phone"
          placeholder="Phone Number*"
          data={data}
          onChangeHandler={onChangeHandler}
        />
        <STextarea
          name="message"
          placeholder="Your Message*"
          data={data}
          onChangeHandler={onChangeHandler}
        />
        <div className="flex justify-end">
          <button className="px-10 py-3 text-lg font-bold bg-black text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
