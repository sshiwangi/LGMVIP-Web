const inputVal = document.querySelector('#input-area');
const btn = document.querySelectorAll('button');
const result = document.querySelector('.evaluate');
const delete_all = document.querySelector('.erase-all');

btn.forEach((elem) => {
    elem.onclick = () => {
        inputVal.value += elem.innerText;
    }

});

result.onclick = () => {
    const answer = eval(inputVal.value);
    inputVal.value = answer;
}

delete_all.onclick = () => {
    inputVal.value = "";
}
