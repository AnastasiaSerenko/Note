
document.getElementById("addNote").addEventListener("click", async () => {
    const response = await fetch("addNote", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
        })
    });
    if (response.ok === true) {
        const note = document.createElement("div");
        note.setAttribute("class", "note");

        const note_text = document.createElement("p");
        note_text.setAttribute("class", "note-text");
        note_text.setAttribute("contenteditable", "true");
        let text = document.createTextNode("Hello World");
        note_text.appendChild(text);
        note.appendChild(note_text);

        const btn_edit = document.createElement("button");
        btn_edit.setAttribute("class", "note-btn");
        btn_edit.setAttribute("id", "btn-edit");
        text = document.createTextNode("Edit");
        btn_edit.appendChild(text);
        note.appendChild(btn_edit);

        const btn_delete = document.createElement("button");
        btn_delete.setAttribute("class", "note-btn");
        btn_delete.setAttribute("id", "btn-delete");
        text = document.createTextNode("Delete");
        btn_delete.appendChild(text);
        note.appendChild(btn_delete);

        document.body.appendChild(note);
    }
    else {
        const error = await response.json();
        console.log(error.message);
    }
});