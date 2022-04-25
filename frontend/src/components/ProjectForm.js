import React, { useState  } from 'react';


function ProjectForm() {
  const [data, setData] = useState({
    name: "",
    link_repository: "",
    users_list: "",
  });

  function submit(ev){
      ev.preventDefault();
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
