import Link from "next/link";

export default function Terms() {
  return (
    <div className="page">
      <div className="container">
        {/* Overview */}
        <div className="section">
          <div className="box w-full">
            <h1>Terms and Conditions</h1>
            <p>
              Welcome to the Journal of Academic Inquiry. By accessing or using
              our website, you agree to comply with and be bound by the
              following terms and conditions. Please read these terms carefully,
              as they govern your use of our site and services.
            </p>
          </div>
        </div>

        {/* Acceptance */}
        <div className="section">
          <div className="box w-full">
            <h1>1. Acceptance of Terms</h1>
            <p>
              By using this website, you acknowledge that you have read,
              understood, and agree to be bound by these terms and conditions.
              If you do not agree to these terms, please do not use the website
              or access its services.
            </p>
          </div>
        </div>

        {/* Changes */}
        <div className="section">
          <div className="box w-full">
            <h1>2. Changes to Terms</h1>
            <p>
              We reserve the right to modify or update these terms at any time
              without prior notice. Changes will be effective immediately upon
              posting on the website. Your continued use of the website after
              such changes signifies your acceptance of the revised terms.
            </p>
          </div>
        </div>

        {/* Use */}
        <div className="section">
          <div className="box w-full">
            <h1>3. Use of Website</h1>
            <p>
              You agree to use the Journal of Academic Inquiry website for
              lawful purposes only. You are prohibited from using the site to:
            </p>
            <ul>
              <li>
                Post or transmit any unlawful, fraudulent, defamatory, obscene,
                or harmful content.
              </li>
              <li>
                Interfere with or disrupt the operation of the website, servers,
                or networks.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website
                or its systems.
              </li>
              <li>Violate any applicable laws or regulations.</li>
            </ul>
            <p>
              We reserve the right to terminate or restrict your access to the
              website if we believe you are violating these terms or engaging in
              unlawful behavior.
            </p>
          </div>
        </div>

        {/* IP */}
        <div className="section">
          <div className="box w-full">
            <h1>4. Intellectual Property</h1>
            <p>
              All content on the Journal of Academic Inquiry website, including
              but not limited to text, graphics, logos, images, and software, is
              the property of the Journal of Academic Inquiry or its content
              providers and is protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative
              works, publicly display, or otherwise use any of the content on
              this website without our prior written consent, except for
              personal, non-commercial use.
            </p>
          </div>
        </div>

        {/* Submissions */}
        <div className="section">
          <div className="box w-full">
            <h1>5. Submissions</h1>
            <p>
              By submitting research papers or other content to the Journal of
              Academic Inquiry, you grant us a non-exclusive, worldwide license
              to publish, distribute, and display your submission in any format.
              You represent that your submission is original and does not
              infringe on the intellectual property rights of others.
            </p>
            <p>
              You retain full ownership of your work and may withdraw it from
              consideration at any time prior to publication.
            </p>
          </div>
        </div>

        {/* Sub */}
        <div className="section">
          <div className="box w-full">
            <h1>6. Subscription and Payments</h1>
            <p>
              If you choose to subscribe to the Journal of Academic Inquiry or
              use any of our paid services, you agree to provide accurate
              billing and payment information. All subscription fees are
              non-refundable, unless otherwise stated.
            </p>
            <p>
              We reserve the right to modify subscription fees at any time. Any
              fee changes will take effect at the start of the next billing
              cycle, and you will be notified in advance.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="section">
          <div className="box w-full">
            <h1>7. Third-Party Links</h1>
            <p>
              Our website may contain links to third-party websites or services
              that are not owned or controlled by the Journal of Academic
              Inquiry. We are not responsible for the content, privacy policies,
              or practices of any third-party websites.
            </p>
            <p>
              By accessing a third-party website, you acknowledge that you are
              doing so at your own risk, and you agree that we will not be
              liable for any damages or loss resulting from your use of
              third-party services.
            </p>
          </div>
        </div>

        {/* Liability */}
        <div className="section">
          <div className="box w-full">
            <h1>8. Limitation of Liability</h1>
            <p>
              The Journal of Academic Inquiry strives to provide accurate and
              high-quality content. However, we make no warranties or
              representations about the accuracy, reliability, or completeness
              of the content on this website.
            </p>
            <p>
              In no event will the Journal of Academic Inquiry, its directors,
              officers, employees, or affiliates be liable for any direct,
              indirect, incidental, or consequential damages arising from your
              use of the website, even if we have been advised of the
              possibility of such damages.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="section">
          <div className="box w-full">
            <h1>9. Disclaimer</h1>
            <p>
              The content on the Journal of Academic Inquiry website is provided
              for informational purposes only and should not be considered
              professional or academic advice. We do not guarantee that the
              website will be error-free, uninterrupted, or free from viruses or
              harmful components.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="section">
          <div className="box w-full">
            <h1>10. Termination</h1>
            <p>
              We reserve the right to terminate or suspend your access to the
              Journal of Academic Inquiry website at our sole discretion,
              without prior notice, if you violate these terms or engage in any
              unlawful or prohibited activity.
            </p>
          </div>
        </div>

        {/* Law */}
        <div className="section">
          <div className="box w-full">
            <h1>11. Governing Law</h1>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which the Journal
              of Academic Inquiry operates. Any disputes arising from the use of
              this website will be subject to the exclusive jurisdiction of the
              courts in that jurisdiction.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Contact Us</h1>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us through the link below.
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
