// "use client"
// import { SessionProvider } from "next-auth/react"

// export function Provider({ children }: {
//     children: React.ReactNode})
// {
//     return (
//         <SessionProvider session={null}>
//             {children}
//         </SessionProvider>
//     )
// }

"use client";
import { SessionProvider } from "next-auth/react";
import PropTypes from 'prop-types'; // Import PropTypes if you're using it for type checking

export function Provider({ children }) {
    return (
        <SessionProvider session={null}>
            {children}
        </SessionProvider>
    );
}

// Optionally define prop types if you're using PropTypes
Provider.propTypes = {
    children: PropTypes.node.isRequired,
};
