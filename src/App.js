// Making component
// Make function and add code which is needed to repeat
// To use state which was declared in the App function, props was used.
// Added variable with name of state which is desired to use in the component (shoes)
// => (shoes = {shoes})
// use data from props => props.nameOfState : props.shoes

// ============================ Main Code =================================================//
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
// import 이미지 from "./bg.png"; //Image path
import data from "./data.js";

// ============================ App function =================================================//
function App() {
  let [shoes] = useState(data);

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
          {/* Used map to loop => shoes have 3 objects so loop will be done 3 times.*/}
          {shoes.map(function (a, i) {
            console.log(a);
            return <Card shoes={shoes} i={i} />; //Declared shoes for props
          })}
        </div>
      </div>
    </div>
  );
}

/// ============================ Components ==========================================//
let Card = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg" // To binding 3 different pictures
        }
        width="80%"
      />
      {/* Added i props to get count number */}
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
};

export default App;
