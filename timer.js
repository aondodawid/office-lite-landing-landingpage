function timer() {
  const finishDate = new Date(2023, 11, 3, 10);

  const date = {
    days: document.getElementById("days"),
    seconds: document.getElementById("second"),
    minutes: document.getElementById("minutes"),
    hours: document.getElementById("hours"),
  };

  function calculateTimeLetf(timeDiference, date) {
    const daysLeft = Math.floor(timeDiference / 24 / 60 / 60 / 1000);

    const hoursLeft = Math.floor(
      (timeDiference - daysLeft * 24 * 60 * 60 * 1000) / 60 / 60 / 1000
    );

    const minutesLeft = Math.floor(
      (timeDiference -
        daysLeft * 24 * 60 * 60 * 1000 -
        hoursLeft * 60 * 60 * 1000) /
        60 /
        1000
    );

    const secondsLeft = Math.round(
      (timeDiference -
        daysLeft * 24 * 60 * 60 * 1000 -
        hoursLeft * 60 * 60 * 1000 -
        minutesLeft * 60 * 1000) /
        1000
    );
    switch (date) {
      case "days":
        return daysLeft;
        break;
      case "hours":
        return hoursLeft;
        break;
      case "minutes":
        return minutesLeft;
        break;
      case "seconds":
        return secondsLeft;
        break;
    }
  }

  function updateTimeLeft() {
    const currentTime = Date.now();

    const timeDiference = finishDate - currentTime;

    date.days.textContent = calculateTimeLetf(timeDiference, "days");
    date.hours.textContent = calculateTimeLetf(timeDiference, "hours");
    date.minutes.textContent = calculateTimeLetf(timeDiference, "minutes");
    date.seconds.textContent = calculateTimeLetf(timeDiference, "seconds");
  }

  setInterval(updateTimeLeft, 1000);
}

export default timer;
