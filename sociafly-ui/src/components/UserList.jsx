import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

export default function UserList() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  if (status === 'loading') return <div>Loading users...</div>;
  if (status === 'failed') return <div>Failed to load users.</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {list.map((user) => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
