import React, { Component, useState }  from 'react';
import { useFetch } from "./hooks";
import './App.css';





function App() {
  const [tasks, loading] = useFetch("http://localhost:9000/showAllTasks");

  return (

    <div className="App">
    <header className="App-header">
    <h1>Ma todo List</h1>
    {loading ? ("Chargement...") : (
      <ul className="list-group">
      {tasks && tasks.map((task,index) =>(
        <div className="row">
        {task.isFinish === true && (
                    <div class="col-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>
                    </div>
                    )}
                    {task.isFinish === false && (
                      <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>
                      </div>
                    )}
                    <div className="col-md-10">
                      <div className="list-group-item">

                        <div class="input-group">
                          <input id="nameText" type="text" class="form-control text-center" placeholder={task.name} readOnly></input>
                          <div class="input-group-btn">
                              <button type="button" class="btn btn-success">V</button>
                          </div>
                          <div class="input-group-btn">
                              <button type="button" class="btn btn-danger">X</button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
          )
        )
      } 
      </ul>
    )}
      
      </header>
    </div>
  );
}


export default App;
