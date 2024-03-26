import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {

    const formIntialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [ formDetails, setFormDetails ] = useState(formIntialDetails);
    const [ buttonText, setButtonText ] = useState('Send');
    const [ status, setStatus ] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [ category ]: value
        })
    }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setButtonText('Sending...');
    
            // Replace these with your EmailJS parameters
            const serviceId = 'service_nht1wn8';
            const templateId = 'template_oazdks6';
            const userId = 'xefAhud9ZklnGRxAK';
    
            try {
                const updatedFormDetails = {
                    ...formDetails,
                    user_name: formDetails.firstName + ' ' + formDetails.lastName, // Match with {{user_name}} in EmailJS template
                    user_email: formDetails.email, // Match with {{user_email}} in EmailJS template
                    user_phone: formDetails.phone
                };
                // Send email using EmailJS and wait for the response
                await emailjs.send(serviceId, templateId, updatedFormDetails, userId);
                console.log('Email sent successfully');
                setButtonText('Send');
                setFormDetails(formIntialDetails);
                setStatus({ success: true, message: 'Message Sent Successfully' });
                setTimeout(() => {
                    setStatus({});
                }, 3000);
            } catch (error) {
                console.error('Email sending failed:', error);
                setButtonText('Send');
                setStatus({ success: false, message: 'Oops, Something Went Wrong, Try Again Later' });
                setTimeout(() => {
                    setStatus({});
                }, 3000);
            }
        }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={ 6 }>
                        <img src={ contactImg } alt='Contact Us' />
                    </Col>
                    <Col md={ 6 }>
                        <h2>Get Free Consultation</h2>
                        <form onSubmit={ handleSubmit }>
                            <Row>
                               <Col sm={ 6 } className='px-1'>
                                    <input type='text' value={ formDetails.firstName } placeholder='First Name' onChange={ (e) => onFormUpdate('firstName', e.target.value) } />
                               </Col>
                               <Col sm={ 6 } className='px-1'>
                                    <input type='text' value={ formDetails.lastName } placeholder='Last Name' onChange={ (e) => onFormUpdate('lastName', e.target.value) } />
                               </Col>
                               <Col sm={ 6 } className='px-1'>
                                    <input type='email' value={ formDetails.email } placeholder='Email' onChange={ (e) => onFormUpdate('email', e.target.value) } />
                               </Col>
                               <Col sm={ 6 } className='px-1'>
                                    <input type='tel' value={ formDetails.phone } placeholder='Phone No.' onChange={ (e) => onFormUpdate('phone', e.target.value) } />
                               </Col>
                               <Col>
                                    <textarea rows='6' value={ formDetails.message } placeholder='Message' onChange={ (e) => onFormUpdate('message', e.target.value) } />
                                    <button type='submit'><span>{ buttonText }</span></button>
                               </Col>
                               {
                                    status.message && 
                                    <Col>
                                       <p className={ status.success === false ? 'danger' : 'success' }>{ status.message }</p>
                                    </Col>
                               }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}