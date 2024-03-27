import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../ui/table"


const HostelDetails = ({ hostel }) => {
    return(<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div className="border shadow-sm rounded-lg">
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Hostel ID</TableHead>
            <TableHead>Hostel Name</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead className="hidden md:table-cell">Rooms</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">Sunset Hostel</TableCell>
            <TableCell className="hidden md:table-cell">Miami, Florida</TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell className="font-medium">City Lights Hostel</TableCell>
            <TableCell className="hidden md:table-cell">New York City, New York</TableCell>
            <TableCell className="hidden md:table-cell">30</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell className="font-medium">Tranquil Inn</TableCell>
            <TableCell className="hidden md:table-cell">Sedona, Arizona</TableCell>
            <TableCell className="hidden md:table-cell">20</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell className="font-medium">Beachcomber Hostel</TableCell>
            <TableCell className="hidden md:table-cell">Honolulu, Hawaii</TableCell>
            <TableCell className="hidden md:table-cell">40</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">5</TableCell>
            <TableCell className="font-medium">Alpine Bunkhouse</TableCell>
            <TableCell className="hidden md:table-cell">Aspen, Colorado</TableCell>
            <TableCell className="hidden md:table-cell">15</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </main>
  )
}

module.exports = HostelDetails