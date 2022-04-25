import React, { useState } from 'react';
import Axios from 'axios';

function ProjectForm() {
  const url = 'http://127.0.0.1:8000/api/projects/';
  const [data, setData] = useState({
    name: "",
    link_repository: "",
    users_list: "",
  });

  function submit(ev){
      ev.preventDefault();
      Axios.post(url, {
        name: data.name,
        link_repository: data.link_repository,
        users_list: parseInt(data.users_list)
      }, { headers })
      .then(res=>{
        console.log(res.data);
      }
        )
  }

  function handleInput(ev) {
    const newdata={...data}
    newdata[ev.target.id] = ev.target.value
    setData(newdata)
    console.log(newdata);
  }
  return (
    <div>
      <form onSubmit={(ev)=> submit(ev)} >
        <input onChange={(ev)=>handleInput(ev)} id="name" value={data.name} placeholder="name" type="text"></input>
        <input onChange={(ev)=>handleInput(ev)} id="link_repository" value={data.link_repository} placeholder="link_repository" type="url"></input>
        <input onChange={(ev)=>handleInput(ev)} id="users_list" value={data.users_list} placeholder="users_list" type="number"></input>

        <button >Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
