import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div class="navbar-nav">
                    <Link class='nav-link' to='/Dashboard'>Dashboard</Link>
                    <Link class='nav-link' to='/ProgressPage'>progress</Link>
                    <Link class='nav-link' to='/WorkoutSelection'>work out</Link>
                    </div>
                </div>
            </nav>
            
        </React.Fragment>
    );
}


