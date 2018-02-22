function timeTillLaunch(nowTime, launchTime) {
  var countDownDate = new Date(launchTime).getTime();
  var now = new Date(nowTime).getTime();
  var distance = countDownDate - now;
  /* Inspired by this link:
     https://www.w3schools.com/howto/howto_js_countdown.asp
     Modifications are the years, months and days
     # of days left and # of months left based on an average of
     30.4368
   */
  data = {
    years: Math.floor(distance / (1000 * 60 * 60 * 24) / 365),
    months: Math.floor(((distance / (1000 * 60 * 60 * 24)) % 365) / 30.4368),
    days: Math.floor(((distance / (1000 * 60 * 60 * 24)) % 365) % 30.4368),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  };
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      s = data[key].toString();
      if (s.length < 2) {
        s = "0" + s;
      }
      data[key] = s;
    }
  }
  return data;
}

exports.timeTillLaunch = timeTillLaunch;
