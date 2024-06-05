import React, { useState } from 'react';
import { MDBContainer, MDBTypography, MDBRow, MDBCol, MDBInput, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_6cjese8', 
            'template_5js9hug',
            formData,
            'WLu-B-D7hOgyAqSKw' 
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                swal('Message sent successfully!', { icon: 'success' });
            },
            (err) => {
                console.error('FAILED...', err);
                swal('Failed to send message. Please try again.', { icon: 'error' });
            }
        );
    };

    return (
        <MDBContainer className="my-5 section">
            <MDBRow>
                <MDBCol sm="12" md="6" className=" mb-5">
                    <MDBTypography tag="div" variant="h4" className="display-5 left-column">
                        Feel free to ask me about anything.
                    </MDBTypography>
                </MDBCol>
                <MDBCol sm="12" md="6" className="right-column">
                    <MDBCard className="contact-card">
                        <MDBCardBody>
                            <MDBCardTitle className="text-center display-5 fw-bold mb-5">
                                Contact Me
                            </MDBCardTitle>
                            <MDBValidation
                                noValidate
                                id="form"
                                className="text-center d-flex flex-column w-75 mx-auto"
                                onSubmit={handleSubmit}
                            >
                                <MDBValidationItem invalid feedback="Please provide your name.">
                                    <MDBInput
                                        label="Name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        wrapperClass="mb-4"
                                        required
                                        className='w-100'
                                        size="lg"
                                    />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback="Please provide your email.">
                                    <MDBInput
                                        type="email"
                                        label="Email address"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        wrapperClass="mb-4"
                                        required
                                        size="lg"
                                    />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback="Please provide mail subject.">
                                    <MDBInput
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        wrapperClass="mb-4"
                                        required
                                        size="lg"
                                    />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback="Please provide a message text.">
                                    <MDBTextArea
                                        wrapperClass="mb-4"
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        size="lg"
                                    />
                                </MDBValidationItem>
                         
                                <MDBBtn type="submit" color="primary" block className="my-4">
                                    Send
                                </MDBBtn>
                            </MDBValidation>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
