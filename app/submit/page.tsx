"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Submit() {
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
              <h1>Submission Confirmation</h1>
              <p>
                Your submission has been received and is being reviewed. We will
                notify you when it has been approved.
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

        {/* Requirements */}
        <div className="section">
          <div className="box w-full">
            <h1>Submit Your Academic Article</h1>
            <p>
              Ready to submit your work to the Journal of Academic Inquiry? Use
              the form below to upload your research paper and provide the
              necessary details about your submission. Before you submit, please
              take a moment to review our{" "}
              <a href="/submit/requirements">submission requirements</a> to
              ensure your paper meets our guidelines.
            </p>
            <p>
              <b>Note</b>: Only papers that adhere to our submission guidelines
              will be considered for publication. If you need help with
              formatting or have questions, refer to our{" "}
              <a href="/submit/requirements">requirements page</a> for more
              details.
            </p>
            <Link href="/submit/requirements">
              <button className="secondary-button w-full">
                View Requirements
              </button>
            </Link>
          </div>
        </div>

        {/* Submission Form */}
        <form
          className="flex flex-col gap-4 md:px-32"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl mt-8 -mb-4">Submission Form</h1>
          <div className="section">{/* File Upload */}</div>

          {/* Input Fields */}
          <div className="section mb-4">
            <div className="box w-full">
              <div className="box md:w-[600px] my-4 mx-auto">
                <h2>Attach Your Paper</h2>
                <p>
                  Please upload your research paper in PDF format. Ensure your
                  file name includes your full name and the title of your paper.
                </p>
                <button className="secondary-button">Upload File</button>
              </div>
              <div className="section flex-wrap lg:gap-4">
                <div className="w-full md:w-1/3 md:grow">
                  <label className="block" htmlFor="first">
                    First Name
                  </label>
                  <input
                    className="w-full"
                    id="first"
                    type="text"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 md:grow">
                  <label className="block" htmlFor="last">
                    Last Name
                  </label>
                  <input
                    className="w-full"
                    id="last"
                    type="text"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className="w-full md:grow">
                  <label className="block" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full"
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="w-full md:w-1/4 md:grow">
                  <label className="block" htmlFor="school">
                    School Name
                  </label>
                  <input
                    className="w-full"
                    id="school"
                    type="text"
                    placeholder="California High School"
                  />
                </div>
                <div className="w-full md:w-1/4 md:grow">
                  <label className="block" htmlFor="title">
                    Paper Title
                  </label>
                  <input
                    className="w-full"
                    id="title"
                    type="text"
                    placeholder="The Impact of Academic Research"
                    required
                  />
                </div>
                <div className="w-full md:w-1/4 md:grow">
                  <label className="block" htmlFor="subject">
                    Subject Area
                  </label>
                  <input
                    className="w-full"
                    id="subject"
                    type="text"
                    placeholder="Business"
                    required
                  />
                </div>
                <div className="w-full md:grow">
                  <label className="block" htmlFor="summary">
                    Brief Summary
                  </label>
                  <textarea
                    className="w-full min-h-48"
                    id="summary"
                    placeholder="Provide a short description (200 - 300 words) summarizing your research, key findings, and contributions."
                  />
                </div>
                <div className="w-full md:w-1/3 md:grow flex gap-2">
                  <input id="requirements" type="checkbox" required />
                  <label htmlFor="requirements">
                    My paper follows the submission requirements
                  </label>
                </div>
                <div className="w-full md:w-1/3 md:grow flex gap-2">
                  <input id="elsewhere" type="checkbox" />
                  <label htmlFor="elsewhere">
                    I have submitted this paper elsewhere
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="primary-button">
                Submit
              </button>
              <p>
                By clicking the submit button, you confirm that your paper
                adheres to our{" "}
                <a href="/submit/requirements">submission requirements</a> and
                that it is your original work. You will receive a confirmation
                email after submission. If you have any questions or need
                assistance, please <a href="/contact">contact us</a>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
