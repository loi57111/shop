import { useParams } from "react-router-dom";

let Detail = (props) => {
  let { id } = useParams(); //현재 URL의 파라미터를 뽑아줌
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id; // array자료.id == url에입력한번호
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.shoes[id].id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
