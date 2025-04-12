
import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const AppliedJobTable = () => {
  return (
    <div>
          <Table>
             <TableCaption>A list of applied jobs</TableCaption>
             <TableHeader>
                <TableRow>
                     <TableHead>Company</TableHead>
                     <TableHead>Position</TableHead>
                     <TableHead>Location</TableHead>
                     <TableHead>Applied on</TableHead>
                     <TableHead className='text-right'>Status</TableHead>
                </TableRow>
             </TableHeader>
             <TableBody>
                  {
                    [1,2,3,4,5].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>Google</TableCell>
                            <TableCell>Frontend Developer</TableCell>   
                            <TableCell>Bangalore</TableCell>
                            <TableCell>12/12/2021</TableCell>
                            <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                  }

             </TableBody>
          </Table>
    </div>
  )
}

export default AppliedJobTable
