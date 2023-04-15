import React from 'react';

export default function Dashboard(props){
    return(
        <React.Fragment>
            <div class='row justify-content-center'>
                <div class='col-sm text-center'>
                    <button type="button" class="btn btn-primary" onClick={props.navToSelPage}>Record a new workout</button>
                    <br></br>
                    <button type="button" class="btn btn-primary" onClick={props.navToProgPage}>View your progress</button>
                </div>
            </div>
        </React.Fragment>
    );
}