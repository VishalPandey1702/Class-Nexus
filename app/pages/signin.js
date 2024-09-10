

// "use client";

// import { useState } from 'react';
// import { signIn, useSession, signOut } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// const SignIn = () => {
//     const { data: session } = useSession();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         signIn('credentials', {
//             redirect: false,
//             email,
//             password,
//         }).then((response) => {
//             if (response?.error) {
//                 console.error("Authentication error:", response.error);
//             } else {
//                 // Redirect to the dashboard upon successful sign-in
//                 router.push('/');
//             }
//         });
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-700 p-4">
//             <h1 className="text-4xl font-bold text-white mb-8">Welcome Back!</h1>
//             {!session ? 
//             (
//                 <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-2xl">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full px-4 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-lg"
//                         >
//                             Sign In
//                         </button>
//                     </form>
                    
//                     <div className="mt-6 text-center">
//                         <p className="text-gray-600">Or continue with</p>
//                         <button
//                             onClick={() => signIn('google')}
//                             className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-lg"
//                         >
//                             Google
//                         </button>
//                     </div>
//                 </div>
//             )
//              : 
//             (
//                 <div className="text-center text-white">
//                     <p className="text-xl">Signed in as {session.user?.email}</p>
//                     <button
//                         onClick={() => {
//                             signOut();
//                             router.push('/');  // Optionally redirect to home after signing out
//                         }}
//                         className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors shadow-lg"
//                     >
//                         Sign Out
//                     </button>
//                 </div>
                
//             )
//             }
//         </div>
//     );
// };

// export default SignIn;



"use client";

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            // Redirect to the home page if the user is already authenticated
            router.push('/');
        }
    }, [status, router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn('credentials', {
            redirect: false,
            email,
            password,
        }).then((response) => {
            if (response?.error) {
                console.error("Authentication error:", response.error);
            } else {
                // Redirect to the home page upon successful sign-in
                router.push('/');
            }
        });
    };

    if (status === 'authenticated') {
        // If the user is authenticated, do not render anything
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white p-4">

            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        Sign In
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-gray-600">Or continue with</p>
                    <button
                        onClick={() => signIn('google')}
                        className="w-full mt-4 px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;