import React from 'react';

export default function WorkoutSelection(props){
    function handleChoice(workout){
        console.log(workout.title);
        props.set(workout);
        props.navToRecPage();
    }
    return(
        <React.Fragment>
            <h2>Create a new workout</h2>
            <button type="button" class="btn btn-primary" onClick={props.navToCreatePage}>+</button>
            <h2>Repeat a previous workout</h2>
            {props.workouts.map(item =>{
                return(
                <button type="button" class="btn btn-primary" onClick={() => handleChoice(item)} key={item.id}>{item.title}</button>
                )
              })}
        </React.Fragment>
    );
}