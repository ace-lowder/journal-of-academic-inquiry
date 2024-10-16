export default function About() {
  return (
    <div className="page">
      <div className="container md:gap-4 lg:gap-8">
        {/* About */}
        <div className="section flex-wrap">
          <div className="box w-full md:grow">
            <h1>About Us</h1>
            <p>
              Welcome to the Journal of Academic Inquiry, a premier platform
              dedicated to advancing scholarly research and intellectual
              exploration. Our mission is to provide a space where scholars,
              researchers, and academics can share their insights and findings
              with the global academic community. We believe that high-quality,
              rigorous research deserves to be recognized and disseminated,
              contributing to the collective knowledge across various fields of
              study.
            </p>
          </div>
          <div className="box w-full md:grow md:w-1/4">
            <h1>Mission Statement</h1>
            <p>
              At the Journal of Academic Inquiry, our mission is to foster a
              culture of academic excellence and innovation. We are committed to
              publishing scholarly work that challenges conventional thinking,
              explores new perspectives, and addresses pressing issues in
              contemporary society. By upholding the highest standards of
              academic integrity and peer review, we ensure that our
              publications are of exceptional quality and significance.
            </p>
          </div>
          <div className="box w-full md:grow md:w-1/2">
            <h1>Focus Areas</h1>
            <p>
              We take pride in the diverse range of disciplines we cover,
              reflecting the broad spectrum of scholarly inquiry. Our journal
              welcomes submissions in the following areas
            </p>
            <ul>
              <li>
                <b>Humanities:</b> Exploring the complexities of human culture,
                history, literature, and philosophy.
              </li>
              <li>
                <b>Health Sciences:</b> Advancing knowledge in medical research,
                public health, and healthcare practices.
              </li>
              <li>
                <b>STEM:</b> Promoting innovation and discovery in science,
                technology, engineering, and mathematics.
              </li>
              <li>
                <b>Business:</b> Analyzing the dynamics of economics,
                management, finance, and entrepreneurship.
              </li>
              <li>
                <b>Law:</b> Examining legal theories, case studies, and the
                impact of legislation on society.
              </li>
              <li>
                <b>Visual & Performing Arts:</b> Appreciating the academic study
                of artistic expression, including visual arts, music, theater,
                and performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
