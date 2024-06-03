import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit'; 

export default function HomePage() {
    return (
        <MDBContainer className="mt-5  bubble">
            <MDBRow className="justify-content-start">
                <MDBCol md="6">
                    <MDBTypography tag="span" variant="body" className="mb-0">Hello everyone, My name is</MDBTypography>
                    <br />
                    <MDBTypography tag="h1" variant="display-1" className="my-3"><strong>JASON JAY LUCOT</strong></MDBTypography>
                    <br />
                    <div className="bg-primary p-2 rounded w-50" style={{ 'background-color': '#00b4d8ff' }}>
                        <MDBTypography tag="h4" variant="body" className="mb-0 text-white text-center">
                            Full Stack Developer
                        </MDBTypography>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
