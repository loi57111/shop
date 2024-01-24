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
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
// ============================ App function =================================================//
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      {/* ==================== Routes Section ======================== */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* Used map to loop => shoes have 3 objects so loop will be done 3 times.*/}
                  {shoes.map(function (a, i) {
                    return <Card shoes={shoes} i={i} />; //Declared shoes for props
                  })}
                </div>
              </div>
            </div>
          }
        />
        {/* url 파라미터 detail/아무거나 => element 보여주세요*/}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>

        <Route path="event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

/// ============================ Components ==========================================//
let Event = () => {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
};

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
