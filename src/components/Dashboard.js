import React from 'react';

const Dashboard = () => {
    return (
        <div className="text-center mt-5">
            <nav class="nav flex-column">
                <a class="nav-link text-white fs-1 my-3" style={{border: "5px white solid"}} href="/quick-select">
                    QuickSelect Ranker
                    <p className="fs-6">A tool to narrow down options based on the quick select algorithm</p>
                </a>
                <a class="nav-link text-white fs-1 my-3" style={{border: "5px white solid"}} href="/cup">
                    Cup Ranker
                    <p className="fs-6">A tool to find the best candidate using a cup format</p>
                </a>
            </nav>
        </div>
    );
}

export default Dashboard;