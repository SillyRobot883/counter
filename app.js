const decrease = document.getElementById('decrementButton');
const increase = document.getElementById('incrementButton');
const reset = document.getElementById('resetButton');
const darkModeToggle = document.getElementById('darkModeToggle');
const counter = document.getElementById('countLabel');
const message = document.getElementById('messageLabel');
const alertSound = document.getElementById('alertSound');
const discordSound = document.getElementById('discordSound');
const resetSound = document.getElementById('resetSound');
const slidingMessagesContainer = document.getElementById('slidingMessagesContainer');
const confettiContainer = document.getElementById('confettiContainer');
let count = 0;

// the updateMessage function will display a message based on the current count
function updateMessage() {
    switch (count) {
        case -15:
            showSlidingMessage("Why would you go negative? lol");
            alertSound.play();
            break;
        case 10:
            showSlidingMessage("Congratulations! You've reached 10! 🎉");
            alertSound.play();
            break;
        case 20:
            showSlidingMessage("Awesome! You've reached 20! 🌟");
            alertSound.play();
            break;
        case 35:
            discordSound.play();
            showSlidingMessage("Incredible! You've reached 35! 🚀");
            break;
        case 50:
            alertSound.play();
            showSlidingMessage("You're still going huh?");
            break;
        case 75:
            alertSound.play();
            showSlidingMessage("Alright stop. I'm disabling the buttons now.");
            disableIncreaseButton(10);
            break;
        case 100:
            alertSound.play();
            showSlidingMessage("You're unbelievable! You've reached 100! 🏆");
            break;
        case 105:
            alertSound.play();
            showSlidingMessage("Wait, what? You're still going?");
            break;
        default:
            message.textContent = "";
    }
}

// the showSlidingMessage function will display a message that slides in from the top
function showSlidingMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.className = 'slidingMessage';
    messageElement.textContent = text;
    slidingMessagesContainer.appendChild(messageElement);
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 100);
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            slidingMessagesContainer.removeChild(messageElement);
        }, 400);
    }, 3000);
}


function disableIncreaseButton(seconds) {
    increase.disabled = true;
    increase.style.backgroundColor = 'gray';
    const timer = document.createElement('div');
    timer.id = 'timer';
    timer.style.position = 'absolute';
    timer.style.top = '50%';
    timer.style.left = '50%';
    timer.style.transform = 'translate(-50%, -50%)';
    timer.style.color = 'white';
    increase.parentElement.appendChild(timer);

    let remainingTime = seconds;
    timer.textContent = remainingTime;

    const interval = setInterval(() => {
        remainingTime--;
        timer.textContent = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(interval);
            increase.disabled = false;
            increase.style.backgroundColor = '';
            timer.remove();
        }
    }, 1000);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 1000,
        origin: { y: .3 }
    });
}

increase.onclick = () => {
    clickSound.play();
    count++;
    counter.textContent = count;
    updateMessage();
    if (count == 100) {
        triggerConfetti();
    }
}

decrease.onclick = () => {
    clickSound.play();
    count--;
    counter.textContent = count;
    updateMessage();
}

reset.onclick = () => {
    resetSound.play();
    count = 0;
    counter.textContent = count;
    updateMessage();
}

darkModeToggle.onchange = () => {
    document.body.classList.toggle('dark-mode');
}