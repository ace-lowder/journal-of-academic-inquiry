"use client";

import { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function CoachingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://www.paypal.com/ncp/payment/E3E88AM27VVTG", "_blank");

    setIsSubmitting(true);
    setIsFailed(false);

    const formData = new FormData(formRef.current!);

    // Collect the checkbox values
    const written = formData.get("written") === "on";
    const published = formData.get("published") === "on";

    const data = {
      firstName: formData.get("first"),
      lastName: formData.get("last"),
      email: formData.get("email"),
      school: formData.get("school"),
      year: formData.get("year"),
      gpa: formData.get("gpa"),
      subject: formData.get("subject"),
      why: formData.get("why"),
      interests: formData.get("interest"),
      written, // boolean
      published, // boolean
    };

    try {
      const response = await fetch("/api/form/enroll", {
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
            "Thank you for enrolling in our personalized coaching program. One of our academic coaches will reach out to you shortly to get started on your academic journey.\n\nIf you have any questions in the meantime, feel free to reply to this email.\n\nBest,\nCoaching Team\nJournal of Academic Inquiry",
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
                our academic coaches will reach out to you shortly once your
                application has been approved.
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
            <h1>Personalized Academic Coaching</h1>
            <h2>$950/5 sessions or $210/session</h2>
            <p>
              You&apos;re enrolling in our coaching program designed to help you
              craft a high-quality academic paper from start to finish.
              Throughout the program, you&apos;ll receive expert one-on-one
              mentorship tailored to your specific needs. Whether you&apos;re
              new to academic writing or looking to improve your skills, our
              program offers personalized support at every stage—from topic
              selection to final revisions.
            </p>
            <p>
              We highly recommend $950/5 sessions of coaching for those starting
              their paper from scratch as it offers a discounted rate and
              comprehensive guidance.
            </p>
            <ul>
              <li>
                <b>One-on-One Mentorship</b>: Direct, personalized feedback
              </li>
              <li>
                <b>Paper Development</b>: From research planning to the final
                draft
              </li>
              <li>
                <b>Expert Feedback</b>: Tailored to your academic goals
              </li>
            </ul>
            <p className="text-xs mt-4">
              *This coaching service is ideal for high school students,
              early-career researchers, and anyone seeking to produce a
              well-researched, well-written academic paper. After paying $950,
              you will receive 5 sessions of personalized coaching. Any
              additional sessions will be $210 afterward.
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
                  <div className="w-full md:w-1/3 md:grow">
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
                  <div className="w-full md:w-1/3 md:grow">
                    <label className="block" htmlFor="year">
                      Year in School
                    </label>
                    <select className="w-full" id="year" name="year">
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/3 md:grow">
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
                  <div className="w-full md:w-1/3 md:grow">
                    <label className="block" htmlFor="subject">
                      Primary Subject of Interest
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
                    <label className="block" htmlFor="why">
                      Why are you interested in this program?
                    </label>
                    <textarea
                      className="w-full min-h-48"
                      id="why"
                      name="why"
                      placeholder="Briefly explain why you're enrolling and what you hope to achieve."
                      required
                    />
                  </div>
                  <div className="w-full md:grow">
                    <label className="block" htmlFor="interest">
                      Topics of Interest
                    </label>
                    <textarea
                      className="w-full min-h-32"
                      id="interest"
                      name="interest"
                      placeholder="Share a few topics that you are interested in writing about."
                    />
                  </div>
                  <div className="w-full flex gap-2">
                    <input id="written" name="written" type="checkbox" />
                    <label htmlFor="written">
                      Have you written a research paper before?
                    </label>
                  </div>
                  <div className="w-full flex gap-2">
                    <input id="published" name="published" type="checkbox" />
                    <label htmlFor="published">
                      Have you ever been published?
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
                    "Enroll Form Sent"
                  ) : (
                    "Enroll Now"
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
