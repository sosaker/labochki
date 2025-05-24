using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Core.Models;

namespace BookStore.Application.Services
{
    public interface IBookService
    {
        Task<Guid> CreateBook(Book book);
        Task<Guid> DeleteBook(Guid id);
        Task<List<Book>> GetAllBooks();
        Task<Guid> UpdateBook(Guid id, string title, string description, decimal price);
    }
}
