import { RadioGroup } from "@radix-ui/react-radio-group"

const filterData = [
   {
      filterType: 'Location',
      array:["Delhi NCR","Bangalore","Hyderbad","Chennai"]
   },
   {    
        filterType: 'Role', 
        array:["Frontend Developer","Backend Developer","Full Stack Developer","DevOps"]
   },   
   {
        filterType: 'Salary',
        array:["0-3 LPA","3-6 LPA","6-10 LPA","10-15 LPA"]
   }
]
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {
        filterData.map((filter, index) => (
          <div key={index} className="mt-3">
            <h1 className="font-bold text-lg">{filter.filterType}</h1>
            {
             filter.array.map((item, index) => (
              <label key={index} className="flex items-center mt-2">
                <input type="radio" className="mr-2" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  ) 
}

export default FilterCard
