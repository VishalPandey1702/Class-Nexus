"use client"
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

export const ParticipationChart = ({ participationData, totalQuestions, correctPercentage, incorrectPercentage, unattemptedPercentage }) => {
    Chart.register(ArcElement);
    const createPieData = () => {
        if (!participationData) return null;

        const correct = JSON.parse(participationData.correct).length;
        const incorrect = JSON.parse(participationData.incorrect).length;
        const total = parseInt(participationData.total, 10);
        const unattempted = total - (correct + incorrect);

        return {
            labels: ['Correct', 'Incorrect', 'Unattempted'],
            datasets: [{
                data: [correct, incorrect, unattempted],
                backgroundColor: ['#4CAF50', '#F44336', '#a594f9'],
                hoverBackgroundColor: ['#66BB6A', '#EF5350', '#a594f9']
            }]
        };
    };

    return (
        <div className="w-1/2 p-4 mt-12 bg-white text-black rounded-md shadow-md order-2">
            <h2 className="text-2xl font-semibold mb-4 text-center">Participation Data</h2>
            <div className="flex justify-center">
                <div className="relative w-64 h-64">
                    {createPieData() && <Pie data={createPieData()} options={{ responsive: true, maintainAspectRatio: false }} />}
                </div>
            </div>
            <div className="mt-4 text-black text-center">
                <p><strong>Total Participants:</strong> {totalQuestions}</p>
                <p><strong>Correct:</strong> {correctPercentage}%</p>
                <p><strong>Incorrect:</strong> {incorrectPercentage}%</p>
                <p><strong>Unattempted:</strong> {unattemptedPercentage}%</p>
                <p><strong>Correct Responses:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
                <p><strong>Incorrect Responses:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
            </div>
        </div>
    );
};