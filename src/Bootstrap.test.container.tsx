import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Bootstrap = () => {
  return (
    <>
      <nav>
        <Container fluid>
          <Row className="p-3">
            <Col md={6} lg={4} sm={12} className="bg-primary ">
              React TS
            </Col>
            <Col md={6} lg={4} sm={12} className="bg-danger p-3 ">
              React TS
            </Col>
            <Col md={6} lg={4} sm={12} className="bg-success">
              React TS
            </Col>
          </Row>
          <Row>
            <Col>React TS</Col>
            <Col>React TS</Col>
          </Row>
        </Container>
      </nav>
    </>
  );
};

export default Bootstrap;
