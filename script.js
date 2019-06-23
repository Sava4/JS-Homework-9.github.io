
const setActive = event => {
    if (event.target.className !== 'tabs-title active') {
    let current = document.getElementsByClassName('tabs-title active')[0];
        let curLi = document.querySelector(`[data-id=${current.innerText}`);
        curLi.dataset.show = "no";
        current.className = 'tabs-title';
    event.target.className = 'tabs-title active';
        let li = document.querySelector(`[data-id=${event.target.innerText}]`);
        li.dataset.show = "yes";
    } else return;
}

document.querySelectorAll(".tabs-title").forEach(el => {
    el.addEventListener("click", setActive);
})