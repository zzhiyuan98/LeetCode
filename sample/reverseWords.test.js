import reverseWords from "./reverseWords.js";

test("reverse words", () => {
  const str = "yM eman si boB.";
  expect(reverseWords(str)).toBe("My name is Bob.");
});

test("reverse words", () => {
  const str = "woh era uoy ? I ma enif.";
  expect(reverseWords(str)).toBe("how are you ? I am fine.");
});
