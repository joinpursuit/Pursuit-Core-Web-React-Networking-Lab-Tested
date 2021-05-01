import { shallow } from "enzyme";

import App from "./App";
import Game from "./Game";
import Menu from "./Menu";

jest.mock("axios");

describe("App", () => {
  it("renders Menu when first mounted", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Game)).toHaveLength(0);
    expect(wrapper.find(Menu)).toHaveLength(1);
  });

  it("renders Game when game state exists", () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ cards: [{}], deckId: "abc123" });

    expect(wrapper.find(Game)).toHaveLength(1);
    expect(wrapper.find(Menu)).toHaveLength(0);
  });
});
