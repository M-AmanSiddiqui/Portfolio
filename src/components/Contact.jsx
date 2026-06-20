import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields before submitting.", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Web Developer",
          from_email: form.email,
          to_email: "m.amansiddiqui2024@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you! I will get back to you soon.", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div className="mt-4 flex w-full justify-center overflow-hidden sm:mt-8">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="modern-surface accent-border w-full max-w-3xl rounded-2xl p-5 sm:p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-7"
        >
          <label className="flex flex-col">
            <span className="mb-3 text-sm font-medium text-white sm:text-base">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-medium text-white outline-none transition placeholder:text-secondary focus:border-[#915EFF]/60 focus:bg-white/[0.07] sm:px-6"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-3 text-sm font-medium text-white sm:text-base">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-medium text-white outline-none transition placeholder:text-secondary focus:border-[#915EFF]/60 focus:bg-white/[0.07] sm:px-6"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-3 text-sm font-medium text-white sm:text-base">
              Your Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="min-h-[160px] resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-medium text-white outline-none transition placeholder:text-secondary focus:border-[#915EFF]/60 focus:bg-white/[0.07] sm:px-6"
              required
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] px-8 py-3 font-bold text-white outline-none shadow-[0_14px_35px_rgba(145,94,255,0.28)] transition hover:-translate-y-1 disabled:opacity-70 sm:w-fit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
