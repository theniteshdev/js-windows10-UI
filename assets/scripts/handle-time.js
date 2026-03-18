// in this file all function for handle time and data on the taskbar

const placeholder = document.querySelector(".time-date");
const timePlaceholder = placeholder.children[0];
const timeFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
};
const datePlaceholder = placeholder.children[1];
const dateFormat = {};

setInterval(() => {
    let date = new Date();
    datePlaceholder.innerHTML = date.toLocaleDateString("en-IN", {
        dateStyle:"medium"
    });
    timePlaceholder.innerHTML = date.toLocaleTimeString("en-US", timeFormat);
}, 1000);
