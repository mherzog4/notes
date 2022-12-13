import { useContext, useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "dog", "cat", "cow"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
   <div className="my-0 mx-auto w-11/12">
  <form
    className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const obj = {
        animal: formData.get("animal") ?? "",
        breed: formData.get("breed") ?? "",
        location: formData.get("location") ?? "",
      };
      setRequestParams(obj);
    }}
  >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input type="text" name="location" id="location" placeholder="location" />
        </label>
        <label htmlfor="Animal">
          Animal
          <select
          className = "search-input"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlfor="breed">
          Breed
          <select 
          className = "search-input" id="breed" disabled={breeds.length === 0}>
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className = "search-input grayed-out-disabled">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// look at using a custom hook instead of sticking a useEffect into the component

// look at when you should pull things out to make its own componenent - 90 lines is sort of long for react component - look for smaller and single purpose componenets
