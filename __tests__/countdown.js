var countDown = require("../util/countdown");

// random date
test("2015-03-25T12:00:00Z 2017-03-25T01:30:12Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2017-03-25T01:30:12Z")
  ).toEqual({
    years: 2,
    days: 0,
    hours: 13,
    minutes: 30,
    seconds: 12
  });
});

// seconds left
test("2015-03-25T12:00:00Z 2015-03-25T12:00:10Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2015-03-25T12:00:10Z")
  ).toEqual({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10
  });
});

// minutes left
test("2015-03-25T12:00:00Z 2015-03-25T12:10:00Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2015-03-25T12:10:00Z")
  ).toEqual({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0
  });
});

// hours left
test("2015-03-25 2015-03-27", () => {
  expect(countDown.timeTillLaunch("2015-03-25", "2015-03-27")).toEqual({
    years: 0,
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
});

// years left w/ leap years?
test("2015-03-25T12:00:00Z 2015-03-25T12:10:00Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2030-03-25T12:00:00Z")
  ).toEqual({
    years: 15,
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
});
