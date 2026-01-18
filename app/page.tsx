import LeafIcon from '@/components/icons/Leaf'
import Image from 'next/image';


export default function Home() {
	return (
		<main>
			<section className="section">
				<div className="section-inner container">
					<h1 className="section-heading">Oanh Nguyen</h1>
					<div className="section-body flex flex-col items-center">
						<p>
							I'm a Software Engineering Research Specialist at Emory University, School of Medicine in the 
              Department of Radiology and Imaging Sciences. Based in Atlanta, I build web applications in the scope
              of our research projects which serve both patients and clinicians. From enhancing clinicians workflows to 
              improving patient comprehension, I leverage and integrate AI/LLM capabilities in web platforms to create 
              impactful solutions for the greater healthcare community. 
						</p>
						<Image src="/IMG_5354.jpeg" alt="Oanh's Profile Picture" width={260} height={200} style={{ borderRadius: '50%'}} />
					</div>
				</div>
			</section>

			<section id="projects" className="section">
				<div className="section-inner">
					<h2 className="section-heading">Projects</h2>
          {/* Project 1 */}
								<div className="card">
									<h3 style={{ marginTop: 0, fontFamily: 'var(--heading-font)' }}><LeafIcon className="nav-link-icon" /> GuideBot &amp; RadExtract</h3>
									<p>Two AI-powered tools for radiology residents and attendings: GuideBot is your radiology assistant providing you with procedural
                    guidance for steps and equipments. RadExtract streamlines the clinical research workflow by utilizing LLM-powered schema generation
                    and feature extraction on de-identified radiology reports to build cohorts for future research studies.
                  </p>
								</div>
          {/* Project 2 */}
					<div className="card">
						<h3 style={{ marginTop: 0, fontFamily: 'var(--heading-font)' }}><LeafIcon className="nav-link-icon" /> Resident Dashboard</h3>
						<p>A resident dashboard used by radiology residents and attendings to track their progress and performance, allowing historial and 
              cohort comparison to evaluate growth and identify areas for improvement. Utilizing ETL pipelines to extract EPA and RPR scores from 
              20000+ reports and supporting 120+ radiology residents, attendings, and staff.
            </p>
					</div>
          {/* Project 3 */}
					<div className="card">
						<h3 style={{ marginTop: 0, fontFamily: 'var(--heading-font)' }}><LeafIcon className="nav-link-icon" /> SimplyRadiology</h3>
						<p>A patient-facing platform that provides interactive tools to make patient care more comprehensible and engaging. Notable features include
              clicklable medical terms for accessible definitions, LLM-generated summaries for simplified explanations of complex radiology reports, and 
              an AI text-to-speech reader for increased audiovisual accessibility.
            </p>
					</div>
				</div>
			</section>

			<section id="about" className="section">
				<div className="section-inner">
					<h2 className="section-heading">About</h2>
					<div className="section-body">
						<p>
							Graduated December 2024 with a B.S. in Neuroscience and Behavioral Biology and Computer Science from Emory University.
						</p>
            <p>
							There is nothing more important in life than human connection, especially at the intersection of technology and healthcare. Behind the scenes,
              I develop AI-powered applications that enhance patient care and clinician workflows. In the real world, I listen to patient and clinician stories– their sentiments,
              challenges, and triumphs– and let those narratives guide my work.
						</p>
					</div>
				</div>
			</section>

			<section id="contact" className="section">
				<div className="section-inner">
					<h2 className="section-heading">Contact</h2>
					<div className="section-body">
            <p>Phone Number: <a href="tel:951-575-8237">951-575-8237</a></p>
						<p>Email: <a href="mailto:oanh.ocn679@gmail.com">oanh.ocn679@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/oanh-nguyen-4b575324a/">Oanh Nguyen</a></p>
            <p>GitHub: <a href="https://github.com/ocnguye">GitHub Projects</a></p>
					</div>
				</div>
			</section>
		</main>
	)
}
