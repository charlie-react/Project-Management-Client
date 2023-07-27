import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../Mutations/ProjectsMutation";
import { GET_PROJECTS } from "../Queries/ProductQueries";

const DeleteProject = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate("/"),
    refetchQueries:[{query:GET_PROJECTS}]
    // update(cache, { data: { deleteProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: {
    //       projects: projects.filter(
    //         (project) => project.id !== deleteProject.id
    //       ),
    //     },
    //   });
    // },
  });

  return (
    <div className="mt-5 d-flex ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete
      </button>
    </div>
  );
};

export default DeleteProject;
