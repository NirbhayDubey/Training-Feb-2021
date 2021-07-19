using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Interface
{
   
        public interface IGeneric<T> where T : class
        {
            IEnumerable<T> GetAll();

            T GetById(string id);
            void Create(T entity);

            void Update(T entity);

            void Delete(T entity);



        }
    }

