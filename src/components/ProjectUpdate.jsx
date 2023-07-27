import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../Mutations/ProjectsMutation";
import { GET_PROJECT } from "../Queries/ProductQueries";

const ProjectUpdate = ({ data }) => {
  const [name, setName] = useState(data.project.name);
  const [description, setDescription] = useState(data.project.description);
  const [status,setStatus] = useState("new")
//   const [status, setStatus] = useState(() => {
//     switch (data.project.status) {
//       case "Not Started":
//         return "new";
//       case "In Progress":
//         return "progress";
//       case "Completed":
//         return "completed";
//       default:
//         throw new Error(`Unknown status: ${data.project.status}`);
//     }
//   });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: data.project.id,
      name,
      description,
      status,
    },
    refetchQueries:[{query:GET_PROJECT,variables:{
        id:data.project.id
    }}]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all fields");
    }
    updateProject(name, description, status);

   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={"new"}>Not Started</option>
            <option value={"progress"}>In Progress</option>
            <option value={"completed"}>Completed</option>
          </select>
        </div>
        <button
          type="submit"
        
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectUpdate;
