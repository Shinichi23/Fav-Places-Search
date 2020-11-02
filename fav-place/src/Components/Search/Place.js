import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ADD_MARKER } from "../../Redux/Actions/MarkAction";
import { PLUS_FAVORITE } from "../../Redux/Actions/FavAction";

const Place = (props) => {
  const [picture, setPicture] = useState();
  const random = Math.floor(Math.random() * 30);
  const dispatch = useDispatch();

  const handleMarker = () => {
    dispatch({
      type: ADD_MARKER,
      payload: {
        id: props.categories.id,
        name: props.categories.name,
        lat: props.categories.location.lat,
        lng: props.categories.location.lng,
      },
    });
  };

  const handleFav = () => {
    dispatch({
      type: PLUS_FAVORITE,
      payload: {
        id: props.categories.id,
        name: props.categories.name,
        picUrl: picture,
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=Ags8SDJ24SdkUetTjILrHBAUk6GvehQ3NJ0z1Rni2yE&count=30&query=${props.subject}`
      );
      console.log(result.data[random]);
      setPicture(result.data[random].urls.full);
    };
    fetchData();
  }, []);

  return (
    <div className="col-4" style={{ marginBottom: 20 }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img
            style={{ width: 250, height: 200 }}
            variant="top"
            src={picture}
          />
          <Card.Title>{props.categories.name}</Card.Title>
          <Button onClick={handleMarker} variant="dark">
            Mark
          </Button>
          <Button onClick={handleFav} variant="dark">
            Fav
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Place;
