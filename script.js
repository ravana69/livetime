function updateTimeAndDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const [date, time] = dateTime.split(', ');

  document.getElementById('live-date').textContent = date;
  document.getElementById('live-time').textContent = time;
}

setInterval(updateTimeAndDate, 1000); // Update time every second
updateTimeAndDate(); // Initial update
