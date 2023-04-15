import React from 'react';
import { useState } from 'react'

export default function WorkoutCreator(props){
    //need a temporary workout to fill in (with 1 blank exercise)
    let tempWorkout = {
        id: Math.floor(Math.random() * 1000),
        title: "",
        excercises: []
    };
    let tempExercise = {
        id: Math.floor(Math.random() * 1000),
        name: "",
        goalSets: 0,
        minReps: 0,
        maxReps: 0,
        completions: [
            {
                weight: 0,
                sets: 0,
                reps: 0
            }
        ]
    };
    //need a way to add a new blank exercise when 'add another' is pressed
    function enterExercise(event){
        event.preventDefault();
        //add exercise to workout
        tempWorkout.excercises.push(JSON.parse(JSON.stringify(tempExercise)));
        //reset tempExercise so a new exercise can be added with it
        tempExercise = {
            id: Math.floor(Math.random() * 1000),
            name: "",
            goalSets: 0,
            minReps: 0,
            maxReps: 0,
            completions: [
                {
                    weight: 0,
                    sets: 0,
                    reps: 0
                }
            ]
        }
    }

    //need a way to update to update the values of the exercise in the current working exercise
    function updateTempWorkoutName(name){
        tempExercise.name = name;
    }
    function updateTempExerciseName(name){
        tempExercise.name = name;
    }
    function updateSetGoal(sets){
        tempExercise.sets = sets;
    }
    function updateRepRange(range){
        if (range == 'light'){
            tempExercise.minReps = 8;
            tempExercise.maxReps = 12;
        }
        else if (range == 'heavy'){
            tempExercise.minReps = 1;
            tempExercise.maxReps = 5;
        }
    }

    function saveWorkout(event){
        event.preventDefault();
        let tempList = JSON.parse(JSON.stringify(props.workouts)); //props.workouts is undefined apparently
        console.log(tempList[0].title);
        tempList.push(tempWorkout);
        props.workoutsSetter(tempList);
    }
    
    return(
        <React.Fragment>
            <div>
                <form >
                <h3>name of workout</h3>
                <div class="input-group mb-3 'text-center">
                    <input type="text" class="form-control" aria-label="Text input with dropdown button"></input>
                </div>

                <form onSubmit={e => enterExercise(e)}>
                    <h4>add excercise</h4>
                    <div class="input-group mb-3 'text-center">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01" >Name</label>
                        </div>
                        <input type="text" class="form-control" onChange={e => updateTempWorkoutName(e.target.value)} aria-label="Text input with dropdown button"></input>
                    </div>
                    <div class="input-group mb-3 'text-center">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Goal sets per workout</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange={e => updateSetGoal(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="input-group mb-3 'text-center">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Rep Range</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange={e => updateRepRange(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="heavy">1-5</option>
                            <option value="light">8-12</option>
                        </select>
                    </div>
                <button type="submit" class="btn btn-primary">complete</button>
                </form>
                <button type="submit" class="btn btn-primary">complete</button>
                </form>
            </div>
        </React.Fragment>
    )
}