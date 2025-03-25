import {  Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"; 
import { Avatar, AvatarImage } from "./ui/avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white">
        <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
        </div>
      
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
            <h1 className="font-medium text-lg">Company Name</h1>
           <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
            <h1 className="font-bold text-lg my-2"> Title</h1>
            <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim ipsa incidunt suscipit magnam sapiente animi similique inventore, saepe molestiae fugit ratione mollitia iste provident, commodi dignissimos tenetur veritatis illo!</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost" >Full Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant='outline'>Details</Button>
        <Button className='bg-[#7209b7]'>Save For Later</Button>
      </div>

    </div>
  );
};

export default Job;
