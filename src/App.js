// Making component
// Make function and add code which is needed to repeat
// To use state which was declared in the App function, props was used.
// Added variable with name of state which is desired to use in the component (shoes)
// => (shoes = {shoes})
// use data from props => props.nameOfState : props.shoes

// ============================ import section =================================================//
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
// ============================ App function =================================================//
function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(1);

  return (
    <div className="App">
      {/* ===================== Nav Section============================== */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          {/* ===================== Nav Link Section============================== */}
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
                navigate("/detail"); //navigate can make it move a page to the given path.
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
              <button
                // When button was pressed, it requets data to server
                onClick={() => {
                  // 로딩중 UI 띄우기
                  setCount(count + 1);

                  if (count < 3) {
                    // 서버에서 데이터 가져오기
                    axios
                      .get(
                        "https://codingapple1.github.io/shop/data" +
                          (count + 1) +
                          ".json"
                      )

                      // get request to url
                      .then((결과) => {
                        console.log(결과.data); // get data and save i
                        // 가져온 데이터를 기존 데이터와 합치기
                        let copy = [...shoes, ...결과.data]; //두 오브젝트어레이 합치기
                        // let copy = shoes.concat(결과.data); // concat 방법으로 두 오브젝트 어레이 합치기
                        setShoes(copy); //shoes 스테이트 업데이트 => 같은 컴포넌트 사용
                        // 로딩중UI 숨기기
                      })
                      .catch(() => {
                        // if the request failed
                        console.log("실패함 ㅅㄱ");
                      });
                  } else {
                    alert("더이상 상품은 없습니다.");
                  }
                }}
              >
                더보기
              </button>
            </div>
          }
        />
        {/* 잘못된 경로는 모두 Page not found 보여주기 */}
        <Route path="*" element={<div>Page not found</div>} />

        {/* url 파라미터 detail/아무거나 => element 보여주세요*/}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>

        {/*================== Nested routes ========================*/}
        <Route path="event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          {/* ============================================== */}
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
      <p>{props.shoes[props.i].price}원</p>
    </div>
  );
};

export default App;
