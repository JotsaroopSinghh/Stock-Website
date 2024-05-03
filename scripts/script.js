function update_time() {
  const time = new Date();

  const [pm, h] = get_hours(time.getHours());
  const m = add_double_digit(time.getMinutes());

  hours.textContent = h;
  colon.classList.toggle("vis-hid");
  minutes.textContent = m;
  meridiem.textContent = pm ? "PM" : "AM";
}

function get_hours(hrs) {
  const hr_change = hrs >= 12;
  if (hrs != 12) {
    hrs %= 12;
  }

  return [hr_change, add_double_digit(hrs)];
}

function add_double_digit(a) {
  if (a < 10) {
    a = `0${a}`;
  }
  return a;
}
