import { useParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  
  const {singleJob} = useSelector(store => store.job);
  const {user} = useSelector(store => store.auth);
  const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
  const [isApplied,setIsApplied] = useState(isIntiallyApplied); 

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

   const appliedJobHandler = async () => {
    try{ 
         const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
         console.log(res.data);
          if(res.data.success){
            setIsApplied(true); // update the local store
           const updatedSingleJob = {...singleJob, applications:[ ...singleJob.applications,{applicant:user?._id}]};
            dispatch(setSingleJob(updatedSingleJob)); // update the redux store
            toast.success(res.data.message);
          }
    }catch(error){ 
       console.log(error);
       toast.error(error.response.data.message);
    }
   }

  useEffect( () => {
    const fetchSingleJobs = async () => {
       try{
       const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
       if(res.data.success){
           dispatch(setSingleJob(res.data.job));
           setIsApplied(res.data.job.applications.some(application => application.applicant === user?.id)); // ensure the state is in sync with the fetched job data
       }
       }catch(error){
           console.log(error);
       }
    }
    fetchSingleJobs();
},[jobId,dispatch,user?.id])

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position} Position
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
         onClick={isApplied ? null : appliedJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already applied" : "Apply Now"}
        </Button>
      </div>
      <div>
        <h1 className="border-b-2 border-b-gray-300 font font-medium py-4">Job description</h1>
      </div>
      <div>
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experience} years</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">12-03-2025</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
