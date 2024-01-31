import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { changeStock } from "./../store.js";

let Cart = () => {
  let state = useSelector((state) => {
    // store.js로 요청보내주는 함수
    return state; //리턴할 값을 정할수 있다. ex) state.user => user 값만 리턴
  }); // () => {return state}은 () => return state와 같다.
  let dispatch = useDispatch();
  return (
    <div>
      {console.log(state.cart)}
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>

      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        버튼
      </button>
      {
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(changeStock(state.cart[i].id));
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      }
    </div>
  );
};

export default Cart;
