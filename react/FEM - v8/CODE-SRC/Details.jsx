import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Component from "./Component";
import Carousel from "./carousel";
a;

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🚀</h2>
      </div>
    );
  }

  const pet = results.data.pets(0);

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}{" "}
        </h2>
        <button>Adopt {pet.name}</button>
        <p> {pet.description}</p>
      </div>
    </div>
  );
};

export default Details;

// this gets id

// browser router from App.jsx gives context to hte components
