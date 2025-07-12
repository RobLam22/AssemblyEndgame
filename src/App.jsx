import { useState } from 'react';
import './App.css';
import { ChitsContainer } from './components/ChitsContainer.jsx';

function App() {
    const [currentWord, setCurrentWord] = useState('react');

    const secretWord = currentWord.split('').map((word) => word.toUpperCase());

    const secretWordSpan = secretWord.map((letter, index) => (
        <span key={index} id={index} className="letterbox">
            {letter}
        </span>
    ));

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>
                    Guess the word within 8 attempts to keep the programming
                    world safe from Assembly!
                </p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <ChitsContainer />
            <section className="wordbox">{secretWordSpan}</section>
        </main>
    );
}

export default App;
