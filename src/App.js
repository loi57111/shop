import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
// import 이미지 from "./bg.png"; //이미지를 바로 넣기위한 이미지 경로
import data from "./data.js";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map(function (a, i) {
            return <Card shoes={shoes[i]} i={i} />;
          })}

          {/* 
          <Card shoes={shoes[0]} i={1}
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} /> */}
        </div>
      </div>
    </div>
  );
}

let Card = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
