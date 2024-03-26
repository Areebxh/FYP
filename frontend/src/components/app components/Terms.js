
import { Button } from "../ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "../ui/tabs"
import { Textarea } from "../ui/textarea"

export default function Terms() {
  return (
    <div key="1" className="grid gap-4 w-full max-w-6xl mx-auto">
      <header className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Policy and Terms Editor</h1>
        </div>
        <Button size="sm" variant="outline">
          Save Changes
        </Button>
      </header>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold">Platform Policies</h2>
          <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Define the terms of service for your platform. Users will be required to accept these terms before accessing
            your app.
          </p>
        </div>
        <Tabs defaultValue="policies">
          <TabsList className="flex gap-4 border-b-0">
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent className="border-t p-0" value="policies">
            <Textarea className="min-h-[200px]" placeholder="Enter your policies here" />
          </TabsContent>
          <TabsContent className="border-t p-0" value="preview">
            <div className="p-4 border aspect-[1.5] dark:border-gray-800">
              <div className="prose max-w-none">
                {`
                                        <h1>Welcome to my app</h1>
                                        <p>This is some sample text.</p>
                                      `}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ShieldCheckIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
