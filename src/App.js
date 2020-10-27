import {useState} from 'react';

import Users from './Components/Users';
import './App.css';


function App() {

  const [users, setUserState] = useState([
    {name:"Emma", points: 0},
    {name:"Noah", points: 0},
    {name:"James", points: 0},
    {name:"William", points: 0},
    {name:"Olivia", points: 0}, 
]);
const sortdata = (lists)=> { 
lists.sort((a,b)=> {
  if(a.points === b.points){
    return (a.name > b.name) ? 1: ((b.name > a.name) ? -1:0)
  }else{
    return b.points- a.points;
  }
});
};

const incrementHandler= index => {
    const updatedPoints = users[index].points + 1;
    const updatedUsers = [
         ...users,
    ];
    updatedUsers[index].points = updatedPoints;
    setUserState(updatedUsers);
    sortdata(updatedUsers);
  };
  const decrementHandler= index => {
    const oldPoints = users[index].points;
    if(oldPoints <= 0){
        return;
    }
    const updatedPoints = oldPoints - 1;
    const updatedUsers = [
     ...users
];
    updatedUsers[index].points = updatedPoints;
    setUserState(updatedUsers);
    sortdata(updatedUsers);

   };

  const userNames = users.map((user, index) => {
    return <Users key={user.name}
                  user={user.name}
                  points={user.points}
                  increment={()=> incrementHandler(index)}
                  decrement = {() => decrementHandler(index)}/>
  });
  
  return (
    <div className="App">
      {userNames}
    </div>
  );
}

export default App;
