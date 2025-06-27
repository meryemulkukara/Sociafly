import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';

export default function PostList() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading posts...</div>;
  if (status === 'failed') return <div>Failed to load posts.</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {list.map((post) => (
          <li key={post.id}>
            <p><strong>{post.content}</strong></p>
            {/* 
              ÇÖZÜM: post.user objesinin kendisini değil, 
              içindeki username özelliğini yazdırıyoruz.
              post.user'ın var olup olmadığını kontrol etmek için '?' (optional chaining) kullanıyoruz.
            */}
            <small>By: {post.user?.username || 'Unknown User'}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

