import './styles.css';

type Props = {
    text: string;
}

export default function Card({ text }: Props) {
    return (
        <h2>{text}</h2>
    );
}