import Image from "next/image";
import Link from "next/link";

export default function Subscribe() {
  return (
    <div className="page">
      {/* Subscribe */}
      <div className="full-width px-8 lg:px-0 text-center items-center">
        <div className="container">
          <div className="section items-center justify-center md:gap-12">
            <Image
              src="/issue.png"
              alt="Latest Issue"
              width={200}
              height={200}
              className="w-1/6 min-w-[12.5rem] h-auto"
            />
            <div className="box md:w-1/2 lg:w-1/3 h-fit">
              <h1>Stay Informed with the Latest in Scholarly Research</h1>
              <p>
                Request a subscription for <b>$49.99</b> a month to access the
                most recent issue and groundbreaking research from leading
                academics.
              </p>

              <Link href="/contact">
                <button className="primary-button">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* What Who Why*/}
        <div className="section flex-wrap">
          <div className="box w-full md:grow md:w-full">
            <h1>What is the Journal of Academic Inquiry?</h1>
            <p>
              The Journal of Academic Inquiry is a peer-reviewed publication
              that highlights the innovative research of students, providing a
              platform for young scholars to showcase their work. Each issue
              features a variety of topics across disciplines such as STEM,
              humanities, and the arts, making it an engaging resource for
              anyone interested in the next generation of academic thought.
            </p>
            <p>
              While our journal primarily publishes the work of high school
              researchers, the content is designed to be insightful and relevant
              for college students, educators, and anyone interested in
              supporting early academic endeavors.
            </p>
          </div>
          <div className="box w-full md:grow md:w-1/3 justify-between">
            <div className="space-y-2">
              <h1>Who Is the Journal For?</h1>
              <p>
                The Journal of Academic Inquiry is designed for scholars,
                researchers, and students seeking to stay up-to-date with the
                latest trends in their field. Whether you&apos;re an academic
                looking to publish your research, a student conducting
                literature reviews, or a professional seeking to stay informed,
                our journal provides the high-quality, peer-reviewed content you
                need to excel in your work.
              </p>
            </div>
            <div className="mt-6">
              <p>Key Audiences:</p>
              <ul>
                <li>High School Students</li>
                <li>College Students</li>
                <li>Educators and Mentors</li>
                <li>Parents and Academic Enthusiasts</li>
              </ul>
            </div>
          </div>
          <div className="box w-full md:grow md:w-1/3 justify-between">
            <div className="space-y-2">
              <h1>Why Subscribe?</h1>
              <p>
                Subscribing to the Journal of Academic Inquiry ensures you have
                access to the most recent and influential research in your area
                of interest. Our monthly issues feature in-depth articles, case
                studies, and scholarly papers that offer fresh insights and
                innovative solutions to contemporary challenges. By subscribing,
                you&apos;ll gain unlimited access to our latest issues and
                archived content, ensuring you never miss an important
                breakthrough.
              </p>
            </div>
            <div className="mt-6">
              <p>Key benefits:</p>
              <ul>
                <li>Access to the latest issues and all past issues</li>
                <li>High-quality, peer-reviewed research</li>
                <li>Insights across multiple disciplines</li>
                <li>
                  Stay informed with cutting-edge academic trends and
                  discussions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="section">
          <div className="box">
            <h1>Subscription Pricing</h1>
            <p>
              Our subscription service is available for $49 per month, providing
              unlimited access to all new issues and our complete archive of
              past publications. Subscribers will also receive early access to
              special editions and calls for papers.
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
              <h1 className="-mb-1 text-center">Jessica L</h1>
              <h2 className="text-xs mb-2 text-center">
                High School Senior, Future STEM Major
              </h2>
              <p>
                As someone just starting out in academic research, the Journal
                of Academic Inquiry has been an eye-opener for me. It&apos;s
                given me the chance to see what real research looks like and how
                I can contribute. The articles are interesting and accessible,
                even for someone like me who&apos;s just getting into the field.
                Subscribing has helped me understand what it takes to publish my
                own work someday.
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Tom A</h1>
              <h2 className="text-xs mb-2 text-center">
                High School Junior, Aspiring Historian
              </h2>
              <p>
                The Journal of Academic Inquiry has inspired me to dive deeper
                into my love for history. Reading the published articles from
                other students gave me confidence in my own research abilities.
                I especially appreciate the chance to explore papers written by
                people my age who are passionate about learning and discovery.
                The archive has been a great resource for my own projects!
              </p>
            </div>
            <div className="box w-full md:grow md:w-1/4">
              <h1 className="-mb-1 text-center">Emily J</h1>
              <h2 className="text-xs mb-2 text-center">
                First-Year, Aspiring Historian
              </h2>
              <p>
                I&apos;ve always been interested in academic writing, but it
                wasn&apos;t until I subscribed to the Journal of Academic
                Inquiry that I felt like I had a place to start. The journal has
                been a great tool for learning how to structure research papers
                and present my ideas clearly. It&apos;s reassuring to see other
                young students publishing their work, and it motivates me to
                take my own research to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* FAQ */}
        <div className="section">
          <div className="box w-full">
            <h1>Frequently Asked Questions</h1>
            <b>What do I get with my subscription?</b>
            <ul>
              <li>
                With your subscription, you gain access to the latest issue of
                the Journal of Academic Inquiry, as well as our full archive of
                past publications. This includes research papers, project
                highlights, and more—all created by emerging researchers.
              </li>
            </ul>
            <b>Can I cancel my subscription at any time? </b>
            <ul>
              <li>
                Yes, you can cancel at any time. Once canceled, you will lose
                immediate access to both current and past issues. If you wish to
                rejoin, you can simply subscribe again and regain access to the
                content.
              </li>
            </ul>

            <b>Are there discounts for institutions or students? </b>
            <ul>
              <li>
                Yes, we offer discounted rates for academic institutions, as
                well as for high school students who submit their research for
                publication. Contact us for more information on how to access
                these discounts.
              </li>
            </ul>
            <b>How often are new issues published?</b>
            <ul>
              <li>
                The Journal of Academic Inquiry is published quarterly. You will
                receive four issues per year, each filled with a variety of
                student research and academic projects across disciplines.
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Still have questions?</h1>
            <p>
              Have more questions or ready to subscribe? Contact us today to
              learn more about how to make the most of your subscription.
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
