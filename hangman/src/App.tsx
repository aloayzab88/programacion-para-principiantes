import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css';

function App() {

    const [word, setWord] = useState(getRandomWord());
    const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
    const hiddenWordArray = hiddenWord.split(' ');
    const [attempts, setAttempts] = useState(0);
    const [lose, setLose] = useState(false);
    const [won, setWon] = useState(false);

    useEffect(() => {
        if (attempts == 9) {
            setLose(true);
        }
    }, [attempts]);

    useEffect(()=>{
        const currentHiddenWord = hiddenWord.replaceAll(' ', '');
        if (currentHiddenWord === word) {
            setWon(true);
        }
        
    }, [hiddenWord]);

    const checkLetter = (letter: string) => {
        if (lose || won) return;
        if (!word.includes(letter)) {
            setAttempts(Math.min(attempts + 1, 9));
            return
        }

        for (let index = 0; index < word.length; index++) {
            if (word[index] === letter) {
                hiddenWordArray[index] = letter;
            }
        }

        setHiddenWord(hiddenWordArray.join(' '));
    }

    const newGame = () => {
        const newWord = getRandomWord();
        setWord(newWord);
        setHiddenWord('_ '.repeat(newWord.length));
        setAttempts(0);
        setLose(false);
        setWon(false);
    }

    return (
        <div className='app'>

            {/* Imágenes */}
            <HangImage imageNumber={attempts} />

            {/* Palabra ocultar */}
            <h2>{hiddenWord}</h2>

            {/* Contador de intentos */}
            <h2>Intentos: {attempts}</h2>

            {/* Mensaje si perdió */}
            {
                lose ? <h2>Perdió, la palabra era: {word}</h2> : ''
            }
            {/* Mensaje si ganó */}
            {
                won ? <h2>Felicidades, ganó</h2> : ''
            }
            {/* Botones de letras */}
            {
                letters.map(letter => (
                    <button
                        onClick={() => checkLetter(letter)}
                        type='button'
                        key={letter} >
                        {letter}
                    </button>
                ))
            }
            <br />
            <br />
            <button type='button' onClick={newGame}>¿Nuevo juego?</button>
        </div>
    )
}

export default App
