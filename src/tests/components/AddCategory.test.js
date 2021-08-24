import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrarse varias veces", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("No debe postear la incformación con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });
  test("Debe de llamar el setCategories y limipiar la caja de texto", () => {
    // 1. Simular el inputChange
    const value = "Hola mundo";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    // 2. Simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4. El valor del input debe estar ''
    const inputValue = wrapper.find("input").prop("value");
    expect(inputValue).toBe("");
  });
});
