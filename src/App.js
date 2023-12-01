import {useAuth0} from '@auth0/auth0-react'
import './App.css';

function App() {
  const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0()

  console.log("current user",user)
  return (
    <div className="App">
      {isAuthenticated&&<h3>{user.name}</h3>}
        {isAuthenticated ? (<button onClick={e=>logout()}>logout</button>):
      (<button className='btn' onClick={e=>loginWithRedirect()}>Login with redirect</button>)}
    </div>
  );
}

export default App;
