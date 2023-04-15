import React from 'react';

export default function WorkoutRecord(props){

    //create a temporary workout object that can have its properties overwritten by forms
    let tempWorkout = JSON.parse(JSON.stringify(props.workout));

    //add new completion of an excercise to end of completion array in temp workout for all excercises in workout
    for(let i = 0; i < tempWorkout.excercises.length; i++){
        tempWorkout.excercises[i].completions.push({
            weight: -1,
            sets: -1,
            reps: -1
        });
    }
    
    //function that can update the weight of an excersice in temp workout. takes a weight and ID of excersice
    function updateTempWeight(id,weight){
        //find ID of excercise
        console.log("got here");
        let excerciseIndex = tempWorkout.excercises.findIndex(element => element.id == id);
        //the following line looks rediculous but it overwrites the weight of the temporary completion
        tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].weight = Number(weight);

        //console.log(tempWorkout.excercises[excerciseIndex].name);
        //console.log(tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].weight);
    }
    
    //function that can update the sets of an excersice in temp workout. takes a set and ID of excersice
    function updateTempSets(id,sets){
        //find ID of excercise
        console.log("got here");
        let excerciseIndex = tempWorkout.excercises.findIndex(element => element.id == id);
        //the following line looks rediculous but it overwrites the sets of the temporary completion
        tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].sets = Number(sets);

        //console.log(tempWorkout.excercises[excerciseIndex].name);
        //console.log(tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].weight);
    }

    //function that can update the reps of an excersice in temp workout. takes a rep and ID of excersice
    function updateTempReps(id,reps){
        //find ID of excercise
        console.log("got here");
        let excerciseIndex = tempWorkout.excercises.findIndex(element => element.id == id);
        //the following line looks rediculous but it overwrites the reps of the temporary completion
        tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].reps = Number(reps);

        //console.log(tempWorkout.excercises[excerciseIndex].name);
        console.log(tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].weight);
        console.log(tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].sets);
        console.log(tempWorkout.excercises[excerciseIndex].completions[tempWorkout.excercises[excerciseIndex].completions.length - 1].reps);
    }


    //update the workout object upon submission of the form
    function handleSubmit(event,id){
        event.preventDefault();

        //copy list of workouts
        let tempWorkoutList = props.workouts;

        //find workout with same ID
        let workoutIndex = tempWorkoutList.findIndex(element => element.id == id);
            //append new record of excercises onto appropriate place
            tempWorkoutList[workoutIndex] = tempWorkout;

        //write array to be new modified array
        props.workoutsSetter(tempWorkoutList);
        props.navToDashboard();
    }

    //todo: add more logic to accomodate different excersise types and amount of weight/rep inc. accordingly
    function recommendChallenge(excercise){
        let currRecord = excercise.completions[excercise.completions.length - 1]

        //first case: don't increase weight if rep or set goal is not met
        if(currRecord.reps < excercise.maxReps || currRecord.sets < excercise.goalSets){
            //recommend goal sets with min reps if goal sets not reached
            if(currRecord.sets < excercise.goalSets){
                return({
                    weight: currRecord.weight,
                    sets: excercise.goalSets,
                    reps: excercise.minReps
                });
            }
            //if goal sets is reached, recommend weight increase
            else{
                return({
                    weight: currRecord.weight,
                    sets: excercise.goalSets,
                    reps: currRecord.reps + 1
                });
            }
        }

        //if the rep and set goal is met, increase the weight
        else{
            return({
                weight: currRecord.weight + 5,
                sets: excercise.goalSets,
                reps: excercise.minReps
            });
        }
    }
        
    
    return(
        <React.Fragment>
            <h2>Record workouts here</h2>
            <br />
            <form onSubmit={e => handleSubmit(e, props.workout.id)}>
            {props.workout.excercises.map(item =>{
                return(
                    <div>
                        <h3>{item.name}</h3>
                        <p>Challenge: {recommendChallenge(item).weight} pounds at {recommendChallenge(item).sets} sets of {recommendChallenge(item).reps} reps</p>
                        <div class="input-group mb-3 'text-center">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01" >Weight</label>
                            </div>
                            <input type="number" class="form-control" aria-label="Text input with dropdown button" onChange={e => updateTempWeight(item.id, e.target.value)}></input>
                        </div>
                        <div class="input-group mb-3 'text-center">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Sets</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01" onChange={e => updateTempSets(item.id, e.target.value)}>
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
                                <label class="input-group-text" for="inputGroupSelect01">Reps</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01" onChange={e => updateTempReps(item.id, e.target.value)}>
                                <option selected>Choose...</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                </div>
                //add forms to input excecises
                )
            })}
            <button type="submit" class="btn btn-primary">complete</button>
            </form>
        </React.Fragment>
    );
}