
"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const TeacherDashboardComponent = dynamic(() => import("../../../component/TeacherDashboardComponent"), {
    suspense: true
});

function TeacherDashboard() {
    return (
        <Suspense fallback={<p>Loading dashboard...</p>}>
            <TeacherDashboardComponent />
        </Suspense>
    );
}

export default TeacherDashboard;