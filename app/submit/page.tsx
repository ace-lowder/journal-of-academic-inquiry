"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Submit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsFailed(false);

    const formData = new FormData(formRef.current!);
    const file = formData.get("file") as File;
    const elsewhere = formData.get("elsewhere") === "on";

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64File = reader.result?.toString().split(",")[1];

      const data = {
        firstName: formData.get("first"),
        lastName: formData.get("last"),
        email: formData.get("email"),
        school: formData.get("school"),
        title: formData.get("title"),
        subject: formData.get("subject"),
        summary: formData.get("summary"),
        file: base64File,
        elsewhere,
      };

      try {
        const response = await fetch("/api/form/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          setIsSubmitted(true);
          setIsFailed(false);
        } else {
          setIsFailed(true);
          console.error("Error submitting form:", response.statusText);
        }
      } catch (error) {
        setIsFailed(true);
        console.error("Fetch error:", error);
      } finally {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsSubmitting(false);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 25 * 1024 * 1024) {
      // 25 MB limit
      alert("File size is too large. Please upload a file smaller than 25MB.");
      e.target.value = ""; // Clear the file input
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Submission Confirmation */}
        {isSubmitted && !isFailed && (
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

        {isFailed && (
          <div className="section bg-red-100 relative">
            <div className="box w-full">
              <h1>Submission Failed</h1>
              <p>
                Something went wrong during submission. Please try again or
                contact support if the issue persists.
              </p>
              {/* Close button */}
              <button
                className="absolute !font-sans top-4 right-4 px-2 py-[2px] hover:bg-red-200"
                onClick={() => setIsFailed(false)}
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
          {/* Input Fields */}
          <div className="section mb-4">
            <div className="box w-full">
              <div className="section flex-wrap lg:gap-4">
                <div className="w-full">
                  <label className="paper" htmlFor="first">
                    Paper
                  </label>
                  <input
                    className="w-full"
                    type="file"
                    name="file"
                    id="paper"
                    accept=".pdf"
                    required
                    onChange={handleFileChange}
                  />
                </div>
                <div className="w-full md:w-1/3 md:grow">
                  <label className="block" htmlFor="first">
                    First Name
                  </label>
                  <input
                    className="w-full"
                    id="first"
                    name="first"
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
                    name="last"
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
                    name="email"
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
                    name="school"
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
                    name="title"
                    type="text"
                    placeholder="The Impact of Academic Research"
                    required
                  />
                </div>
                <div className="w-full md:w-1/4 md:grow">
                  <label className="block" htmlFor="subject">
                    Subject Area
                  </label>
                  <select
                    className="w-full"
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Academic Focus</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Health Sciences">Health Sciences</option>
                    <option value="STEM">STEM</option>
                    <option value="Business">Business</option>
                    <option value="Law">Law</option>
                    <option value="Visual & Performing Arts">
                      Visual & Performing Arts
                    </option>
                  </select>
                </div>
                <div className="w-full md:grow">
                  <label className="block" htmlFor="summary">
                    Brief Summary
                  </label>
                  <textarea
                    className="w-full min-h-48"
                    id="summary"
                    name="summary"
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
                  <input id="elsewhere" name="elsewhere" type="checkbox" />
                  <label htmlFor="elsewhere">
                    I have submitted this paper elsewhere
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <FaSpinner className="animate-spin mx-auto" size={20} />
                ) : isSubmitted ? (
                  "Submitted"
                ) : (
                  "Submit"
                )}
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
