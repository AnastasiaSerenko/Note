
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
        const note_object = await response.json();
        note.setAttribute("id", note_object.id);

        const note_text = document.createElement("p");
        note_text.setAttribute("class", "note-text");
        note_text.setAttribute("contenteditable", "true");
        let text = document.createTextNode(note_object.text);
        note_text.appendChild(text);
        note.appendChild(note_text);

        const btn_edit = document.createElement("button");
        btn_edit.setAttribute("class", "note-btn");
        text = document.createTextNode("Edit");
        btn_edit.appendChild(text);
        note.appendChild(btn_edit);

        const btn_delete = document.createElement("button");
        btn_delete.setAttribute("class", "note-btn");
        text = document.createTextNode("Delete");
        btn_delete.appendChild(text);
        btn_delete.addEventListener("click", async () => await deleteNote(note_object.id));
        note.appendChild(btn_delete);

        const desk = document.getElementById("desk");
        desk.appendChild(note);
    }
    else {
        const error = await response.json();
        console.log(error.message);
    }
});

async function deleteNote(id) {
    const response = await fetch(`/notes/${id}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });

    if (response.ok === true) {
        var note = document.getElementById(id);
        note.remove();
    }
    else {
        const error = await response.json();
        console.log(error.message);
    }
};