import './App.css';
import useAuth from './hooks/useAuth'
import ChatApp from './components/ChatApp';
import Login from './components/Login';

function App() {

  const {user} = useAuth();
  
  return (
    <div className='scrollbar bg-zinc-800 text-white absolute inset-0'>
      <h1 className='m-auto m-4 font-bold text-4xl pt-10 pb-5 flex justify-center'>Welcome to ChatRooms!</h1>
          
        {user ? <ChatApp /> : <Login />}
        
        
        
    </div>
  )
}

export default App;

// TODO: 1. Add Search for collection name
//TODO: 2. Add collection
//TODO 3: Make collection private or public
//TODO 4: Add Modals
//TODO 5: Add cookie so i dont get kicked out of webpage
//TODO 6: Better the login page
//TODO 7: Add Redux