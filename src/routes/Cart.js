import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

let Cart = () => {
  let state = useSelector((state) => {
    return state; //리턴할 값을 정할수 있다. ex) state.user => user 값만 리턴
  }); // () => {return state}은 () => return state와 같다.

  console.log(state.cart[0]);
  return (
    <div>
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
                  <td>1</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>안녕</td>
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
