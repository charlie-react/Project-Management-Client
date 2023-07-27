import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../Queries/ProductQueries";
import ProjectCard from "./ProjectCard"

const Products = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
    {data.projects.length > 0?(
        <div>
            <div className="row mt-4">
                {data.projects.map((project)=><ProjectCard key={project.id} project ={project} />)}
            </div>
        </div>
    ):(<p>
    No Projects
    </p>)}
    </>
  )
};

export default Products;
