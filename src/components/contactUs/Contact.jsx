import { ContactForm } from ".";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-[100px] px-2">
      <div className="w-full flex lg:items-start items-center lg:flex-row flex-col gap-4">
        <div className="lg:w-1/2 w-full flex flex-col items-start gap-4">
          <p className="text-base font-[400] text-gray-800">Contact Us</p>
          <h6 className="text-5xl font-bold text-black">
            Get In Touch <span>Today</span>
          </h6>
          <p className="text-base font-[400] text-gray-800">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>

          <div className="flex flex-col gap-6 mt-2">
            {/* phone number */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] bg-black bg-opacity-10 rounded-md flex justify-center items-center">
                <img
                  src="/assets/icons/email.png"
                  alt="email"
                  className="w-[30px]"
                />
              </div>
              <div className="flex flex-col h-full items-start justify-between">
                <h6 className="text-lg font-[600] text-black">
                  Phone Number :
                </h6>
                <a
                  href="tel:+61434552980"
                  className="text-base font-[400] text-black"
                >
                  +61 434 552 980
                </a>
              </div>
            </div>

            {/* email */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] bg-black bg-opacity-10 rounded-md flex justify-center items-center">
                <img
                  src="/assets/icons/email.png"
                  alt="email"
                  className="w-[30px]"
                />
              </div>
              <div className="flex flex-col h-full items-start justify-between">
                <h6 className="text-lg font-[600] text-black">Email :</h6>
                <a
                  href="mailto:info@seededuau.com.au"
                  className="text-base font-[400] text-black"
                >
                  info@seededuau.com.au
                </a>
              </div>
            </div>

            {/* address */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] bg-black bg-opacity-10 rounded-md flex justify-center items-center">
                <img
                  src="/assets/icons/email.png"
                  alt="email"
                  className="w-[30px]"
                />
              </div>
              <div className="flex flex-col h-full items-start justify-between">
                <h6 className="text-lg font-[600] text-black">Address :</h6>
                <a
                  href="https://maps.google.com"
                  className="text-base font-[400] text-black"
                >
                  Level 3, 408 Collins Street, Melbourne, VIC 3000
                </a>
              </div>
            </div>
          </div>

          {/* social media */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href=""
              className="w-[40px] h-[40px] bg-black bg-opacity-10 rounded-md flex justify-center items-center"
            >
              <img
                src="/assets/icons/facebook.png"
                alt="facebook"
                className="w-[20px]"
              />
            </a>
            <a
              href=""
              className="w-[40px] h-[40px] bg-black bg-opacity-10 rounded-md flex justify-center items-center"
            >
              <img
                src="/assets/icons/instagram.png"
                alt="instagram"
                className="w-[20px]"
              />
            </a>
            <a
              href=""
              className="w-[40px] h-[40px] bg-black bg-opacity-10 rounded-md flex justify-center items-center"
            >
              <img
                src="/assets/icons/line.png"
                alt="line"
                className="w-[20px]"
              />
            </a>
            <a
              href=""
              className="w-[40px] h-[40px] bg-black bg-opacity-10 rounded-md flex justify-center items-center"
            >
              <img
                src="/assets/icons/whatsapp.png"
                alt="whatsapp"
                className="w-[20px]"
              />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 sm:w-[550px] w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
