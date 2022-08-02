const form = document.getElementById("chat_form");

const enterMsg = document.getElementById('enterMsg');

const displayMsg = document.getElementById('displayMsg');

let drawer = document.getElementById('drawer');

const emojiToggleButton = document.querySelector('.chat__emojiButton')

form.addEventListener('submit', handleForm);

function createMessage(text) {
    const newMessage = document.createElement("div");
    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton')
    if (!text || text.length === 0) return;
    closeButton.innerText = 'x';
    newMessage.innerText = text;
    newMessage.append(closeButton);
    closeButton.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
    return newMessage;
}

function handleForm(event) {
    event.preventDefault();
    const message = createMessage(enterMsg.value);
    message.classList.add('textStyles')
    displayMsg.append(message);
    scrollToBottom('displayMsg');
    form.reset();
}

function scrollToBottom(id) {
    let div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}

function changeImgToText() {
    document.getElementById('add-logo').innerHTML = '<img src="https://www.dating.com/i/index/logo.svg?2" alt="Logo-Added" width="150" height="100" style="padding-left: 20px" />';
}

const replaceText = new Promise((resolve) => setTimeout(resolve, 3000))

replaceText.then(changeImgToText);

const giftsContainer = document.querySelector('.chat__giftRow')
giftsContainer.addEventListener('click', sendGift)
function sendGift(e) {
    let img = document.createElement("img");
    img.src = e.target.src;
    displayMsg.appendChild(img);
    img.style.height = "4em"
    img.style.display = "table"
    scrollToBottom('displayMsg');
}



function toggleEmojiDrawer() {
    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}


function addEmoji(e) {
    const value = enterMsg.value;
    enterMsg.value = value + e.target.dataset.text;
    toggleEmojiDrawer();
}

drawer.addEventListener('click', addEmoji);
emojiToggleButton.addEventListener('click', toggleEmojiDrawer)

let intervalPopup = setInterval(change, 30000)

function change() {
    clearInterval(intervalPopup)
    const element = document.querySelector('.main_popup');
    element.classList.add('_visible');
    return setTimeout(() => {
        element.classList.remove('_visible')
        intervalPopup = setInterval(change, 15000)
    }, 15000)

}
