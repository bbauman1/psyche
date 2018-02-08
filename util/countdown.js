function getCountdown(launchDateString) {
  var countDownDate = new Date(launchDateString).getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  return {
    years: Math.floor(distance / (1000 * 60 * 60 * 24) / 365),
    days: Math.floor((distance / (1000 * 60 * 60 * 24)) % 365),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  };
}
