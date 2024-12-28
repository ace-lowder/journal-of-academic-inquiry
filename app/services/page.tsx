"use client";

import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="container">
        {/* Our Services */}
        <div className="section">
          <div className="box">
            <h1>Our Services</h1>
            <p>
              At the Journal of Academic Inquiry, we are dedicated to supporting
              scholars and students in their pursuit of academic excellence. Our
              range of services is designed to provide valuable guidance and
              feedback throughout the research and writing process, ensuring
              that every paper meets the highest standards of scholarly rigor
              and quality. Whether you are looking to develop your academic
              writing skills or seeking an expert review of your research, our
              services are here to assist you in achieving your academic goals.
            </p>
          </div>
        </div>

        {/* Coaching and Review */}
        <div className="section">
          <div className="box">
            <h1 className="text-center -mb-2">Coaching</h1>
            <h2 className="text-center">$1200 / 5 sessions</h2>
            <p>
              Our personalized coaching program is tailored to help students and
              early-career researchers develop the skills necessary to produce
              high-quality academic papers. Participants receive one-on-one
              mentorship from experienced scholars who provide guidance on
              everything from selecting a research topic to refining the final
              draft. By the end of the program, students will have completed a
              full academic paper that meets the rigorous standards of the
              Journal of Academic Inquiry. This program is ideal for those
              seeking structured support and expert advice to enhance their
              academic writing capabilities.
            </p>
            <button
              className="primary-button"
              onClick={() => router.push("/services/coaching")}
            >
              Learn More
            </button>
          </div>
          {/* <div className="box">
            <h1 className="text-center -mb-2">Online Review</h1>
            <h2 className="text-center">$120 / hr</h2>
            <p>
              Our Online Review service offers comprehensive feedback on
              academic papers, providing authors with detailed critiques and
              suggestions for improvement. Each submission is reviewed by a
              panel of experienced academics who assess the paper&apos;s
              originality, argumentation, methodology, and adherence to
              scholarly standards. This service is designed for researchers who
              are preparing to submit their work to academic journals or
              conferences and wish to ensure that their papers are polished,
              impactful, and ready for publication. The Online Review service is
              a valuable resource for anyone looking to elevate the quality of
              their academic writing.
            </p>
            <button
              className="primary-button"
              onClick={() => router.push("/services/review")}
            >
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
