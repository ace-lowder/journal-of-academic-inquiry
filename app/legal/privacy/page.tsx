import Link from "next/link";

export default function Privacy() {
  return (
    <div className="page">
      <div className="container">
        {/* Overview */}
        <div className="section">
          <div className="box w-full">
            <h1>Privacy Policy</h1>
            <p>
              At the Journal of Academic Inquiry, we are committed to protecting
              your privacy and ensuring that your personal information is
              handled responsibly and securely. This Privacy Policy outlines the
              types of information we collect, how we use and store that
              information, and your rights regarding your data.
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="section">
          <div className="box w-full">
            <h1>Information We Collect</h1>
            <p>
              We may collect the following types of personal information when
              you interact with our website or services:
            </p>
            <ul>
              <li>
                <b>Contact Information</b>: This includes your name, email
                address, phone number, and school name when you submit a paper
                or contact us.
              </li>
              <li>
                <b>Submission Details</b>: If you submit a research paper, we
                collect details about your submission, such as the paper title,
                subject area, and a summary of your research.
              </li>
              <li>
                <b>Payment Information</b>: For subscription or service
                payments, we collect billing information. All payment details
                are processed securely through third-party payment gateways and
                are not stored on our servers.
              </li>
              <li>
                <b>Technical Information</b>: We collect data such as IP
                addresses, browser types, and access times to help improve the
                user experience on our website.
              </li>
            </ul>
          </div>
        </div>

        {/* Use Info */}
        <div className="section">
          <div className="box w-full">
            <h1>How We Use Your Information</h1>
            <p>
              We use the information collected to provide our services and
              improve your experience on our website. Specific uses include:
            </p>
            <ul>
              <li>
                Processing paper submissions and communicating with authors.
              </li>
              <li>
                Responding to inquiries sent through our contact forms or email.
              </li>
              <li>Processing payments for subscriptions and services.</li>
              <li>
                Analyzing website usage and performance to improve
                functionality.
              </li>
            </ul>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties, except where necessary to provide
              services (e.g., payment processors) or comply with legal
              requirements.
            </p>
          </div>
        </div>

        {/* Protect */}
        <div className="section">
          <div className="box w-full">
            <h1>How We Protect Your Information</h1>
            <p>
              We take the security of your personal information seriously. We
              use industry-standard security measures to protect your data from
              unauthorized access, alteration, or disclosure. However, no method
              of online transmission or storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>
        </div>

        {/* Third-Party */}
        <div className="section">
          <div className="box w-full">
            <h1>Third-Party Services</h1>
            <p>
              We may use third-party services (such as payment processors and
              analytics tools) to help us operate our website and services.
              These third-party providers have their own privacy policies
              regarding the handling of your information. We recommend reviewing
              their privacy policies to understand how they manage your data.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="section">
          <div className="box w-full">
            <h1>Cookies and Tracking Technologies</h1>
            <p>
              The Journal of Academic Inquiry website does not use cookies or
              any other tracking technologies to collect personal data. We do
              not track your browsing activities or store any information on
              your device for tracking purposes.
            </p>
          </div>
        </div>

        {/* Rights */}
        <div className="section">
          <div className="box w-full">
            <h1>Your Rights</h1>
            <p>You have the right to:</p>
            <ul>
              <li>
                <b>Access</b>: Request a copy of the personal information we
                hold about you.
              </li>
              <li>
                <b>Correction</b>: Request corrections to any inaccurate or
                incomplete information.
              </li>
              <li>
                <b>Deletion</b>: Request that we delete your personal data,
                subject to certain legal requirements.
              </li>
              <li>
                <b>Opt-Out</b>: Unsubscribe from communications or object to
                certain types of data processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@jai.com">support@jai.com</a>
            </p>
          </div>
        </div>

        {/* Changes */}
        <div className="section">
          <div className="box w-full">
            <h1>Changes to This Policy</h1>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. If we make significant changes to how we handle your
              personal information, we will notify you by updating the date at
              the top of this page. We encourage you to review this policy
              periodically to stay informed about how we protect your data.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Contact Us</h1>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how your data is handled, please contact us through the link
              below.
            </p>
            <Link href="/contact">
              <button className="secondary-button w-full">Contact Us</button>
            </Link>
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
}
