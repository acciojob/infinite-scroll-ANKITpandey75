const list = document.getElementById("infi-list");

let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${count++}`;
    list.appendChild(li);
}

// Infinite scroll
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
        for (let i = 0; i < 2; i++) {
            const li = document.createElement("li");
            li.innerText = `Item ${count++}`;
            list.appendChild(li);
        }
    }
});