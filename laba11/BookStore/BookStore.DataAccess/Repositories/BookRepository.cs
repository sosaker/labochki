﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Core.Models;
using BookStore.Core.Abstractions;
using BookStore.DataAccess.Entities;

namespace BookStore.DataAccess.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly BookStoreDbContext _context;
        public BookRepository(BookStoreDbContext context)
        {
            _context = context;
        }

        public async Task<List<Book>> GetBooks()
        {
            var bookEntities = await _context.Books
                .AsNoTracking()
                .ToListAsync();
            var books = bookEntities
                .Select(b => Book.Create(b.Id, b.Title, b.Description, b.Price).Book)
                .ToList();
            return books;
        }

        public async Task<Guid> Create(Book book)
        {
            var bookEntity = new BookEntity
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
            };
            await _context.Books.AddAsync(bookEntity);
            await _context.SaveChangesAsync();

            return bookEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string title, string description, decimal price)
        {
            await _context.Books
                .Where(b => b.Id == id)
                .ExecuteUpdateAsync(s => s
                    .SetProperty(b => b.Title, b => title)
                    .SetProperty(b => b.Description, b => description)
                    .SetProperty(b => b.Price, b => price));
            return id;
        }

        public async Task<Guid> DeleteBook(Guid id)
        {
            await _context.Books
                .Where (b => b.Id == id)
                .ExecuteDeleteAsync();
            return id;
        }
    }
}
