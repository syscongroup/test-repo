"use client";
import BgImage from "@/assets/images/contact-bg.webp";
import { BASE_URL } from "@/constants";
import { ChangeEvent, useState } from "react";
import { Button, Input, Textarea } from "react-daisyui";

type FormData = {
  name: string,
  companyName: string,
  email: string,
  phone: number | string,
  message: string
}

const phoneRegex: RegExp = /^[6789]\d{9}$/;

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleChange(e: ChangeEvent) {
    const { value, id } = e.target as HTMLInputElement

    setFormData(prev => (
      {
        ...prev,
        [id]: value

      }
    ))
  }
  const { name, companyName, email, phone, message } = formData
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${BgImage.src}')` }}
        className="bg-[#000d] bg-contain bg-center bg-blend-darken grid md:grid-cols-2 min-h-[76vh] xl:min-h-[70vh] 2xl:min-h-[65vh] px-8 pt-24 pb-6 bg-no-repeat"
      >
        <div className="flex flex-col md:flex-row justify-center items-center text-xl md:text-3xl text-dawn-pink font-semibold md:border-r-[1px] border-dawn-pink">
          <h1 className="md:leading-[2.5rem] text-center md:text-start">
            <span className="text-[1.825rem] md:text-5xl font-extrabold">
              Get in touch
            </span>&nbsp;
            with <br /> onlinelabreports.com
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl text-dawn-pink font-semibold">Care & Support</p>
          <p className="text-blue-100">Monday to Friday - 10 AM to 6 PM IST</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="underline text-gray-100">Email Chat Support</p>
            <p className="text-dawn-pink font-thin">
              support@onlinelabreports.com
            </p>
          </div>
          <div className="flex flex-col items-center mt-2">
            <p className="underline text-gray-100">Customer Care(Tel)</p>
            <p className="text-dawn-pink font-thin">1866-300-1234</p>
          </div>
        </div>
        <div className="bg-[#d2d2d29f] md:col-span-2 mt-5 w-fit rounded-xl flex flex-col md:flex-row justify-center items-center lg:h-16 self-end justify-self-center sm:px-8 font-semibold py-4 gap-1">
          <div className="px-5 md:border-r-[1px] border-gray-700 flex gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[19px] h-[19px] mt-[2px]"
              fill="#222"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            info@onlinelabreports.com
          </div>
          <div className="px-5 md:border-r-[1px] border-gray-700 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px]"
              fill="#222"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            +91 7899083505
          </div>
          <div className="flex justify-center items-center px-5 gap-4 mt-2 lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="#222"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="#222"
              viewBox="0 0 448 512"
            >
              <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-dawn-pink">
        <div className="px-8 mx-auto max-w-[1360px] py-12 lg:py-16">
          <h2 className="text-center text-xl font-semibold mb-12">
            Send Us a Message
          </h2>
          <form method="POST" action="https://api.web3forms.com/submit" className="flex justify-center items-center gap-16">
            <input type="hidden" name="access_key" value={process.env.WEB3FORM_ACCESS_KEY} />
            <div className="grid lg:grid-cols-2 gap-x-6 gap-y-4 px-6">
              <p className="lg:col-span-2 text-end mb-2 italic">* Required fields</p>
              <div className="flex flex-col gap-1">

                <label htmlFor="name" className="pl-1">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  className="w-[20rem] bg-inherit"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="companyName" className="pl-1">
                  Company Name
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  className="w-[20rem] bg-inherit"
                  value={companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="pl-1">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  className="w-[20rem] bg-inherit"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="pl-1">
                  Phone *
                </label>
                <div className="relative">
                  <span className="absolute h-full w-[3.25rem] flex justify-center items-center font-medium left-0">
                    +91
                  </span>
                  <Input
                    id="phone"
                    name="phone"
                    type="number"
                    inputMode="numeric"
                    className="w-[20rem] bg-inherit indent-9"
                    value={phone}
                    onChange={handleChange}
                    pattern={phoneRegex.source}
                    onWheel={() => document.getElementById("phone")?.blur()}
                    onKeyDown={(e) => {
                      (e.code === "KeyE" ||
                        e.key === "ArrowDown" ||
                        e.key === "ArrowUp") &&
                        e.preventDefault();
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 lg:col-span-2">
                <label className="pl-1" htmlFor="message">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="bg-inherit"
                  rows={3}
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
              <input type="hidden" name="redirect" value={`${BASE_URL}/contact-form-success`} />
              <Button className="tracking-wide lg:col-span-2 mt-2 bg-gray-950 text-dawn-pink lg:hover:bg-gray-900">
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
