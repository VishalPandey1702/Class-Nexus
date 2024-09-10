// import Image from "next/image";
// import Link from "next/link"; // For navigation to different parts of the site

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex flex-col items-center justify-center py-8 px-4">
//       {/* Main Content */}
//       <main className="flex flex-col items-center justify-center mt-10 text-center">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//           Welcome to the <span className="text-blue-600">Class Delivery Tool</span>
//         </h1>
//         <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
//           The all-in-one platform designed to enhance teaching and learning experiences. 
//           Whether you're a teacher or a student, our tool provides seamless integration for 
//           class management, interactive learning, and real-time engagement.
//         </p>

//         {/* Features Section */}
//         <section className="w-full max-w-6xl mt-12 px-4">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//             Key Features
//           </h2>
//           <div className="flex flex-col md:flex-row md:space-x-8">
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Class Delivery Tool
//               </h3>
//               <p className="text-gray-600">
//                 Effortlessly manage your classes with our intuitive delivery tool. Create, schedule, 
//                 and deliver lessons with just a few clicks, making the teaching process streamlined 
//                 and efficient.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 One-to-One Interaction
//               </h3>
//               <p className="text-gray-600">
//                 Facilitate personalized learning through one-to-one interactions. Our platform allows 
//                 teachers to engage directly with students, providing tailored feedback and support.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 User-Friendly UI
//               </h3>
//               <p className="text-gray-600">
//                 Enjoy a user-friendly interface designed for both students and teachers. Navigate 
//                 effortlessly through the platform with a clean and intuitive design that enhances 
//                 the learning experience.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Links to Features */}
//         <section className="w-full max-w-4xl mt-12 px-4">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//             Explore More
//           </h2>
//           <div className="flex flex-col md:flex-row md:space-x-6">
//             <Link href="/class-delivery" className="bg-blue-600 text-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold mb-4">Class Delivery Tool</h3>
//               <p>
//                 Manage your classes effectively with our comprehensive tool. 
//                 <span className="underline text-blue-200"> Learn more</span>.
//               </p>
//             </Link>
//             <Link href="/exam-portal" className="bg-green-600 text-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold mb-4">Exam Portal</h3>
//               <p>
//                 Access and manage exams with ease through our dedicated exam portal. 
//                 <span className="underline text-green-200"> Discover more</span>.
//               </p>
//             </Link>
//           </div>
//         </section>

//         {/* Real-Time Data Section */}
//         <section className="w-full max-w-4xl mt-12 px-4">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//             Real-Time Data Insights
//           </h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <p className="text-gray-600">
//               Teachers can view real-time data on question attempts and coding activities. 
//               Monitor progress, analyze performance, and make informed decisions with up-to-date 
//               information at your fingertips.
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="mt-auto py-6 bg-gray-900 w-full">
//         <div className="container mx-auto text-center text-gray-400">
//           &copy; {new Date().getFullYear()} <span className="text-white">Class Delivery Tool</span>. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link"; // For navigation to different parts of the site

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex flex-col items-center justify-center py-8 px-4">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center mt-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to the <span className="text-blue-600">Class Delivery Tool</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          The all-in-one platform designed to enhance teaching and learning experiences. 
          Whether you&apos;re a teacher or a student, our tool provides seamless integration for 
          class management, interactive learning, and real-time engagement.
        </p>

        {/* Features Section */}
        <section className="w-full max-w-6xl mt-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Class Delivery Tool
              </h3>
              <p className="text-gray-600">
                Effortlessly manage your classes with our intuitive delivery tool. Create, schedule, 
                and deliver lessons with just a few clicks, making the teaching process streamlined 
                and efficient.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                One-to-One Interaction
              </h3>
              <p className="text-gray-600">
                Facilitate personalized learning through one-to-one interactions. Our platform allows 
                teachers to engage directly with students, providing tailored feedback and support.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                User-Friendly UI
              </h3>
              <p className="text-gray-600">
                Enjoy a user-friendly interface designed for both students and teachers. Navigate 
                effortlessly through the platform with a clean and intuitive design that enhances 
                the learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Links to Features */}
        <section className="w-full max-w-4xl mt-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Explore More
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <Link href="/class-delivery" className="bg-blue-600 text-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Class Delivery Tool</h3>
              <p>
                Manage your classes effectively with our comprehensive tool. 
                <span className="underline text-blue-200"> Learn more</span>.
              </p>
            </Link>
            <Link href="/exam-portal" className="bg-green-600 text-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Exam Portal</h3>
              <p>
                Access and manage exams with ease through our dedicated exam portal. 
                <span className="underline text-green-200"> Discover more</span>.
              </p>
            </Link>
          </div>
        </section>

        {/* Real-Time Data Section */}
        <section className="w-full max-w-4xl mt-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Real-Time Data Insights
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              Teachers can view real-time data on question attempts and coding activities. 
              Monitor progress, analyze performance, and make informed decisions with up-to-date 
              information at your fingertips.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-gray-900 w-full">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-white">Class Delivery Tool</span>. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}