import React from 'react';

import './components.css';

const ProjectItem = ({ project }) => {
  return (
    // возвращаем верстку
    <tbody>
      <tr>
        <td>{project.id}</td>
        <td>{project.name}</td>
        <td>{project.users_list}</td>
        <td>{project.link_repository}</td>
      </tr>
    </tbody>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>Users list</th>
          <th>Link</th>
        </tr>
      </thead>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </table>
  );
};

export default ProjectList;
