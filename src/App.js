import { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Modify from './components/Modify';
import Songs from './components/Songs';

function App() {
    const [songs, setSongs] = useState([
        {
            id: 1,
            title: "Music 1",
            artist: "Artist 1",
            image: "./images/1.jpeg",
            src: "./music/song1.mp3"
        },
        {
            id: 2,
            title: "Music 2",
            artist: "Artist 2",
            image: "./images/2.jpeg",
            src: "./music/song1.mp3"
        },
        {
            id: 3,
            title: "Music 3",
            artist: "Artist 3",
            image: "./images/3.jpeg",
            src: "./music/song1.mp3"
        },
        {
            id: 4,
            title: "Music 4",
            artist: "Artist 4",
            image: "./images/4.jpeg",
            src: "./music/song1.mp3"
        },
        {
            id: 5,
            title: "Music 5",
            artist: "Artist 5",
            image: "./images/5.jpeg",
            src: "./music/song1.mp3"
        },
        {
            id: 6,
            title: "Music 6",
            artist: "Artist 6",
            image: "./images/6.jpeg",
            src: "./music/song1.mp3"
        }
    ])
    return (
    <div className="App">
        <Songs songs={songs}></Songs>
        {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Songs/> } />
                <Route path="/modify" element={ <Modify/> } />
            </Routes>
        </BrowserRouter> */}

        <Routes>
            <Route path="/" element={<Modify />} />
        </Routes>
    </div>
    );
}

export default App;
