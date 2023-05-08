import React, { useReducer } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function reducer(state, action) {
  switch (action.action) {
    case "addtodo":
      return [
        ...state,
        { data: action.value, id: new Date().toString(), compleate: false },
      ];
    case "delete":
      return state.filter((data) => data.id !== action.value);
    case "check":
      state.map((data) => {
        if (data.id == action.value) {
          data.compleate = !data.compleate;
          return data;
        }
      });
      return state;
    case "removeall":
      return [];
  }
}

const Todo = () => {
  
  const [todo, dispach] = useReducer(reducer, []);
  function input() {
    event.preventDefault();
    dispach({ action: "addtodo", value: event.target.inputText.value });
    event.target.inputText.value = "";
  }

  return (
    <Container className="my-4">
      <Row>
        <Col>
        <h1>Welcome </h1>
        <Form onSubmit={input}>
          <input type="text" name="inputText" required />
          <Button variant="primary" type="submit">
            Add
          </Button>
          <Button
            variant="danger"
            onClick={() => dispach({ action: "removeall" })}
          >
            RemoveAll
          </Button>
          {console.log(todo)}
        </Form>
        </Col>
      </Row>
      <ul>
        {todo.map((e) => (
          <p key={e.id}>
            <span
              style={
                e.compleate
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            >
              {e.data}
            </span>
            <Button
              variant="danger"
              onClick={() => dispach({ action: "delete", value: e.id })}
            >
              delete
            </Button>
            <Button
              variant="success"
              onClick={() => dispach({ action: "check", value: e.id })}
            >
              check
            </Button>
          </p>
        ))}
      </ul>
    </Container>
  );
};

export default Todo;
