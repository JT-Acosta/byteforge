import React from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  const link = 'http://eepurl.com/iG0utM';

  return (
    <Col lg={ 12 }>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={ 12 } md={ 6 } xl={ 5 }>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-email-bx">
                <a href={ link }>
                  <button type="button">Subscribe</button>
                </a>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}