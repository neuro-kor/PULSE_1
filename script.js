let targetDate;

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputDate = document.getElementById('targetDate').value;
    const now = new Date().getTime();
    const selectedDate = new Date(inputDate).getTime();

    if (selectedDate > now) {
        targetDate = selectedDate;
        document.getElementById('errorMessage').style.display = 'none';
        updateTimer();
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "시간이 종료되었습니다!";
        clearInterval(x);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
}

const x = setInterval(function() {
    if (targetDate) {
        updateTimer();
    }
}, 1000);