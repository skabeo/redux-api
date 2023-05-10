import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/users/usersSlice'

const Fetchuses = () => {
  const { users, isLoading, error } = useSelector(state => state.user)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.last}>{user.first} {user.last}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetchuses