import Link from "next/link";

export default function Review() {
  return (
    <div className="page">
      {/* Call to Action */}
      <div className="full-width px-8 lg:px-0 text-center items-center">
        <div className="section">
          <div className="box md:w-1/2 md:min-w-[500px] mx-auto text-center">
            <h1 className="-mb-2">
              Get Expert Feedback with Our Online Review Service
            </h1>
            <h2>$100</h2>
            <p>
              Improve your chances of publication with detailed feedback from
              experienced writing coaches. Get the insights you to refine your
              paper for publication in the Journal of Academic Inquiry. Receive
              personal feedback within a few days.
            </p>
            <Link href="/services/review/submit">
              <button className="primary-button w-full">
                Submit For Review
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Program Overview */}
        <div className="section">
          <div className="box">
            <h1>About the Service</h1>
            <p>
              Our online review service is designed to help students and
              early-career researchers enhance their writing and ensure their
              papers are ready for submission. Whether you&apos;re seeking
              publication in the Journal of Academic Inquiry or preparing for
              another journal, our writing coaches will provide you with
              actionable feedback to improve your work. This one-time service
              gives you the tools you need to revise your paper and take it to
              the next level.
            </p>
            <div className="w-full flex flex-col md:flex-row">
              <ul className="w-full md:grow md:w-1/2">
                <li>Personalized feedback from experienced coaches</li>
                <li>
                  Detailed review of structure, argumentation, and clarity
                </li>
              </ul>
              <ul className="w-full md:grow md:w-1/2">
                <li>Actionable suggestions to refine your paper</li>
                <li>Support to meet academic publication standards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}

        <div className="section sm:flex-row sm:flex-wrap">
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>How It Works</h1>
            <p>
              In the first week, we&apos;ll help you refine your research topic
              and develop a strong, clear thesis statement that will guide your
              paper. This session sets the foundation for the entire writing
              process.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="full-width">
        <div className="container px-8 lg:px-0">
          <h1 className="text-center">Testimonials</h1>
          <div className="section flex-wrap items-stretch">
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Sophia M</h1>
              <h2 className="text-xs mb-2 text-center">High School Senior</h2>
              <p>
                The feedback I received from the review service was incredibly
                thorough. It helped me improve my paper, and I felt much more
                confident submitting it for publication. The suggestions were
                clear and easy to follow, and they made my paper much stronger.
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Brent C</h1>
              <h2 className="text-xs mb-2 text-center">
                Undergraduate Student
              </h2>
              <p>
                The online review service was exactly what I needed. The coach
                provided valuable feedback on my structure and arguments, and I
                was able to make meaningful revisions before submitting my
                paper. I highly recommend this service to anyone preparing an
                academic paper.
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Janelle T</h1>
              <h2 className="text-xs mb-2 text-center">Graduate Student</h2>
              <p>
                This review service helped me polish my paper in ways I wouldn’t
                have thought of on my own. The detailed feedback really
                strengthened my work and gave me confidence when submitting it
                for publication. Worth every penny!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* FAQ */}
        <div className="section">
          <div className="box">
            <h1>Frequently Asked Questions</h1>
            <b>What do I get with the review service?</b>
            <ul>
              <li>
                Our review service provides a detailed feedback report on your
                academic paper. One of our experienced writing coaches will
                analyze your work and provide actionable suggestions to improve
                your paper&apos;s structure, argumentation, and clarity.
              </li>
            </ul>
            <b>How long does the review process take?</b>
            <ul>
              <li>
                You will receive your feedback within 5 business days after
                submitting your paper. We strive to provide timely and thorough
                reviews to ensure you have enough time to make revisions.
              </li>
            </ul>
            <b>Can I resubmit my paper for additional feedback?</b>
            <ul>
              <li>
                While the online review service is a one-time review, you are
                welcome to resubmit your revised paper for another review at the
                standard rate of $100.
              </li>
            </ul>
            <b>
              Is this review service only for papers submitted to the Journal of
              Academic Inquiry?
            </b>
            <ul>
              <li>
                No, this service is open to all academic papers, regardless of
                where you plan to submit them. Whether you&apos;re aiming to
                publish in our journal or another scholarly publication, our
                feedback will help you improve your paper.
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Still have questions?</h1>
            <p>
              Have more questions or ready to submit your paper? Contact us
              today to learn more about how we can help you improve your
              academic writing and get your paper ready for publication.
            </p>
            <Link href="/contact">
              <button className="secondary-button w-full">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
