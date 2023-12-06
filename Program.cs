using Notes;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Note> notes = new List<Note>();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapPost("/addNote", (Note note) =>
{

    note.Id = Guid.NewGuid().ToString();
    notes.Add(note);
    return note;
});

app.Run();

