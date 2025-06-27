import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';
import LoginForm from './components/LoginForm';
import './App.css';

function Home() {
    return (
        <div>
            <h1>Welcome! You are logged in.</h1>
            <h1>SociaFly Basic UI</h1>
            <UserList />
            <PostList />
        </div>
    );
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginForm/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
