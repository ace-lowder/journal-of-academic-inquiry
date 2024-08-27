import Image from 'next/image';

const Home: React.FC = () => (
  <div className="page">
    <div className="container">
      {/* Hero */}
      <div className="section gap-4 md:flex-wrap lg:gap-8">
        <div className="box w-full md:grow md:w-1/3 lg:w-[30%] justify-between">
          <div className="space-y-2">
            <h1>Welcome</h1>
            <p>
              Welcome to the Journal of Academic Inquiry (JAI), the premier
              platform for scholarly research and academic excellence. Our
              journal celebrates the intellectual achievements of scholars from
              around the world, providing a dedicated space for the publication
              of high-quality research across diverse disciplines.
              <br />
              <br />
              At the Journal of Academic Inquiry, we believe that rigorous
              academic research in the humanities, health sciences, STEM,
              business, law, and visual & performing arts deserves recognition
              and exposure. Our mission is to highlight and share exemplary work
              that contributes to the advancement of knowledge and
              understanding.
              <br />
              <br />
              We invite you to explore our latest issues and consider submitting
              your research for publication. Your work could be featured among
              the finest academic contributions, reviewed and appreciated by
              peers in your field.
            </p>
          </div>
          <p className="mt-8">
            Discover more <a href="/about">about our mission</a>,{' '}
            <a href="/submit">explore submission guidelines</a>, or{' '}
            <a href="/contact">contact us</a> for any inquiries.
          </p>
        </div>
        <div className="box w-full md:grow md:w-1/3 lg:w-1/3 lg:grow relative">
          <Image
            src="/issue-cover.png"
            alt="Issue Cover"
            layout="responsive"
            width={8.5}
            height={11}
            className="border mb-4"
          />
          <button className="primary-button">Subscribe</button>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[30%]">
          <div className="grow box w-full flex flex-col justify-between">
            <div className="space-y-2">
              <h1>Areas of Academic Focus</h1>
              <ul>
                <li>
                  <b>Humanities:</b> Explore insightful analyses and
                  perspectives on history, philosophy, and culture.
                </li>
                <li>
                  Health Sciences: Read the latest findings in medicine, public
                  health, and biomedical research.
                </li>
                <li>
                  <b>STEM:</b> Dive into innovations in science, technology,
                  engineering, and mathematics.
                </li>
                <li>
                  <b>Business:</b> Gain insights into economics, management, and
                  entrepreneurship.
                </li>
                <li>
                  <b>Law:</b> Review scholarly discussions on legal theories,
                  case studies, and judicial reviews.
                </li>
                <li>
                  <b>Visual & Performing Arts:</b> Appreciate academic studies
                  in the arts, including visual art, music, and theater.
                </li>
              </ul>
            </div>
            <a className="w-full text-center">Read More</a>
          </div>
          <div className="box w-full items-center text-center justify-center px-12">
            <h1>Submit a Paper</h1>
            <p className="mb-4">
              We are currently accepting submissions for our upcoming issues.
              Share your research and contribute to the global academic
              community. Learn more about submission requirements and deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Affiliations */}
    <div className="full-width h-40 py-4 bg-gray-100 flex flex-col gap-2">
      <h1 className="text-center">Affiliations</h1>
      <div className="grow flex items-center justify-evenly">
        <p>USC</p>
        <p>Princeton</p>
        <p>UCLA</p>
        <p>Wharton</p>
        <p>UCI</p>
        <p>Stanford</p>
        <p>Harvard</p>
        <p>MIT</p>
      </div>
    </div>

    {/* Blank */}
    <div className="container box h-48">
      <h1>Featured Articles</h1>
      <h1>Testimonials</h1>
      <h1>Past Issues</h1>
      <h1>Coaching</h1>
    </div>
  </div>
);

export default Home;
