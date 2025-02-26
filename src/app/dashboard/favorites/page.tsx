import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorites Pokemos <small className="text-blue-500">Global State</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
