import React from 'react';
import propTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "aaaa",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/09/18/2eb48c6c35a13139ee738d01016eadf61.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "bbbb",
    image: "2222",
    rating: 3.5
  },
  {
    id: 3,
    name: "cccc",
    image: "3333",
    rating: 2.8
  },
  {
    id: 4,
    name: "dddd",
    image: "4444",
    rating: 5
  }
];

function Food({name, picture, rating}) {
  return <div>
    <h2>You like {name}?</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
};

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      {
        foodILike.map(dish => (
          <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} />
        ))}
    </div>
  );
};

export default App;
