import React, {useState} from 'react'; 
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';


function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }  

  return (
    <div>
      <h1>Hello Sam!</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
        <button onClick={searchQuery}>Search Google</button>
        {userQuery}
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Stories />
    </div>
  )
}

export default App;