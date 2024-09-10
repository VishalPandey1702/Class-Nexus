
"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 
import Login from '../app/pages/signin'; 
import Signup from '../app/pages/signup'; 
import logo from "../img/Add a heading.jpg";

export default function AppBar() {
  const { data: session, status } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const router = useRouter(); // Initialize router

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false }); 
    router.push('/'); // 
  };

  

  const handleDashboardClick = () => {
    if (status === "loading") {
      console.log("Session is still loading");
      return;
    }

    if (!session) {
      console.log("No session found, redirecting to login page...");
      router.push('/signin');
      return;
    }

    const user = session.user;
    
    // Check and log user data to ensure it’s available
    if (!user) {
      console.log("User is undefined");
      return;
    }

    console.log("User session data: ", user);

    // Redirect based on user role
    if (user.isteacher) {
      router.push('/teacherdashboard');
    } else if (user.isstudent) {
      router.push('/studentdashboard');
    } else if (user.isadmin) {
      router.push('/admindashboard');
    } else {
      router.push('/defaultdashboard'); 
    }
  };


  return (
    <>
      <header className="flex items-center justify-between bg-white border-2 border-black rounded-md shadow-lg px-6 py-1 mb-1">
        <Link href="/" className="flex items-center text-lg font-bold text-gray-900">
          {/* <Image src={logo} alt="Logo" width={50} height={50} /> Adjust width and height as needed */}
          <span className="text-center pl-3 ml-2 hidden md:inline text-2xl font-semibold text-black font-sans">
  ClassNexus
</span>
        </Link>

        <div className="flex items-center space-x-4">
          {status === "loading" ? (
            <p className="text-gray-500">Loading...</p>
          ) : session ? (
            <>
              <p className="text-lg font-medium text-gray-800">{session.user?.name}</p>
              
              <button
                onClick={handleDashboardClick}
                className="inline-flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium  text-gray-900 border border-black shadow-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-transform hover:scale-105 hover:shadow-xl">
                <DashboardIcon className="h-5 w-5" />
                {/* <span>Dashboard</span> */}
              </button>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium text-gray-900 border border-black shadow-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <LogOutIcon className="h-5 w-5" />
                {/* <span>Sign Out</span> */}
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="inline-flex  items-center space-x-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogInIcon className="h-5 w-5" />
                {/* <span>Login</span> */}
              </button>
              <button
                onClick={handleSignupClick}
                className="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {/* <SignUpIcon className="h-5 w-5" /> */}
                <span>Signup</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {showLogin && <Login />}
      {showSignup && <Signup />}
    </>
  );
}

function LogInIcon(props) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function SignUpIcon(props) {
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
      <path d="M3 12l4-4 4 4m4 0l4-4m-4 4v9M5 19h14" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg class="h-8 w-8 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
  );
}

function DashboardIcon(props) {
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
      <path d="M3 13h4v9H3v-9zm7-5h4v14h-4V8zm7 5h4v9h-4v-9z" />
    </svg>
  );
}