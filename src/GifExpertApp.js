import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = ["One Piece"] }) => {
  // const [categories, setCategories] = useState(["One Piece"]);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

/*
1. Enzyme
2.Enzyme-to-json
3. Debe mostrar el componente correctamente
  *shallow
  * wrapper .toMatchSnapshot()
*/
