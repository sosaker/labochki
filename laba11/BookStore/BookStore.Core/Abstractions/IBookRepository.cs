using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Core.Models;

namespace BookStore.Core.Abstractions
{
    public interface IBookRepository
    {
        Task<Guid> Create(Book book);
        Task<Guid> DeleteBook(Guid id);
        Task<List<Book>> GetBooks();
        Task<Guid> Update(Guid id, string title, string description, decimal price);
    }
}
