import { useState } from 'react';
import './App.css';
import { ChitsContainer } from './components/ChitsContainer.jsx';
import clsx from 'clsx';
import { languages } from './assets/languages.js';

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState('react');
    const [guesses, setGuesses] = useState([]);

    //Derived values
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Static values
    const secretWord = currentWord.split('');

    const secretWordSpan = secretWord.map((letter, index) => (
        <span key={index} id={index} className="letterbox">
            {guesses.includes(letter) ? letter.toUpperCase() : null}
        </span>
    ));

    const wrongGuessCount = guesses.filter(
        (guess) => !secretWord.includes(guess)
    ).length;

    const isGameWon = currentWord
        .split('')
        .every((letter) => guesses.includes(letter));
    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameOver = isGameWon || isGameLost;
    console.log(isGameOver);

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

    function IsGameOver() {
        if (!isGameOver) {
            return null;
        } else if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            );
        } else if (isGameLost) {
            return (
                <>
                    <h2>You lose!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            );
        }
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
            <section
                className={clsx('game-status', {
                    win: isGameWon,
                    lose: isGameLost,
                })}
            >
                <IsGameOver />
            </section>
            <ChitsContainer wrongGuessCount={wrongGuessCount} />
            <section className="wordbox">{secretWordSpan}</section>
            <section className="keyboard">{keyboard}</section>
            <button className="new-game">New Game</button>
        </main>
    );
}

export default App;
