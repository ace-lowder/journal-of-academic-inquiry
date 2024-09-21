"use client";

import { useRef, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsFailed(false);

    const formData = new FormData(formRef.current!);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setIsFailed(true);
        console.error("Failed to send email");
      }
    } catch (error) {
      setIsFailed(true);
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted && !isFailed) {
      const sendConfirmationEmail = async () => {
        const formData = new FormData(formRef.current!);
        const confirmationData = {
          from: `"Support Team" <support@journalofinquiry.org>`,
          to: formData.get("email"),
          subject: "Your Message Has Been Received",
          name: formData.get("name"),
          message:
            "Thank you for reaching out to us.\nYour message has been received, and a member of our support team will get back to you shortly.\n\nFeel free to reply to this email with any additional information.\n\nBest,\nSupport Team\nJournal of Academic Inquiry",
        };

        try {
          const response = await fetch("/api/confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(confirmationData),
          });

          if (!response.ok) {
            console.error("Failed to send confirmation email");
          }
        } catch (error) {
          console.error("Error sending confirmation email:", error);
        }
      };

      sendConfirmationEmail();
    }
  }, [isSubmitted, isFailed]);

  return (
    <div className="page">
      <div className="container">
        {isSubmitted && (
          <div className="section bg-green-100 relative">
            <div className="box w-full">
              <h1>Message Sent</h1>
              <p>
                Your message has been sent successfully. We will get back to you
                shortly.
              </p>
              <button
                className="absolute !font-sans top-4 right-4 px-2 py-[2px] hover:bg-green-200"
                onClick={() => setIsSubmitted(false)}
              >
                X
              </button>
            </div>
          </div>
        )}

        <div className="section">
          <div className="box w-full">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to use the form below.</p>
          </div>
        </div>

        <form
          className="flex flex-col gap-4 md:px-32"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl mt-8">Contact Form</h1>
          <div className="section mb-4">
            <div className="box w-full">
              <div className="section flex-wrap lg:gap-4">
                <div className="w-full md:w-1/3 md:grow">
                  <label className="block" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 md:grow">
                  <label className="block" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="w-full"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Inquiry about..."
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full min-h-48"
                    id="message"
                    name="message"
                    placeholder="Please enter your message here..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <FaSpinner className="animate-spin mx-auto" size={20} />
                ) : isSubmitted ? (
                  "Message Sent"
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
