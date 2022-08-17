import './App.css';
import useAuth from './hooks/useAuth'
import ChatApp from './components/ChatApp';
import Login from './components/Login';

function App() {

  const user = useAuth();
  
  return (
    <div className='bg-gradient-to-r from-cyan-300 to-blue-700 absolute inset-0'>
    <h1 className='font-bold text-4xl'>Welcome to ChatRooms!</h1>
      {user ? <ChatApp /> : <Login />}
    </div>
  )
}

export default App;
