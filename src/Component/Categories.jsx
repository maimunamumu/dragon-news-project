
import { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise=fetch("/categories.json").then(res=>res.json())

const Categories = () => {
    const categories =use(categoriesPromise);
   
    return (
        <div>
            <h1 className='font-bold'>All Categories({categories.length})</h1>
           <div className='grid grid-cols-1 mt-5 gap-2'>
             {
                categories.map(category=> <NavLink className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-gray-600"} key={category.id} to={`/category/${category.id}`}>{category.name} </NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;