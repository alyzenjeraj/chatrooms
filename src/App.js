import './App.css';
import useAuth from './hooks/useAuth'
import ChatApp from './components/ChatApp';
import Login from './components/Login';

function App() {

  const {user} = useAuth();
  
  return (
    <div className='bg-stone-800 text-white absolute inset-0'>
    <h1 className='font-bold text-4xl pt-10 pb-5 flex justify-center'>Welcome to ChatRooms!</h1>
      {user ? <ChatApp /> : <Login />}
    </div>
  )
}

export default App;
