// Desc: Jobs page
import Navbar from "./ui/Component/Navbar";
import FilterCard from "./FilterCard";
import Job from "./job";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Jobs = () => {

  const {allJobs} = useSelector(store => store.job);
  
  return (
    <div>
      <Navbar />     
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className='w-20%'>
            <FilterCard />
          </div>
          {
            allJobs.length <= 0 ?<span>Job not found</span> : (
                <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                    <div className="grid grid-cols-3 gap-4">
                        {
                        allJobs.map((job) => (
                        <div key={job?._id}>
                               <Job job={job}/>
                          </div>
                        ))
                      }
                     </div>             
                </div>
            )       
          }
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Jobs;
