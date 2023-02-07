var countdown = document.querySelector('.countdown');

// Update every second
var x = setInterval( function() {
// Set Launch Date (ms)
var launchDate = new Date('Mar 8, 2023 00:00:00').getTime();
// Get todays date and time (ms)
var now = new Date().getTime();

// Distance from now and the launch date (ms)
var distance = launchDate - now;

// Time calculation
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Add zero before single digit number 
days = (days < 10) ? "0" + days : days;
hours = (hours < 10) ? "0" + hours : hours;
mins = (mins < 10) ? "0" + mins : mins;
seconds = (seconds < 10) ? "0" + seconds : seconds;


// Display result
countdown.innerHTML = `

    <div class="wrap">
        <div class="container">
            <b>${days}
                <span>Days</span>
            </b>
            <div class="loader"><span></span></div>
            <div class="loader"><span></span></div>
            <div class="loader"><i></i></div>
            <div class="loader"><i></i></div>
        </div>
        <div class="container">
            <b>${hours}
                <span>Hours</span>
            </b>
            <div class="loader"><span></span></div>
            <div class="loader"><span></span></div>
            <div class="loader"><i></i></div>
            <div class="loader"><i></i></div>
        </div>
    </div>
    <div class="wrap">
        <div class="container">
            <b>${mins}
                <span>Minutes</span>
            </b>
            <div class="loader"><span></span></div>
            <div class="loader"><span></span></div>
            <div class="loader"><i></i></div>
            <div class="loader"><i></i></div>
        </div>
        <div class="container">
            <b>${seconds}
                <span>Seconds</span>
            </b>
            <div class="loader"><span></span></div>
            <div class="loader"><span></span></div>
            <div class="loader"><i></i></div>
            <div class="loader"><i></i></div>
        </div>
    </div>
`;

// If launch date is reached,
if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);

    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = "Hurray 🥳🎊🎉🪄! <br> 🧑‍💻 It's theWorldTechie'sDay 🧑‍💻 ! ! ! <h2>Alhamdulillah Rabil Alamiin 🙏🙏🙏</h2>";
    
    // for starting the confetti 
    const start = () => {
    setTimeout(function() {
        confetti.start()
    }); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    // after this here we are calling the function so it works
    start();
}
}, 1000);