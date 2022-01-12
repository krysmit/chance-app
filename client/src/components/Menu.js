import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/dashboard/dashboard.html">Dashboard</a></li>
                <li><a href="/dashboard/jobs.html">Jobs</a></li>
                <li><a href="/dashboard/prevJobs.html">Previous Jobs Applied</a></li>
                <li><a href="/profile.html">Profile</a></li>
            </ul>
        );
    }
}