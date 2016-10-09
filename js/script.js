/**
 * Created by romit on 10/9/16.
 */
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function updateClock() {
    var days = document.getElementsByClassName('days')[0];
    var hours = document.getElementsByClassName('hours')[0];
    var minutes = document.getElementsByClassName('minutes')[0];
    var seconds = document.getElementsByClassName('seconds')[0];
    var time = setInterval(function () {
        var t = getTimeRemaining("2016,11,9");
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if (t.total <= 0) {
            clearInterval(time);
        }
    }, 1000);
}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71110167-1', 'auto');
ga('send', 'pageview');
updateClock();