import images0 from '../assets/0.png';
import images1 from '../assets/1.png';
import images2 from '../assets/2.png';
import images3 from '../assets/3.png';
import images4 from '../assets/4.png';
import images5 from '../assets/5.png';
import images6 from '../assets/6.png';
import images7 from '../assets/7.png';
import images8 from '../assets/8.png';
import images9 from '../assets/9.png';

const images: string[] = [
    images0,
    images1,
    images2,
    images3,
    images4,
    images5,
    images6,
    images7,
    images8,
    images9
]

interface Props {
    imageNumber: number;
}

export function HangImage({ imageNumber }: Props) {

    if (imageNumber > 9) {
        imageNumber = 9;
    }

    return (
        <img src={images[imageNumber]} alt='Hangman image' width={250} />
    )
}