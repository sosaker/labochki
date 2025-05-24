using BookStore.DataAccess.Entities;
//using BookStore.Core.Models;
using Microsoft.EntityFrameworkCore;
using BookStore.Core.Models;

namespace BookStore.DataAccess;

public class BookStoreDbContext : DbContext
{
    public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
        : base(options)
    {

    }

    //public DbSet<BookEntity> Books => Set<Note>();
    public DbSet<BookEntity> Books { get; set; }
}
