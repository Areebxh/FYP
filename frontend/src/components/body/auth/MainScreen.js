/**
 * v0 by Vercel.
 * @see https://v0.dev/t/seox8L9Sklk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
const ban= require('../../../assets/n3.jpg')
const besthostel= require('../../../assets/main1.jpg')
const location= require('../../../assets/m2.jpg')
const facilities= require('../../../assets/fac.jpg')
const cctv= require('../../../assets/cctv.jpg')
const ban1= require('../../../assets/sofa.jpg')
const pic= require('../../../assets/p2.png')
const pic1= require('../../../assets/p1.jpg')

const mainvid= require('../../../assets/vid2.mp4')





export default function MainScreen() {
  return (
    <div className="flex flex-col gap-4">
      
      <div className="grid w-full min-h-[400px] items-center justify-center gap-4">
        <div className="container grid items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-typewriter">Welcome to Rehaish</h1>
            <p className="mx-auto max-w-3xl text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The perfect place to stay. Comfortable, affordable, and friendly.
            </p>
          </div>
        </div>
        <video
          alt="Hero"
          className="absolute inset-0 z-[-1] object-cover object-center"
          // height="100vh"
          src={mainvid}
          style={{
            aspectRatio: "1440/600",
            objectFit: "cover",
            minHeight:"70vh"
          }}
          autoPlay
          loop
          muted
          
         
          width="1440"
        />
      </div>
      <div className="grid w-full items-start gap-4 mt-20">
        <div className="container grid items-start justify-center gap-8 px-4 py-8 text-center md:py-12 md:gap-10 md:px-6 lg:gap-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a variety of services to make your stay comfortable and enjoyable.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 md:max-w-3xl md:grid-cols-2 lg:grid-cols-4 xl:gap-8 xl:max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-1">
              <img
                alt="Service"
                className="rounded-lg"
                height="200"
                src={besthostel}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Best Hostels</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hostels that feel like home even you are away from home.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <img
                alt="Service"
                className="rounded-lg"
                height="200"
                src={location}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Available at the most well known places near by your universities.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <img
                alt="Service"
                className="rounded-lg"
                height="200"
                src={facilities}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Facalities</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Keep yourself relax and rejuvenate with our multiple services.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <img
                alt="Service"
                className="rounded-lg"
                height="200"
                src={cctv}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">CCTV</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Let us take care of you and provide you a secure environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-8 lg:flex-row lg:gap-12 lg:text-left">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Affordable. Safe. Convenient.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We make it easy for students to find the perfect place to stay. Whether you're looking for a single room
                or a shared apartment, we've got you covered.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src={ban1}
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 lg:gap-10 lg:flex-row lg:gap-12 lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Students</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Why choose our platform? We offer a wide range of options, secure bookings, and a seamless experience.
                Focus on your studies while we take care of your accommodation.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-start justify-start min-[400px]:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Easy to use
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Secure payments
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Wide selection
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Safe & verified
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Affordable options
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Customer support
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 lg:gap-10 lg:flex-row lg:gap-12 lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Hostel Owners</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Why list with us? Reach a global audience of students, manage your bookings with ease, and showcase your
                property with beautiful photos and detailed descriptions.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-start justify-start min-[400px]:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Easy to list
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Global reach
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Manage bookings
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Beautiful listings
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Secure payments
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Customer support
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 lg:gap-10 lg:flex-row lg:gap-12 lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Students</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our users have to say about their experience.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col gap-2">
                <img
                  alt="User"
                  className="rounded-full object-cover aspect-square"
                  height="400"
                  src={pic}
                  width="400"
                />
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Areeb Ahmad</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Amazing experience! I found the perfect place to stay during my semester abroad. The process was
                    smooth, and the staff was very helpful. I highly recommend this platform to other students.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="User"
                  className="rounded-full object-cover aspect-square"
                  height="400"
                  src={pic1}
                  width="400"
                />
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    As a hostel owner, I've seen an increase in bookings since listing my property on this platform. The
                    interface is user-friendly, and I can easily manage my inventory and pricing. The support team is
                    also very responsive. I'm happy with my decision to partner with this platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 lg:gap-10 lg:flex-row lg:gap-12 lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
    
    </div>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
