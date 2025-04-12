import { useState } from "react";
import {Dialog,DialogContent,DialogFooter,DialogHeader,DialogTitle} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
      const file = e.target.files[0];
      setInput({ ...input, file });
      
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);  
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
      formData.append("file", input.file);
    }
      try{
             setLoading(true);
          const res = await  axios.post( `${USER_API_END_POINT}/profile/update`, formData, {
            headers:{
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
      }
      catch(err){
        console.log(err);
        toast.error(err.response.data.message);
      }finally{
        setLoading(false);
      }
     setOpen(false);
    console.log(input);
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onIteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>update profile</DialogTitle>
          </DialogHeader>
          <form onSubmit = {submitHandler}>
            <div className="grid gap-4 my-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="name" className="text-center">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={input.fullName}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="email" className="text-center">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="phoneno." className="text-center">
                  Phone Number
                </Label>
                <Input
                  id="phoneno."
                  name="phoneno."
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="bio" className="text-center">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  type="text"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="skills" className="text-center">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="file" className="text-center">
                  File
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={fileChangeHandler}
                  accept="application/pdf"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-2">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
                </Button>
              ) : (
                <Button type="submit" className="w-full my-2">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
