import Link from "next/link";

export default function Coaching() {
  return (
    <div className="page">
      {/* Call to Action */}
      <div className="full-width px-8 lg:px-0 text-center items-center">
        <div className="section">
          <div className="box md:w-1/2 md:min-w-[500px] mx-auto text-center">
            <h1 className="-mb-2">
              Personalized Coaching for Academic Success
            </h1>
            <h2>$180 / hr</h2>
            <p>
              Looking to refine your research skills? Our personalized coaching
              program will guide you through the process. Transform your
              research into a high-quality academic paper in just five weeks.
            </p>
            <button className="primary-button">Enroll Now</button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Program Overview */}
        <div className="section">
          <div className="box">
            <h1>About the Program</h1>
            <p>
              Our five-week coaching program is designed to provide personalized
              support to students and early-career researchers. Through
              one-on-one mentorship, participants will learn to navigate the
              complexities of academic writing, from topic selection to final
              revisions. By the end of the program, you will have a polished
              paper ready for submission to scholarly journals.
            </p>
            <div className="w-full flex flex-col md:flex-row">
              <ul className="w-full md:grow md:w-1/2">
                <li>One-on-one mentoring sessions</li>
                <li>Expert feedback and guidance</li>
              </ul>
              <ul className="w-full md:grow md:w-1/2">
                <li>Access to research resources</li>
                <li>Step-by-step support throughout the writing process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="flex flex-col gap-2">
          <h1>How It Works</h1>
          <div className="section sm:flex-row sm:flex-wrap">
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 1: Paper Topic & Thesis (Week 1)</h1>
              <p>
                In the first week, we&apos;ll help you refine your research
                topic and develop a strong, clear thesis statement that will
                guide your paper. This session sets the foundation for the
                entire writing process.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 2: Research & Outline (Week 2)</h1>
              <p>
                During week two, we focus on gathering and organizing your
                research. Together, we&apos;ll create a detailed outline that
                serves as a roadmap for your paper, ensuring your arguments are
                well-structured and supported.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 3: Drafting the Paper (Week 3)</h1>
              <p>
                In the third week, you&apos;ll begin drafting the main sections
                of your paper. We&apos;ll meet to review your progress and
                provide feedback on your introduction, body paragraphs, and
                conclusions, helping you stay on track.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 4: Feedback & Revision (Week 4)</h1>
              <p>
                Week four is dedicated to revising your paper based on detailed
                feedback. We&apos;ll focus on improving clarity, strengthening
                arguments, and refining the structure to meet academic
                standards.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 5: Final Review & Polishing (Week 5)</h1>
              <p>
                In the final week, we&apos;ll perform a comprehensive review of
                your paper, fine-tuning grammar, formatting, and style. By the
                end of the session, your paper will be polished and ready for
                submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="full-width">
        <div className="container px-8 lg:px-0">
          <h1 className="text-center">Testimonials</h1>
          <div className="section flex-wrap items-stretch">
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Amanda R</h1>
              <h2 className="text-xs mb-2 text-center">High School Senior</h2>
              <p>
                The coaching program was exactly what I needed to take my paper
                from good to great. The weekly sessions kept me motivated, and
                the feedback was incredibly helpful. I felt so much more
                confident in my research by the end!
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Jordan S</h1>
              <h2 className="text-xs mb-2 text-center">
                First-Year College Student
              </h2>
              <p>
                This program helped me break down the overwhelming task of
                writing an academic paper. Each week, I felt like I was making
                solid progress, and my coach was so supportive. Highly recommend
                it to anyone serious about improving their writing!
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Emily L</h1>
              <h2 className="text-xs mb-2 text-center">
                First-Year, Aspiring Historian
              </h2>
              <p>
                I was really nervous about writing my first major research
                paper, but the coaching program gave me all the tools I needed
                to succeed. The step-by-step guidance and personalized feedback
                were game-changers for me.
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
            <b>What qualifications do the coaches have?</b>
            <ul>
              <li>
                Our coaches are experienced academics and professionals with
                advanced degrees in their respective fields. Each coach has a
                strong background in scholarly research and publication,
                ensuring they are well-equipped to provide expert guidance and
                feedback. They have a proven track record of helping students
                and researchers develop high-quality academic papers that meet
                rigorous standards.
              </li>
            </ul>
            <b>How are coaching sessions conducted?</b>
            <ul>
              <li>
                Coaching sessions are conducted online via video conferencing to
                provide flexible and convenient access for participants. Each
                session is scheduled at a mutually convenient time, allowing for
                one-on-one interaction and personalized feedback. This format
                ensures that each participant receives the attention and support
                needed to succeed in their academic writing.
              </li>
            </ul>
            <b>What if I need more time to complete my paper?</b>
            <ul>
              <li>
                We understand that research and writing can be challenging and
                that each participant&apos;s pace may vary. If you need more
                time to complete your paper, we offer the option to extend the
                coaching period at an additional cost. Our goal is to support
                you in producing the best possible work, and we are committed to
                accommodating your needs.
              </li>
            </ul>
            <b>Can I get a refund if I am not satisfied?</b>
            <ul>
              <li>
                We strive to provide a high-quality coaching experience that
                meets your expectations. If you are not satisfied with the
                program, please contact us within the first two weeks to discuss
                your concerns. We offer a partial refund policy during this
                period to ensure your satisfaction. Our team is dedicated to
                resolving any issues and making sure you receive the support you
                need.
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Still have questions?</h1>
            <p>
              Have more questions or ready to enroll? Contact us today to learn
              more about how we can help you achieve your academic goals.
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
