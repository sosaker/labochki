using Microsoft.EntityFrameworkCore;
using Notes.Models;

namespace Notes.DataAccess;

public class NotesDbContext : DbContext
{
    public NotesDbContext(DbContextOptions<NotesDbContext> options)
        : base(options)
    {
    }

    public DbSet<Note> Notes => Set<Note>();
}

