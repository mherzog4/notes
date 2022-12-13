import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => <Pet animal={pet.animal} />)
      )}
      id={pet.id}
      name={pet.name}
      breed={pet.breed}
      images={pet.images}
      location={`${pet.city}, ${pet.state}`}
      key={pet.id}
    </div>
  );
};

export default Results;

// <Pet
// {...pet}
// animal={pet.animal}
// key{pet.id}
// />

// using the spread operator passes everything along- tomorrow maybe we want to add more to API - with spread operator it is being explcit - stay away and do what is not commented 
