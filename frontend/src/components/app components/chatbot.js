/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BAZyAeFxqzS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Chatbot() {

  function sendChatMessage() {
    console.log("Sending chat message...")
  }

  return (
    <div className="flex flex-col w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <BotIcon className="h-6 w-6" />
          <span className="font-semibold">Rehaish bot</span>
        </div>
        <Button size="icon" variant="ghost">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="rounded-xl bg-gray-100 p-4 text-sm dark:bg-gray-800">Hi there! How can I help you today?</div>
          <div className="rounded-xl bg-gray-100 p-4 text-sm dark:bg-gray-800">
            To book a room, simply type "Book a room" and I'll guide you through the process.
          </div>
          <div className="rounded-xl bg-gray-100 p-4 text-sm dark:bg-gray-800">
            To book a room, simply type "Book a room" and I'll guide you through the process.
          </div>
          <div className="rounded-xl bg-gray-100 p-4 text-sm dark:bg-gray-800">
            To book a room, simply type "Book a room" and I'll guide you through the process.
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex rounded-lg border dark:border-gray-800">
            <Input
              className="rounded-l-none flex-1 rounded-none border-l-0 border-r-0 border-t-0 border-b-0"
              placeholder="Type a message..."
              type="text"
            />
            <Button className="rounded-l-none" variant="ghost" >
              <PlaneIcon className="h-4 w-4"  onClick={sendChatMessage}/>
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function PlaneIcon(props) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
