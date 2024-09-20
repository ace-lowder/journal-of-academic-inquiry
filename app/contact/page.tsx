"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSubmitted) {
      setIsSubmitted(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <div className="container">
        {/* Submission Confirmation */}
        {isSubmitted && (
          <div className="section bg-green-100 relative">
            <div className="box w-full">
              <h1>Message Sent</h1>
              <p>
                Your message has been sent successfully. We will get back to you
                shortly.
              </p>
              {/* Close button */}
              <button
                className="absolute !font-sans top-4 right-4 px-2 py-[2px] hover:bg-green-200"
                onClick={() => setIsSubmitted(false)}
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* Contact Us Section */}
        <div className="section">
          <div className="box w-full">
            <h1>Contact Us</h1>
            <p>
              If you have any questions regarding submissions, the journal, or
              our services, feel free to reach out to us. If you need assistance
              with the submission process, clarification on guidelines, or
              information about our programs, we&apos;re happy to assist. Please
              use the form below to send us a message, and we&apos;ll get back
              to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-4 md:px-32"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl mt-8">Contact Form</h1>

          {/* Input Fields */}
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
                    placeholder="Please enter your message here..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="primary-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
