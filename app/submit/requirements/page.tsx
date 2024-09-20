import Link from "next/link";

export default function rRequirements() {
  return (
    <div className="page">
      <div className="container">
        {/* Overview */}
        <div className="section">
          <div className="box w-full">
            <h1>Submission Requirements</h1>
            <p>
              Before submitting your research paper to the Journal of Academic
              Inquiry, please carefully review the following guidelines to
              ensure your work meets our standards. Submissions that do not
              follow these requirements will not be considered for publication.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="section sm:flex-row sm:flex-wrap">
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>1. Eligibility for Submission</h1>
            <p>
              We accept submissions from high school students, undergraduates,
              and early-career researchers. Papers must be the original work of
              the submitting author(s). Authors who have previously published
              their work elsewhere are still eligible to submit. However, we may
              contact you to inquire about the other publications where your
              work has been published or submitted for consideration.
            </p>
            <p>
              *Papers may be co-authored, but the submitting author must ensure
              that all contributors are properly credited.
            </p>
          </div>
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>2. Paper Format</h1>
            <ul>
              <li>
                <b>File Format</b>: All papers must be submitted in PDF format.
              </li>
              <li>
                <b>Length</b>: Papers should be between 2,000 and 6,000 words,
                excluding references.
              </li>
              <li>
                <b>Font</b>: Use Times New Roman, 12-point font, and
                double-spaced text.
              </li>
              <li>
                <b>Margins</b>: One-inch margins on all sides.
              </li>
              <li>
                <b>Page Numbers</b>: Include page numbers in the footer of each
                page.
              </li>
            </ul>
          </div>
          <div className="box w-full mx-0 md:mx-12">
            <h1>3. Structure and Content</h1>
            <p className="mb-4">
              Your submission must include the following sections:
            </p>
            <div className="box">
              <h2>Title Page</h2>
              <p>
                Your title page should clearly present the following
                information:
              </p>
              <ul>
                <li>
                  <b>Paper Title</b>: Choose a concise and descriptive title
                  that reflects the core focus of your research.
                </li>
                <li>
                  <b>Author Name</b>: Include your first and last name as the
                  primary author. Ensure that all other contributors are
                  properly credited.
                </li>
                <li>
                  <b>School or Academic Institution</b>: Specify the name of
                  your high school, college, or university.
                </li>
                <li>
                  <b>Contact Information</b>: Provide your email address so that
                  we can reach you regarding your submission.
                </li>
              </ul>
              <p>
                The title page should be formatted with centered text, and all
                information should be presented in a professional and legible
                font, such as Times New Roman, 12-point.
              </p>
            </div>
            <div className="box">
              <h2>Abstract</h2>
              <p>
                The abstract is a critical component of your paper, offering a
                brief overview of your research:
              </p>
              <ul>
                <li>
                  <b>Length</b>: 150–250 words.
                </li>
                <li>
                  <b>Content</b>: Summarize the following elements:
                  <ul>
                    <li>
                      The <b>research question</b> you investigated.
                    </li>
                    <li>
                      The <b>methods</b> you used to conduct the study.
                    </li>
                    <li>
                      The <b>key results</b> of your research.
                    </li>
                    <li>
                      A concise <b>conclusion</b> of your findings and their
                      implications.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                The abstract should provide enough information for readers to
                understand the scope of your research without needing to read
                the entire paper.
              </p>
            </div>
            <div className="box">
              <h2>Introduction</h2>
              <p>The introduction should set the stage for your research:</p>
              <ul>
                <li>
                  <b>Research Question</b>: Clearly define the central research
                  question your study seeks to answer.
                </li>
                <li>
                  <b>Background Information</b>: Provide context by discussing
                  relevant literature, prior studies, or important concepts that
                  relate to your research topic.
                </li>
                <li>
                  <b>Significance</b>: Explain why your research is important,
                  highlighting the potential contribution to your field or the
                  broader academic community.
                </li>
              </ul>
              <p>
                This section should guide the reader through the rationale for
                your study and lead naturally to your methodology.
              </p>
            </div>
            <div className="box">
              <h2>Methods</h2>
              <p>
                The methods section should detail how you conducted your
                research:
              </p>
              <ul>
                <li>
                  <b>Study Design</b>: Describe the approach you took to
                  investigate your research question (e.g., experimental,
                  observational, qualitative, quantitative).
                </li>
                <li>
                  <b>Procedures</b>: Explain the specific steps you followed
                  during the research process.
                </li>
                <li>
                  <b>Data Collection</b>: Outline how you gathered your data,
                  whether through surveys, experiments, or other means.
                </li>
                <li>
                  <b>Tools and Materials</b>: Mention any tools, software, or
                  materials you used.
                </li>
                <li>
                  <b>Participants (if applicable)</b>: If your study involved
                  human subjects, describe the participants, how they were
                  selected, and any ethical considerations.
                </li>
              </ul>
              <p>
                The methods section should be detailed enough that another
                researcher could replicate your study.
              </p>
            </div>
            <div className="box">
              <h2>Results</h2>
              <p>
                In the results section, present the findings of your research:
              </p>
              <ul>
                <li>
                  <b>Data Presentation</b>: Use tables, graphs, or figures to
                  visually present your data, if applicable. Be sure to label
                  each clearly and reference them in the text.
                </li>
                <li>
                  <b>Text Explanation</b>: Describe the results of your research
                  without interpreting them. Focus on the facts and avoid
                  speculation.
                </li>
                <li>
                  <b>Significant Findings</b>: Highlight any statistically
                  significant results, correlations, or patterns that emerged
                  from the data.
                </li>
              </ul>
              <p>
                Be concise but thorough, ensuring that readers can clearly
                understand what your research uncovered.
              </p>
            </div>
            <div className="box">
              <h2>Discussion/Conclusion</h2>
              <p>
                This section allows you to analyze and interpret your results:
              </p>
              <ul>
                <li>
                  <b>Interpretation</b>: Explain what your results mean in the
                  context of your research question. Are they consistent with
                  your expectations or prior research?
                </li>
                <li>
                  <b>Implications</b>: Discuss the broader implications of your
                  findings. How do they contribute to the field or the academic
                  community?
                </li>
                <li>
                  <b>Limitations</b>: Acknowledge any limitations or weaknesses
                  in your study and suggest areas for future research.
                </li>
                <li>
                  <b>Conclusion</b>: Summarize the main findings and the key
                  takeaways from your research.
                </li>
              </ul>
              <p>
                The discussion should connect your results back to the
                introduction and provide closure to the paper.
              </p>
            </div>
            <div className="box">
              <h2>References</h2>
              <p>
                In the references section, list all the sources you cited in
                your paper:
              </p>
              <ul>
                <li>
                  <b>Citation Style</b>: Use either APA or MLA citation format
                  consistently throughout your paper.
                </li>
                <li>
                  <b>In-Text Citations</b>: Ensure all sources referenced in the
                  text are also included in the references section.
                </li>
                <li>
                  <b>Formatting</b>: Each reference should be formatted
                  according to the chosen style guide. For example, in APA
                  format, a journal article might look like this:
                  <ul>
                    <li>
                      <i>
                        Author, A. A. (Year). Title of the article. Title of the
                        Journal, volume number(issue number), page range.
                      </i>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                Make sure all references are accurate and complete, as this
                reflects the academic rigor of your paper.
              </p>
            </div>
          </div>
          <div className="box w-full">
            <h1>4. Originality and Plagiarism</h1>
            <p>
              The Journal of Academic Inquiry takes originality seriously.
              Submissions must be the author’s own work and free from
              plagiarism. Papers that are found to contain plagiarized material
              will be rejected. We use plagiarism detection software to verify
              the authenticity of each submission.
            </p>
          </div>
          <div className="box w-full">
            <h1>5. Review Process</h1>
            <p>
              All submitted papers undergo a rigorous peer-review process, which
              evaluates the research&apos;s originality, methodology, and
              academic contribution. Only approximately 10% of submissions are
              accepted for publication. Please note that submission does not
              guarantee publication. Feedback may be provided on a case-by-case
              basis, depending on the reviewers&apos; assessments.
            </p>
          </div>
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>6. Resubmission Policy</h1>
            <p>
              If your paper is not accepted, you may revise and resubmit it for
              future consideration. However, resubmissions must address the
              feedback provided by the reviewers and meet all the required
              standards for publication.
            </p>
          </div>
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>7. Ethical Considerations</h1>
            <p>
              Authors must ensure that their research adheres to ethical
              standards. Any studies involving human participants must have been
              conducted in accordance with ethical guidelines, including
              obtaining informed consent.
            </p>
          </div>
          <div className="box w-full sm:grow sm:w-[40%]">
            <h1>8. How to Submit</h1>
            <p>
              Once your paper is ready and meets all the submission
              requirements, please visit our{" "}
              <a href="/submit">submission page</a> to upload your paper and
              complete the submission form.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="section">
          <div className="box w-full sm:w-auto mx-auto">
            <h1>Still have questions?</h1>
            <p>
              If you have any questions about the submission process or
              requirements, please feel free to contact us through the link
              below.
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
