"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        {/* Hero */}
        <div className="section md:flex-wrap">
          <div className="box w-full md:grow md:w-1/3 lg:w-[30%] justify-between">
            <div className="space-y-2">
              <h1>Welcome</h1>
              <p>
                Welcome to the Journal of Academic Inquiry (JAI), the premier
                platform for scholarly research and academic excellence. Our
                journal celebrates the intellectual achievements of scholars
                from around the world, providing a dedicated space for the
                publication of high-quality research across diverse disciplines.
                <br />
                <br />
                At the Journal of Academic Inquiry, we believe that rigorous
                academic research in the humanities, health sciences, STEM,
                business, law, and visual & performing arts deserves recognition
                and exposure. Our mission is to highlight and share exemplary
                work that contributes to the advancement of knowledge and
                understanding.
                <br />
                <br />
                We invite you to explore our latest issues and consider
                submitting your research for publication. Your work could be
                featured among the finest academic contributions, reviewed and
                appreciated by peers in your field.
              </p>
            </div>
            <p className="mt-8">
              Discover more <a href="/about">about our mission</a>,{" "}
              <a href="/submit">explore submission guidelines</a>, or{" "}
              <a href="/contact">contact us</a> for any inquiries.
            </p>
          </div>
          <div className="box w-full md:grow md:w-1/3 lg:w-1/3 lg:grow relative">
            <h1 className="w-full text-center">Featured Article</h1>
            <Image
              src="/article.png"
              alt="Issue Cover"
              width={850}
              height={1100}
              className="border w-full h-auto hover:brightness-95 hover:cursor-pointer"
              onClick={() => window.open("/test_paper.pdf", "_blank")}
            />
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
                    <b>Health Sciences:</b> Read the latest findings in
                    medicine, public health, and biomedical research.
                  </li>
                  <li>
                    <b>STEM:</b> Dive into innovations in science, technology,
                    engineering, and mathematics.
                  </li>
                  <li>
                    <b>Business:</b> Gain insights into economics, management,
                    and entrepreneurship.
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
            <div className="box w-full md:w-1/2 md:mx-auto lg:w-full lg:mx-0 items-center text-center justify-center px-12">
              <h1>Submit a Paper</h1>
              <p className="mb-4">
                We are currently accepting submissions for our upcoming Spring
                issue. Share your research and contribute to the global academic
                community. Learn more about submission requirements and
                deadlines.
              </p>
              <Link href="/submit">
                <button className="primary-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations */}
      <div className="full-width py-6">
        <h1 className="text-center mb-6">Affiliations</h1>
        <div className="flex gap-[1990px] animate-scroll">
          <div className="flex gap-12">
            <Image
              src="/affiliations/austin.png"
              alt="UT Austin Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/harvard.png"
              alt="Harvard Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/mit.png"
              alt="MIT Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/northeastern.png"
              alt="Northeastern Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/princeton.png"
              alt="Princeton Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/stanford.png"
              alt="Stanford Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/uci.png"
              alt="UCI Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/ucla.png"
              alt="UCLA Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/usc.png"
              alt="USC Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/wharton.png"
              alt="Wharton Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Duplicate the logos for continuous scrolling */}
          <div className="flex gap-12">
            <Image
              src="/affiliations/austin.png"
              alt="UT Austin Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/harvard.png"
              alt="Harvard Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/mit.png"
              alt="MIT Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/northeastern.png"
              alt="Northeastern Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/princeton.png"
              alt="Princeton Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/stanford.png"
              alt="Stanford Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/uci.png"
              alt="UCI Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/ucla.png"
              alt="UCLA Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/usc.png"
              alt="USC Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations/wharton.png"
              alt="Wharton Logo"
              width={200}
              height={200}
              className="w-auto h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Coaching */}
      <div className="container">
        <div className="section">
          <div className="box">
            <h1>Coaching</h1>
            <p>
              Our tailored coaching program is designed to guide students
              through the process of writing a comprehensive academic paper over
              a span of five weeks. This intensive program provides personalized
              support and expert guidance, ensuring that each participant
              develops the skills necessary to produce high-quality research
              that meets the rigorous standards of the Journal of Academic
              Inquiry. From selecting a compelling topic to conducting thorough
              research and refining the final draft, our coaches are committed
              to helping students achieve academic excellence and gain
              confidence in their scholarly writing abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
