import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchbreedlist";

//no jsx in file so dont have to explicitly say so in file extension

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}

// this useffect re runs when animal changes - when animal goes from dog to cat it requests a new breed list

//custom hooks are multiple hooks packaged together
