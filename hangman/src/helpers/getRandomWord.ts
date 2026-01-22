const word: string[] = [
    'FREYA',
    'ROCKET',
    'SANDRA',
    'ALEJANDRO'
]

export function getRandomWord() {
    return word[Math.floor(Math.random() * word.length)]
}