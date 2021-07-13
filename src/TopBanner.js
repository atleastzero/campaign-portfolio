import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import EmailBox from "./EmailBox"

import "./TopBanner.css"

import hedgehog from "./hedgehog.png"

function TopBanner() {
  return (
    <Jumbotron fluid className="grass">
      <Row>
        <Col className="text-center">
          <img
            alt="at least logo"
            src={hedgehog}
            width="500"
            height="500"
            className="d-inline-block"
          />{' '}
        </Col>
        <Col>
          <EmailBox />
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default TopBanner