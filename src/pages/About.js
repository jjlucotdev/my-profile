import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function About() {
    return (
        <MDBContainer className="my-5 section">
            <MDBRow className="my-5">
                <MDBCol md="4" className="text-center">
                    <img
                        src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ovzKr9MwKDVXd1wYsvcwrDd4GUm1RRlDwbheUnFCTCVFU/9k='
                        className='img-thumbnail'
                        alt='...'
                    />
                </MDBCol>
                <MDBCol md="8">
                    <h2 className="mb-4 fw-bold">About Me</h2>
                    <p className="fs-5">
                        I am an aspiring Full Stack Developer with a year of experience in designing, implementing, testing, and maintaining innovative web applications. While I am still on my journey of growth and learning, I am eager to expand my skills and take on new challenges. Proficient in both front-end and back-end technologies, I am adept at collaborating with cross-functional teams to drive project success. With a proven ability to deliver high-quality code, meet tight deadlines, and adapt to evolving technologies, I am committed to continuous improvement and eager to contribute to dynamic projects.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
