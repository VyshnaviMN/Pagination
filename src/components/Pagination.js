import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

//   return (
//     <nav>
//       <div className='pagination'>
//         {"Previous "}
//         {pageNumbers.map(number => (
//             <button  onClick={() => paginate(number)} href='!#' className='page-link' style={{color:'green'}}>
//               {number}
//             </button>
//         ))}
//         {" Next "}
//       </div>
//     </nav>
//   )
return (
    <nav>
      <ul className='pagination'>
        {"Previous"}
        {pageNumbers.map(number => (
          <button key={number} className='page-item' onClick={() => paginate(number)}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </button>
        ))}
        {"Next"}
      </ul>
    </nav>
  );
};

export default Pagination;