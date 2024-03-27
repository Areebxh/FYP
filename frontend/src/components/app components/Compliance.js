import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card";
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export default function Compliance() {


    return( <div className="border rounded-lg p-4">
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