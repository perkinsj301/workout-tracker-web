import React from 'react';
import { useState } from 'react'

export default function WorkoutCreator(){
    return(
        <React.Fragment>
            <div>
                        <h3>excercise</h3>
                        <div class="input-group mb-3 'text-center">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01" >Name</label>
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button"></input>
                        </div>
                        <div class="input-group mb-3 'text-center">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Goal sets per workout</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
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
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="heavy">1-5</option>
                                <option value="light">8-12</option>
                            </select>
                        </div>
                </div>
        </React.Fragment>
    )
}