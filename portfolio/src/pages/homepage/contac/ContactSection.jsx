import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const replyData = {
      user_name: data.from_name,
      user_email: data.from_email,
    };
    // console.log("Sending to:", data.from_email);

    try {
      // Send to admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID,
        replyData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // ✅ Success Message
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: `Thanks for reaching out. We've received your message and sent a confirmation email: "${replyData.user_email}" .`,
        confirmButtonText: "Great!",
        confirmButtonColor: "#5a4f85",
      });

      reset();
    } catch (error) {
      console.log("EmailJS error:", error);

      // ❌ Error Message
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Message not sent. Check email and retry.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <section className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card bg-[#5a4f85] shadow-xl border"
        >
          <div className="card-body">
            <h3 className="card-title mx-auto text-white">
              Contact Information
            </h3>
            <div className="mt-4 bg-gray-100 rounded-lg p-6 space-y-2 text-gray-800">
              <p>📧 programmarimran@gmail.com</p>
              <p>📞 +8801715994657</p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a target="blank" href="https://wa.me/+8801715994657">
                  +8801715994657
                </a>
              </p>
              <p>
                🌐{" "}
                <a target="blank" href="https://imran-dev-portfolio.web.app">
                  www.portfolio.com
                </a>
              </p>
              <p>🏠 Gazipur, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="card bg-[#5a4f85] shadow-xl border"
        >
          <div className="card-body">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
              noValidate
            >
              <input
                type="text"
                placeholder="Your Name"
                {...register("from_name", { required: "Name is required" })}
                className={`input bg-gray-100 input-bordered w-full text-gray-800 ${
                  errors.from_name ? "border-red-500" : ""
                }`}
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm">
                  {errors.from_name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Your Email"
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Strict email regex
                    message: "Invalid email address",
                  },
                })}
                className={`input bg-gray-100 input-bordered w-full text-gray-800 ${
                  errors.from_email ? "border-red-500" : ""
                }`}
              />
              {errors.from_email && (
                <p className="text-red-500 text-sm">
                  {errors.from_email.message}
                </p>
              )}

              <textarea
                placeholder="Your Message"
                rows="4"
                {...register("message", { required: "Message is required" })}
                className={`textarea bg-gray-100 textarea-bordered w-full text-gray-800 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary text-white"
              >
                {isSubmitting ? "Sending..." : "Send Email"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
