import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const [ _, setIndex ] = useState(1);
    const toRotate = [ "Web Development", "E-Commerce Solutions", "CRM" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    const handleInquireNowClick = () => {
      const section = document.getElementById('connect');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={ 12 } md={ 6 } xl={ 7 }>
                    <TrackVisibility once>
                        {({ isVisible }) => 
                          <div className={ `animate__animated ${isVisible ? 'animate__slideInLeft' : 'animate__hidden'}` }>
                            <span className='tagline'>Welcome To ByteForge Solutions</span>
                            <h1>{ `We Provide ` }<span className='wrap'>{ text }</span></h1>
                            <p>At <b>ByteForge Solutions</b>, we craft digital innovations tailored to propel your business forward. From dynamic e-commerce platforms to seamless CRM integration, we blend expertise with cutting-edge tech to drive growth and enhance customer experiences. <b>Let's forge your path to digital success together</b></p>
                            <button onClick={ handleInquireNowClick }>Inquire Now <ArrowRightCircle size={ 25 } /></button>
                          </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={ 12 } md={ 6 } xl={ 5 }>
                        <img src={ headerImg } alt='header-img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

