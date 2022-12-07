import './styles.css';

type Props = {
    name: string;
}

export default function Product({ name }: Props) {
    return (
        <p className="product-item">{name}</p>
    );
}