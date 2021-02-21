import React from 'react';

const Dashboard = () => {
    return (
        <div className="text-center mt-5">
            <nav class="nav flex-column d-inline-flex">
                <a class="nav-link text-white fs-1 my-3 border border-white border-5" href="/quick-select">
                    QuickSelect Ranker
                    <p className="fs-6">A tool to narrow down options based on the quick select algorithm</p>
                </a>
                <a class="nav-link text-white fs-1 my-3 border border-white border-5" href="/cup">
                    Cup Ranker
                    <p className="fs-6">A tool to find the best candidate using a cup format</p>
                </a>
            </nav>
        </div>
    );
}

export default Dashboard;