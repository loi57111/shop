import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

let Detail = (props) => {
  // ======== 업데이트시 필요한 타이머 스테이트 : true일때 보여준다==========

  let { id } = useParams(); //현재 URL의 파라미터를 뽑아줌
  let [timer, timerState] = useState(true);

  let foundProduct = props.shoes.find(function (x) {
    return x.id == id; // array자료.id == url에입력한번호
  });

  let [inputValue, inputValueState] = useState("");

  // 페이지가 렌더링될때 실행 => 2초후 timerState를 False로 업데이트
  useEffect(() => {
    let a = setTimeout(() => {
      timerState(false);
    }, 2000);

    //useEffect 동작 전에 실행됨
    return () => {
      // 클리너 코드를 씀
      // 기존 데이터 요청 제거
      //기존 타이머는 제거
      clearTimeout(a);
    };
  }, []); // []안에 값이 업데이트 될때(마운트할때) 실행 => 공백일땐 처음 페이지가 렌더링 될때만 실행

  useEffect(() => {
    //입력창에서 입력값 받아오기
    if (isNaN(inputValue) == true) {
      alert("숫자만 입력하세요");
    }
  }, [inputValue]);
  return (
    <div className="container">
      {/* 이벤트창 => 2초후 useState가 false로 바뀜 => 이벤트창은 사라짐 */}
      {timer === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (foundProduct.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => {
              inputValueState(e.target.value);
            }}
          ></input>
          <h4 className="pt-5">{foundProduct.title}</h4>
          <p>{foundProduct.content}</p>
          <p>{foundProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link11">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Detail;
