var countDown = require("../util/countdown");

// random date
test("2015-03-25T12:00:00Z 2017-03-25T01:30:12Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2017-03-25T01:30:12Z")
  ).toEqual({
    years: "02",
    months: "00",
    days: "00",
    hours: "13",
    minutes: "30",
    seconds: "12"
  });
});

// seconds left
test("2015-03-25T12:00:00Z 2015-03-25T12:00:10Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2015-03-25T12:00:10Z")
  ).toEqual({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "10"
  });
});

// minutes left
test("2015-03-25T12:00:00Z 2015-03-25T12:10:00Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2015-03-25T12:10:00Z")
  ).toEqual({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "10",
    seconds: "00"
  });
});

// hours left
test("2015-03-25 2015-03-27", () => {
  expect(countDown.timeTillLaunch("2015-03-25", "2015-03-27")).toEqual({
    years: "00",
    months: "00",
    days: "02",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });
});

// years left w/ leap years?
test("2015-03-25T12:00:00Z 2015-03-25T12:10:00Z", () => {
  expect(
    countDown.timeTillLaunch("2015-03-25T12:00:00Z", "2030-03-25T12:00:00Z")
  ).toEqual({
    years: "15",
    months: "00",
    days: "04",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });
});
