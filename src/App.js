import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import ProgressPage from './components/ProgressPage/ProgressPage';
import WorkoutRecord from './components/WorkoutRecord/WorkoutRecord';
import WorkoutSelection from './components/WorkoutSelection/WorkoutSelection';
import NavBar from './components/NavBar/NavBar';
import WorkoutCreator from './components/WorkoutCreator/WorkoutCreator';



function App() {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workouts, setWorkouts] = useState([
    {
      id: 12345,
      title: "leg day",
      excercises: [
        {
          id: 12345,
          name: "calf raises",
          goalSets: 3,
          minReps: 8,
          maxReps: 12,
          completions: [
            {
              weight: 120,
              sets: 2,
              reps: 10
            }
          ]
        },
        {
          id: 54321,
          name: "leg curl",
          goalSets: 3,
          minReps: 8,
          maxReps: 12,
          completions: [
            {
              weight: 120,
              sets: 3,
              reps: 10
            }
          ]
        },
      ]
    },
    {
      id: 54321,
      title: "push day",
      excercises: [
        {
          name: "dumbell press",
          goalSets: 3,
          minReps: 8,
          maxReps: 12,
          completions: [
            {
              weight: 45,
              sets: 3,
              reps: 12
            }
          ]
        },
        {
          name: "shoulder press",
          goalSets: 3,
          minReps: 8,
          maxReps: 12,
          completions: [
            {
              weight: 35,
              sets: 2,
              reps: 12
            }
          ]
        },
      ]
    }
  ]);

  const navigate = useNavigate();

  const navToSelPage = () => {
    navigate('/WorkoutSelection')
  }
  const navToProgPage = () => {
    navigate('/ProgressPage')
  }
  const navToCreatePage = () => {
    navigate('/WorkoutCreator')
  }
  const navToRecPage = () => {
    navigate('/WorkoutRecord')
  }
  const navToDashboard = () => {
    navigate('/Dashboard')
  }
  

  return (
    <React.Fragment>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-4 text-center'>
          <NavBar></NavBar>
            <Routes>
              <Route path="/Dashboard" element={<Dashboard navToSelPage={navToSelPage} navToProgPage={navToProgPage}/>}></Route>
              <Route path="/ProgressPage" element={<ProgressPage />}></Route>
              <Route path="/WorkoutRecord" element={<WorkoutRecord workout={currentWorkout} workouts={workouts} workoutsSetter={setWorkouts} navToDashboard={navToDashboard}/>}></Route>
              <Route path="/WorkoutSelection" element={<WorkoutSelection workouts={workouts} set={setCurrentWorkout} navToCreatePage={navToCreatePage} navToRecPage={navToRecPage}/>}></Route>
              <Route path="/WorkoutCreator" element={<WorkoutCreator />}></Route>

            </Routes>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
