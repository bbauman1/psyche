function timeTillLaunch(nowTime, launchTime) {
  var countDownDate = new Date(launchTime).getTime();
  var now = new Date(nowTime).getTime();
  var distance = countDownDate - now;

  return {
    years: Math.floor(distance / (1000 * 60 * 60 * 24) / 365),
    days: Math.floor((distance / (1000 * 60 * 60 * 24)) % 365),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  };
}

exports.timeTillLaunch = timeTillLaunch;
