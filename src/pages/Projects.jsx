import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import { GET_PROJECT } from "../Queries/ProductQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProject from "../components/DeleteProject";
import ProjectUpdate from "../components/ProjectUpdate";

const Projects = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log(data);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to={"/"} className="btn btn-light btn-s ms-auto w-25 d-inline">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ProjectUpdate data={data} />

          <ClientInfo client={data.project.client} />

          <DeleteProject projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Projects;
