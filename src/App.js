import './App.css';
import * as React from 'react';
import { Completion, GetGroups, GetTodoSteps } from './ai';
import { GroupList } from './GroupList';
import {useState} from "react"
import { Todo } from './Todo';

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from './Spinner';

function App() {
  const problemRef = React.useRef();
  const [problem,setProblem] = useState("");
  const [groups,setGroups] = useState([]);
  const [selectedGroup,setSelectedGroup] = useState({});
  const [groupsLoading,setGroupsLoading] = useState(false);
  const [todoSteps,setTodoSteps] = useState([]);
  const [todoLoading,setTodoLoading] = useState(false);
   
  const handleProblemSubmit = (event) => {
    event.preventDefault();

    //Set Problem state
    setProblem(problemRef.current.value);
    //Get Groups
    setGroupsLoading(true);
    GetGroups(problemRef.current.value).then((g)=> {
      setGroups(g);
      setGroupsLoading(false);
    });
  }

   const handleGroupChange = (event) => {
      setSelectedGroup(event.target.value);
   }


  const handleGroupSubmit = (event) => {
    event.preventDefault();

    setTodoLoading(true);

    GetTodoSteps(problem,selectedGroup).then((theSteps) => {
      setTodoLoading(false);
      console.log("Steps");
      console.log(theSteps);
      setTodoSteps(theSteps);
    });
    
   
  }



  return (
    <div className='App bg-dark text-light'>
      <h1>Problem Survey</h1>
      <form name="problemForm">
        <label htmlFor="problem">Problem to solve?</label>
        <input type="text" name="problem" ref={problemRef}></input>
        <Button onClick={handleProblemSubmit}>Submit Problem</Button>
      </form>
      
        <GroupList groups={groups} onGroupChange={handleGroupChange} groupSubmit={handleGroupSubmit} groupsLoading={groupsLoading}></GroupList>
        
        <Todo steps={todoSteps} group={selectedGroup} goal={problem} todoLoading={todoLoading}></Todo>
    </div>
    
  );
}

export default App;
