let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

function addHomeScore(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function addGuestScore(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

function addHome1() {
    addHomeScore(1);
}

function addHome2() {
    addHomeScore(2);
}

function addHome3() {
    addHomeScore(3);
}

function addGuest1() {
    addGuestScore(1);
}

function addGuest2() {
    addGuestScore(2);
}

function addGuest3() {
    addGuestScore(3);
}
