import "../styles/Card.css"

const Card = ({image, title, content}) => {
    return (
        <div className="card">
            <img className="card-image" src={image}></img>
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
            </div>
        </div>
    )
}
export default Card