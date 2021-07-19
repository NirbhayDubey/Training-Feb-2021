using Microsoft.EntityFrameworkCore;
using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly StackOverFlowContext _context;
        public GenericRepository(StackOverFlowContext context)
        {
            _context = context;
        }


        //public bool Any(Func<T, bool> predicate)
        //{
        //    return _context.Set<T>().AsNoTracking().Any(predicate);
        //}



        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }
        //public void AddRange(IEnumerable<T> entities)
        //{
        //    _context.Set<T>().AddRange(entities);
        //}
        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            return _context.Set<T>().Where(expression);
        }


        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }
        public T GetById(int id)
        {
            return _context.Set<T>().Find(id);
        }

        //public virtual void Update(T entity)
        //{
        //    _context.Entry(entity).State = EntityState.Modified;
        //}

        public void Remove(T entity)
        {
            _context.Set<T>().Remove(entity);
        }
        //public void RemoveRange(IEnumerable<T> entities)
        //{
        //    _context.Set<T>().RemoveRange(entities);
        //}
    }
}
