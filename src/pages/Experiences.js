import React, { useState } from 'react';
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBContainer, MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { GiDiploma } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

export default function Experiences() {
	const [basicActive, setBasicActive] = useState('education');
	const [showTabs, setShowTabs] = useState(false);

	const handleBasicClick = (value) => {
		if (value === basicActive) return;
		setBasicActive(value);
		setShowTabs(false);  
	};

	const toggleShowTabs = () => setShowTabs(!showTabs);

	return (
		<MDBContainer className="section text-left" >
			<MDBRow>
				<MDBCol size="12" className="d-md-none mb-3">
					<MDBBtn onClick={toggleShowTabs} block>
						{showTabs ? 'Hide Sections' : 'Show Sections'}
					</MDBBtn>
					<MDBCollapse show={showTabs}>
						<MDBListGroup light small>
							<MDBTabs>
								<MDBListGroupItem action active={basicActive === 'education'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('education')}>EDUCATION</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'project_experiences'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('project_experiences')}>Project Experiences</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'work_experiences'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('work_experiences')}>Work Experiences</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'certificates'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('certificates')}>Certificates & Awards</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
							</MDBTabs>
						</MDBListGroup>
					</MDBCollapse>
				</MDBCol>

				<MDBCol size="4" className="d-none d-md-block">
					<MDBListGroup light small>
						<MDBTabs>
							<section class="py-5 w-100">
								<MDBListGroupItem action active={basicActive === 'education'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('education')} className='fw-bold fs-5'>Education</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'project_experiences'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('project_experiences')} className='fw-bold fs-5'>Project Experiences</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'work_experiences'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('work_experiences')} className='fw-bold fs-5'>Work Experiences</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
								<MDBListGroupItem action active={basicActive === 'certificates'} noBorders className='px-3'>
									<MDBTabsItem>
										<MDBTabsLink onClick={() => handleBasicClick('certificates')} className='fw-bold fs-5'>Certificates & Awards</MDBTabsLink>
									</MDBTabsItem>
								</MDBListGroupItem>
							</section>
						</MDBTabs>
					</MDBListGroup>
				</MDBCol>

				<MDBCol size="12" md="8">
					<MDBTabsContent className='ps-4 text-white'>
						<MDBTabsPane open={basicActive === 'education'} className="text-left">
							<section class="py-5">
								<ul class="timeline-with-icons">
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<GiDiploma />
										</span>

										<h5 class="fw-bold">Bachelor of Science in Information Technology</h5>
										<p class="mb-2 fw-bold">STI West Negros University | 2019</p>
										<p class="text-white">
											
										</p>
									</li>

									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<PiCertificate />
										</span>
										<h5 class="fw-bold">Zuitt Web Developer Program (Main Course Package)</h5>
										<p class="text-white mb-2 fw-bold">Zuitt Bootcamp | 2024</p>
										<p class="text-white">
											
										</p>
									</li>
								</ul>
							</section>
						</MDBTabsPane>
						<MDBTabsPane open={basicActive === 'project_experiences'} className="text-left">
							<section class="py-5">
								<ul class="timeline-with-icons">
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<MdOutlineLibraryBooks />
										</span>
										<h5 class="fw-bold">Capstone Project</h5>
										<p class="text-white mb-2 fw-bold">STI West Negros University | 2019</p>
										<p class="text-white">
											<ul>
												<li>Received a Certificate of Completion in developing an Electronic Library System integrated with Barcode Technology using PHP.</li>
											</ul>
										</p>
									</li>
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<FaHotel />
										</span>
										<h5 class="fw-bold">On-The-Job Training</h5>
										<p class="text-white mb-2 fw-bold">Tinkertech Inc. | January - March 2019</p>
										<p class="text-white">
											<ul>
												<li>Developed a login interface of a hotel management system, contributed to backend development tasks associated with the login interface.</li>
												<li>Received hands-on training in AngularJS, Node.js, and MongoDB technologies.</li>
											</ul>
										</p>
									</li>
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<GrProjects />
										</span>
										<h5 class="fw-bold">Zuitt Bootcamp Capstone Projects</h5>
										<p class="text-white mb-2 fw-bold">Zuitt Bootcamp | Feb 2024 - June 2024</p>
										<p class="text-white">
											<ul>
												<li><strong>Front-End Development:</strong> Created a personal portfolio using HTML, CSS, and JavaScript, and deployed it to GitHub.</li>
												<li><strong>Back-End Development:</strong> Developed an API for an e-commerce demo app using Node.js, Express.js, and MongoDB. Used Postman for testing, worked in a 2-person team with Git for version control.</li>
												<li><strong>Full-Stack Development:</strong> Built user interfaces for both client and admin sides of an e-commerce demo app using React.js, integrating the previously developed API.</li>
											</ul>
										</p>
									</li>
								</ul>
							</section>
						</MDBTabsPane>
						<MDBTabsPane open={basicActive === 'work_experiences'} className="text-left">
							<section class="py-5">
								<ul class="timeline-with-icons">
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<GiDiploma />
										</span>

										<h5 class="fw-bold">Junior Programmer</h5>
										<p class="text-white mb-2 fw-bold">GCC group of companies | Oct. 2019 - Oct. 2020</p>
										<p class="text-white">
											<ul>
												<li>Worked with senior developers on reworking the company's web application portal using the CodeIgniter framework. This project included various modules such as HRIS (Human Resource Information System), ticketing system, user management, e-forms, assets and inventory system, and time management system.</li>
												<li>Utilized Git to track code changes.</li>
												<li>Used MySQL queries to interact with the database.</li>
												<li>Participated in the planning phase of the company's website rework using WordPress and Elementor.</li>
												<li>Assisted with the maintenance and troubleshooting of another company's website (admin side) and existing websites and applications to ensure they run smoothly.</li>
											</ul>
										</p>
									</li>

									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<PiCertificate />
										</span>
										<h5 class="fw-bold">Café Manager</h5>
										<p class="text-white mb-2 fw-bold">Four J’s Cafe | Mar. 2021 - Feb. 2024</p>
										<p class="text-white">
											<ul>
												<li>Opened and closed the cafe every day, keeping it safe and ready.</li>
												<li>Kept track of stock and ordered more when needed.</li>
												<li>Managed the cash register, keeping track with sales.</li>
												<li>Helped serve customers during busy times, keeping service high.</li>
											</ul>
										</p>
									</li>
								</ul>
							</section>
						</MDBTabsPane>
						<MDBTabsPane open={basicActive === 'certificates'} className="text-left">
							<section class="py-5">
								<ul class="timeline-with-icons">
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<PiCertificate />
										</span>
										<h5 class="fw-bold">ICT Olympics Java Competition Champion</h5>
										<p class="text-white mb-2 fw-bold">Issued by Programmers Guild · Oct 2018</p>
										<p class="text-white">Associated with STI West Negros University</p>
										<p class="text-white">
											Taking part in a Java programming competition, I showcased my coding skills, problem-solving abilities, and creativity, devising innovative solutions using the Java programming language.
										</p>
									</li>
									<li class="timeline-item mb-5">
										<span class="timeline-icon">
											<PiCertificate />
										</span>
										<h5 class="fw-bold">Java Programmer Speaker</h5>
										<p class="text-white mb-2 fw-bold">Issued by Programmers Guild · Aug 2018</p>
										<p class="text-white">Associated with STI West Negros University</p>
										<p class="text-white">
											Shared knowledge about the basics of Java programming.
										</p>
									</li>
								</ul>
							</section>
						</MDBTabsPane>
					</MDBTabsContent>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

