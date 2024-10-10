"use client";

import { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function ReviewForm() {
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
    const published = formData.get("published") === "on";

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64File = reader.result?.toString().split(",")[1];

      const data = {
        firstName: formData.get("first"),
        lastName: formData.get("last"),
        email: formData.get("email"),
        school: formData.get("school"),
        gpa: formData.get("gpa"),
        subject: formData.get("subject"),
        title: formData.get("title"),
        why: formData.get("why"),
        file: base64File,
        published,
      };

      try {
        const response = await fetch("/api/form/review", {
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
      alert("File size is too large. Please upload a file smaller than 25MB.");
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (isSubmitted && !isFailed) {
      const sendConfirmationEmail = async () => {
        const formData = new FormData(formRef.current!);
        const confirmationData = {
          from: `"Coaching Team" <coaching@journalofinquiry.org>`,
          to: formData.get("email"),
          subject: "Coaching Service - Enrollment Confirmation",
          name: formData.get("first"),
          message:
            "Thank you for submitting your paper for our online review service. One of our qualified writing coaches will review your submission and provide you with feedback to help ensure that your paper meets the Journal's requirements for publication.\n\nThe next email you receive will contain information regarding the payment for the review service.\n\nIf you have any specific concerns or areas you'd like us to focus on during the review, feel free to reply to this email.\n\nBest,\nReview Team\nJournal of Academic Inquiry",
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
        {/* Submission Confirmation */}
        {isSubmitted && !isFailed && (
          <div className="section bg-green-100 relative">
            <div className="box w-full">
              <h1>Submission Confirmation</h1>
              <p>
                Your submission has been received and is being reviewed. One of
                our qualified writing coaches will reach out to you to confirm
                the review and provide payment information.
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

        <div className="section md:gap-12">
          <div className="flex flex-col gap-2 w-full md:grow md:1/2 md:max-w-[420px]">
            <h1>Comprehensive Paper Review</h1>
            <h2>$120 / hr</h2>
            <p>
              You&apos;re submitting your research paper for a detailed review
              by our experienced writing coaches. Our online review service is
              designed to provide you with personalized feedback to improve your
              paper and increase your chances of publication.
            </p>
            <ul>
              <li>
                <b>Expert Feedback</b>: Receive in-depth comments on structure,
                argumentation, and clarity.
              </li>
              <li>
                <b>Tailored Suggestions</b>: Specific recommendations to help
                you revise and polish your paper.
              </li>
              <li>
                <b>Publication-Ready</b>: Our goal is to help you produce a
                paper that meets the standards for academic journals.
              </li>
            </ul>
            <p className="text-xs mt-4">
              *This service is ideal for high school students, undergraduates,
              and early-career researchers seeking to refine their work before
              submission to the Journal of Academic Inquiry or other
              publications.
            </p>
          </div>

          {/* Input Fields */}
          <form
            className="flex flex-col gap-4"
            ref={formRef}
            onSubmit={handleSubmit}
          >
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
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div className="w-full">
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
                    <label className="block" htmlFor="gpa">
                      Current GPA
                    </label>
                    <input
                      className="w-full"
                      id="gpa"
                      name="gpa"
                      type="number"
                      step=".01"
                      placeholder="4.0"
                      required
                    />
                  </div>

                  <div className="w-full md:w-1/4 md:grow">
                    <label className="block" htmlFor="subject">
                      Subject
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
                  <div className="w-full">
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
                  <div className="w-full md:grow">
                    <label className="block" htmlFor="why">
                      Additional Information
                    </label>
                    <textarea
                      className="w-full min-h-32"
                      id="why"
                      name="why"
                      placeholder="Optional: Provide any additional context or specific areas you'd like feedback on."
                    />
                  </div>
                  <div className="w-full flex gap-2">
                    <input id="published" name="published" type="checkbox" />
                    <label htmlFor="published">
                      Have you ever submitted a paper for publication before?
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
