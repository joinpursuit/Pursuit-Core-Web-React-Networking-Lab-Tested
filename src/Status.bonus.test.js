import { mount } from "enzyme";

import Status from "./Status";

describe("Status", () => {
  it.each([
    [null, ["2", "2", "2", "2"]],
    [null, ["ACE", "8"]],
    [null, ["ACE", "ACE"]],
    ["Busted...", ["10", "9", "4"]],
    ["Busted...", ["10", "9", "2", "ACE"]],
    ["Busted...", ["10", "10", "ACE", "ACE"]],
    ["Blackjack!", ["8", "7", "6"]],
    ["Blackjack!", ["10", "10", "ACE"]],
    ["Blackjack!", ["10", "9", "ACE", "ACE"]],
    ["Blackjack!", ["8", "2", "ACE"]],
    ["Blackjack!", ["9", "ACE", "ACE"]],
  ])("renders %s when given %p", (expected, values) => {
    const wrapped = mount(<Status cards={values.map((value) => ({ value }))} />);

    if (expected) {
      expect(wrapped.text()).toContain(expected);
    } else {
      expect(wrapped.text()).toBe("");
    }
  });
});
