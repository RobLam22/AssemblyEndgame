import { useState } from 'react';
import './App.css';
import { ChitsContainer } from './components/ChitsContainer.jsx';
import clsx from 'clsx';

function App() {
    const [currentWord, setCurrentWord] = useState('react');
    const [guesses, setGuesses] = useState([]);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log(guesses);

    const secretWord = currentWord.split('');

    const secretWordSpan = secretWord.map((letter, index) => (
        <span key={index} id={index} className="letterbox">
            {guesses.includes(letter) ? letter.toUpperCase() : null}
        </span>
    ));

    const keyboard = alphabet.split('').map((letter) => (
        <button
            key={letter}
            className={clsx('keyboardBtn', {
                right: guesses.includes(letter) && secretWord.includes(letter),
                wrong: guesses.includes(letter) && !secretWord.includes(letter),
            })}
            onClick={() => guessLetter(letter)}
        >
            {letter.toUpperCase()}
        </button>
    ));

    function guessLetter(letter) {
        setGuesses((prevGuesses) =>
            prevGuesses.includes(letter)
                ? prevGuesses
                : [...prevGuesses, letter]
        );
    }

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
            <section className="keyboard">{keyboard}</section>
            <button className="new-game">New Game</button>
        </main>
    );
}

export default App;
