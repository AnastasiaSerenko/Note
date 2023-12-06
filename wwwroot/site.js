
document.getElementById("addNote").addEventListener("click", async () => {
    const response = await fetch("addNote", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
        })
    });
    if (response.ok === true) {
        const note = document.createElement("img")
        note.setAttribute("class", "note");
        note.setAttribute("src", "img/note.png");
        document.body.appendChild(note);
    }
    else {
        const error = await response.json();
        console.log(error.message);
    }
});