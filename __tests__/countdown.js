var countDown = require("../util/countdown");

test("2015-03-25 2015-03-27", () => {
  expect(countDown.timeTillLaunch("2015-03-25", "2015-03-27")).toEqual({
    years: 0,
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
});
