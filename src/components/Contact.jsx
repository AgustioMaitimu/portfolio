import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex h-screen w-screen snap-center items-center justify-center p-14 font-fancy">
      <div className="flex w-full flex-col gap-5 md:w-[54%]">
        <h1 className="text-3xl font-semibold text-[#e45452] md:text-center md:text-4xl xl:text-6xl">
          Send me a message!
        </h1>
        <p className="mb-4 text-sm text-xl text-[#e45452] md:mb-10 md:text-center xl:text-3xl">
          Reach Out for Collaboration, Inquiries, or Just to Say Hello - Your
          Message Matters!
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="4eaeb72c-262a-49a3-8c73-e7867b1b3c76"
          ></input>
          <div className="flex flex-col justify-between md:flex-row">
            <label className="mb-8 flex flex-col gap-2 text-sm font-extralight md:w-[40%] md:text-lg">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-[1px] border-[#e45452] bg-transparent"
                placeholder="Your Name"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-extralight md:w-[40%] md:text-lg">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-[1px] border-[#e45452] bg-transparent"
                placeholder="Your Email"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-extralight md:text-lg">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-24 border-b-[1px] border-[#e45452] bg-transparent"
              placeholder="Enthusiastic about elevating our frontend experience. Eager to discuss strategies for enhancing user interactions and interface design. When can we connect?"
              required
            />
          </label>
          <button
            type="submit"
            className="w-[85%] rounded-md border-[1px] border-[#e45452] px-5 py-3 text-[#e45452] md:mt-10 md:w-[60%] md:self-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
