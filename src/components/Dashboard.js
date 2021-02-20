import React from 'react';

const Dashboard = () => {
    return (
        <div className="text-center mt-5">
            <nav class="nav flex-column">
                <a class="nav-link text-white fs-1 my-3" style={{border: "5px white solid"}} href="/quick-select">QuickSelect Ranker</a>
                <a class="nav-link text-white fs-1 my-3" style={{border: "5px white solid"}} href="/cup">Cup Ranker</a>
            </nav>
        </div>
    );
}

export default Dashboard;