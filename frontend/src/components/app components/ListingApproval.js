

import {Link} from "react-router-dom"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../ui/dropdown-menu"

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card"

export default function ListingApproval() {
  return (
    <div key="1" className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <nav className="flex gap-4">
            <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
              Listings
            </Link>
            <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
              Compliance
            </Link>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="grid gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">New Hostel Listings</h1>
              <p className="text-gray-500 text-sm dark:text-gray-400">Review and approve new hostel listings</p>
            </div>
            <div className="flex items-center gap-2">
              <SearchIcon className="w-4 h-4 fill-primary" />
              <Input className="min-w-[200px] w-full max-w-[300px] ml-auto" placeholder="Search..." type="search" />
            </div>
          </div>
          <div className="grid gap-4 mt-4">
            <Card className="border">
              <CardHeader className="grid md:grid-cols-[1fr_auto] items-start p-4 gap-4">
                <div className="grid gap-1">
                  <CardTitle className="text-base font-semibold">Beachfront Backpackers Hostel</CardTitle>
                  <CardDescription className="text-sm">
                    Located in the heart of the city, this hostel offers stunning views of the ocean. Perfect for solo
                    travelers and groups.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" variant="outline">
                    Reject
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 grid md:grid-cols-[1fr_auto] items-start gap-4">
                <div className="grid gap-2">
                  <div className="text-sm">
                    <div className="font-semibold">Location</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      123 Ocean View, Cityville, CV1 2WT, United Kingdom
                    </p>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Amenities</div>
                    <p className="text-gray-500 dark:text-gray-400">Free Wi-Fi, Bar, Common Room, Laundry Facilities</p>
                  </div>
                </div>
                {/* <img
                  alt="Hostel Image"
                  className="aspect-2 object-cover rounded-md overflow-hidden border"
                  height={200}
                  src=""
                  width={400}
                /> */}
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="grid md:grid-cols-[1fr_auto] items-start p-4 gap-4">
                <div className="grid gap-1">
                  <CardTitle className="text-base font-semibold">City Lights Hostel</CardTitle>
                  <CardDescription className="text-sm">
                    Modern and stylish, this hostel is perfect for travelers looking for a comfortable stay.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" variant="outline">
                    Reject
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 grid md:grid-cols-[1fr_auto] items-start gap-4">
                <div className="grid gap-2">
                  <div className="text-sm">
                    <div className="font-semibold">Location</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      456 City Center, Metropolis, MC3 4CL, United Kingdom
                    </p>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Amenities</div>
                    <p className="text-gray-500 dark:text-gray-400">Free Wi-Fi, Bar, Common Room, Laundry Facilities</p>
                  </div>
                </div>
                {/* <img
                  alt="Hostel Image"
                  className="aspect-2 object-cover rounded-md overflow-hidden border"
                  height={200}
                  src=""
                  width={400}
                /> */}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="grid gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">Existing Hostel Listings</h1>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                Spot-check existing hostel listings for policy compliance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <SearchIcon className="w-4 h-4 fill-primary" />
              <Input className="min-w-[200px] w-full max-w-[300px] ml-auto" placeholder="Search..." type="search" />
            </div>
          </div>
          <div className="grid gap-4 mt-4">
            <Card className="border">
              <CardHeader className="grid md:grid-cols-[1fr_auto] items-start p-4 gap-4">
                <div className="grid gap-1">
                  <CardTitle className="text-base font-semibold">Seaside Breeze Hostel</CardTitle>
                  <CardDescription className="text-sm">
                    Located near the beach, this hostel offers a tranquil escape for guests.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <Button size="sm">Compliant</Button>
                  <Button size="sm" variant="outline">
                    Non-compliant
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 grid md:grid-cols-[1fr_auto] items-start gap-4">
                <div className="grid gap-2">
                  <div className="text-sm">
                    <div className="font-semibold">Location</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      789 Beachside Avenue, Seaview, SV2 3BT, United Kingdom
                    </p>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Amenities</div>
                    <p className="text-gray-500 dark:text-gray-400">Free Wi-Fi, Bar, Common Room, Laundry Facilities</p>
                  </div>
                </div>
                {/* <img
                  alt="Hostel Image"
                  className="aspect-2 object-cover rounded-md overflow-hidden border"
                  height={200}
                  src=""
                  width={400}
                /> */}
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="grid md:grid-cols-[1fr_auto] items-start p-4 gap-4">
                <div className="grid gap-1">
                  <CardTitle className="text-base font-semibold">Urban Oasis Hostel</CardTitle>
                  <CardDescription className="text-sm">
                    This hostel is a hidden gem in the city, offering a peaceful retreat for travelers.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <Button size="sm">Compliant</Button>
                  <Button size="sm" variant="outline">
                    Non-compliant
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 grid md:grid-cols-[1fr_auto] items-start gap-4">
                <div className="grid gap-2">
                  <div className="text-sm">
                    <div className="font-semibold">Location</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      101 Oasis Lane, Cityscape, CS1 4HQ, United Kingdom
                    </p>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Amenities</div>
                    <p className="text-gray-500 dark:text-gray-400">Free Wi-Fi, Bar, Common Room, Laundry Facilities</p>
                  </div>
                </div>
                {/* <img
                  alt="Hostel Image"
                  className="aspect-2 object-cover rounded-md overflow-hidden border"
                  height={200}
                  src=""
                  width={400}
                /> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
