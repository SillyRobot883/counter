const decrease = document.getElementById('decrementButton');
const increase = document.getElementById('incrementButton');
const reset = document.getElementById('resetButton');
const counter = document.getElementById('countLabel');
const message = document.getElementById('messageLabel');
const alertSound = document.getElementById('alertSound');
const discordSound = document.getElementById('discordSound');
const slidingMessagesContainer = document.getElementById('slidingMessagesContainer');
let count = 0;

function updateMessage() {
    switch (count) {
        case 10:
            alertSound.play();
            showSlidingMessage("Congratulations! You've reached 10! 🎉");
            break;
        case 20:
            alertSound.play();
            showSlidingMessage("Awesome! You've reached 20! 🌟");
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
            showSlidingMessage("Alright stop.");
            break

        case 100:
            alertSound.play();
            showSlidingMessage("You're unbelievable! You've reached 100! 🏆");
            break;
        case 105:
            alertSound.play();
            showSlidingMessage("Okay, you're not quiting huh?");
            break;
        default:
            message.textContent = "";
    }
}

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
        }, 500);
    }, 3000);
}

increase.onclick = () => {
    count++;
    counter.textContent = count;
    updateMessage();
}

decrease.onclick = () => {
    count--;
    counter.textContent = count;
    updateMessage();
}

reset.onclick = () => {
    count = 0;
    counter.textContent = count;
    updateMessage();
}