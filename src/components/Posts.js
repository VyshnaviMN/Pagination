import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        <thead>
          <tr>
            <th> </th>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Job</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        {posts.map(post => (
            <tr key={post.id}>
                <td> </td>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.company}</td>
                <td>{post.job}</td>
                <td>{post.city}</td>
                <td>{post.phone}</td>
            </tr>
        ))}
    </div>
    
    // <ul className='list-group mb-4'>
    //   {posts.map(post => (
    //     <li key={post.id} className='list-group-item' style={{marginLeft: '.5rem', marginBlockStart: '.5rem'}}>
    //       {post.id+" "+post.name+" "+post.email+" "+post.company+" "+post.job+" "+post.city+" "+post.phone}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Posts;