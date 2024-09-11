// import { useLoaderData, useParams } from "react-router-dom";


// const JobDetails = () => {
//     const jobs = useLoaderData();
//     const {id} = useParams();
//     console.log(id,jobs);
//     return (
//         <div>
//             <h2>Job Details Off</h2>
//         </div>
//     );
// };

// export default JobDetails;



import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    // const job = jobs.find(job => job.id === id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    
    return (
        <div>
          <h2>Job Details</h2>
           
        </div>
    );
};

export default JobDetails;
