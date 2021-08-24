import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Probando el <GifExpertApp />", () => {
  const wrapper = shallow(<GifExpertApp />);

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar una lista de categorías", () => {
    const categories = ["One Piece", "Dragon ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
