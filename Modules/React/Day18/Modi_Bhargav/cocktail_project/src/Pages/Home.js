import React from "react";
import CocktailList from "../Components/CocktailList";
import SearchFrom from "../Components/SearchFrom";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktail = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktail);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchFrom setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
