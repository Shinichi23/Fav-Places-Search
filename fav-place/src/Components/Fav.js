import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DELETE_FAVORITE } from "../Redux/Actions/FavAction";

const Fav = () => {
  const { fav } = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const handleDelete = (elem) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: {
        id: elem.id,
      },
    });
  };
  return (
    <div>
      <h1>Welcome To The Fav List</h1>
      {fav.map((elem) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img
              style={{ width: 250, height: 200 }}
              variant="top"
              src={elem.picUrl}
            />
            <Card.Title>{elem.name}</Card.Title>
            <Button onClick={() => handleDelete(elem)} variant="dark">
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Fav;
