using Notes;
using System;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Note> notes = new List<Note>();

app.UseDefaultFiles();
app.UseStaticFiles(new StaticFileOptions()
{
    OnPrepareResponse = (context) =>
    {
        // Disable caching of all static files.
        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
        context.Context.Response.Headers["Pragma"] = "no-cache";
        context.Context.Response.Headers["Expires"] = "-1";
    }
});


app.MapPost("/addNote", (Note note) =>
{
    note.Id = Guid.NewGuid().ToString();
    note.Text = "New note";
    notes.Add(note);
    return note;
});

app.MapDelete("/notes/{id}", (string id) =>
{
    Note? note = notes.FirstOrDefault(u => u.Id == id);

    if (note == null) return Results.NotFound(new { message = "Заметка не найдена" });

    notes.Remove(note);
    return Results.Json(note);
});

app.Run();

