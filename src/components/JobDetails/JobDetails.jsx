import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job);

  const notify = () => {
    // saveJobApplication(id);
    toast("You have applied successfully!");
    saveJobApplication(idInt);}
  // {
  //   // 
  //   toast("You have applied successfully!");
  // }
    

  return (
    <div className="mb-5">
      <h2 className="text-3xl text-center text-purple-800">Job Details of: {job?.job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details Coming Here</h2>
          <p>{job?.company_name}</p>
          <p>
            Job Description: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications.
            {/* Other job details here */}
          </p>
        </div>
        <div className="border md:col-span-1 font-semibold text-center">
          <div className="bg-[#9873FF] p-4">
            <h4>Job Details</h4>
            <p>Salary: 100K - 150K (Per Month)</p>
            <p>Job Title: Product Designer</p>
            <p>Phone: 01750-00 00 00</p>
            <p>Email: info@gmail.com</p>
            <p>Address: Dhanmondi 32, Sukrabad, Dhaka, Bangladesh</p>
          </div>
          <button onClick={notify} className="mt-4 w-full rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
            Apply Now
          </button>
        </div>
      </div>
      {/* Ensure the ToastContainer is placed here */}
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
