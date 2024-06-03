import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit'; 

export default function HomePage() {
    return (
        <MDBContainer className="my-5 section fade-in">
            <MDBRow className="justify-content-start text-container">
                <MDBCol md="12">
                    <MDBTypography tag="span" variant="body" className="mb-0">Hello everyone, My name is</MDBTypography>
                    <br />
                    <MDBTypography tag="h1" variant="display-1" className="my-3"><strong>JASON JAY LUCOT</strong></MDBTypography>
                    <br />
                    <div className="bg-primary-custom p-2 rounded w-50">
                        <MDBTypography tag="h4" variant="body" className="mb-0 text-white text-center">
                            Full Stack Developer
                        </MDBTypography>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}