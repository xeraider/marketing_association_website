import "../styles/Cards.css"
import Card from "../components/Card";

import Card1Image from "../assets/card1.jpg";
import Card2Image from "../assets/card2.jpg";
import Card3Image from "../assets/card3.jpg";

const cardData = [
    {
        id: 1,
        image: Card1Image,
        title: "Rhoncus tortor.",
        content: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        id: 2,
        image: Card2Image,
        title: "Fusce sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
        id: 3,
        image: Card3Image,
        title: "Neque porro.",
        content: "In massa metus, tristique et dolor ac."
    }
];

const Cards = () => {
    return (
        <div className="card-grid">
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    content={card.content}
                />
            ))}
        </div>
    )
}
export default Cards
