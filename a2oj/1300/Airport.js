let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, m] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let seats = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let seatsTwo = seats.slice();
  let sum = seats.reduce((acc, element) => (acc += element), 0);
  let max = 0,
    min = 0;
  for (let i = 0; i < n && sum > 0; i++) {
    let ticketMax = Math.max(...seats);
    max += ticketMax;
    if (seats[seats.indexOf(ticketMax)] > 1) {
      seats[seats.indexOf(ticketMax)]--;
    } else {
      seats.splice(seats.indexOf(ticketMax), 1);
    }
    let ticketMin = Math.min(...seatsTwo);
    min += ticketMin;
    if (seatsTwo[seatsTwo.indexOf(ticketMin)] > 1) {
      seatsTwo[seatsTwo.indexOf(ticketMin)]--;
    } else {
      seatsTwo.splice(seatsTwo.indexOf(ticketMin), 1);
    }
  }
  console.log(max, min);
});
