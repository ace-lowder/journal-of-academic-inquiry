const Coaching: React.FC = () => {
  return (
    <div className="page">
      <div className="container">
        {/* Call to Action */}
        <div className="section">
          <div className="box md:w-1/2 mx-auto">
            <h1>Personalized Coaching for Academic Success</h1>
            <p>
              Transform your research into a high-quality academic paper in just
              five weeks.
            </p>
            <button className="primary-button">Enroll Now</button>
          </div>
        </div>

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
              <h1>Step 1: Initial Consultation</h1>
              <p>
                A 30-minute session to understand your research goals and needs.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 2: Research Planning</h1>
              <p>
                Guidance on choosing a compelling topic and outlining your
                paper.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 3: Writing and Feedback</h1>
              <p>
                Weekly sessions to review drafts, provide feedback, and address
                challenges.
              </p>
            </div>
            <div className="box w-full sm:grow sm:w-[40%]">
              <h1>Step 4: Final Review</h1>
              <p>
                Detailed review and polishing of your final draft to ensure it
                meets academic standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="full-width px-8">
        <div className="container">
          <h1 className="w-full text-center">Testimonials</h1>
          <div className="section">
            <div className="box">
              <h1>Name</h1>
              <p>
                This is a placeholder testimonial review, where successful
                students will write about their experience with the program.
              </p>
            </div>
            <div className="box">
              <h1>Name</h1>
              <p>
                This is a placeholder testimonial review, where successful
                students will write about their experience with the program.
              </p>
            </div>
            <div className="box">
              <h1>Name</h1>
              <p>
                This is a placeholder testimonial review, where successful
                students will write about their experience with the program.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* FAQs */}
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
                that each participant’s pace may vary. If you need more time to
                complete your paper, we offer the option to extend the coaching
                period at an additional cost. Our goal is to support you in
                producing the best possible work, and we are committed to
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
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Still have questions?</h1>
            <p>
              Have more questions or ready to enroll? Contact us today to learn
              more about how we can help you achieve your academic goals.
            </p>
            <button className="primary-button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
