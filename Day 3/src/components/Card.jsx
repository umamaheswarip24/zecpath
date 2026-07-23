import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
            <img
                src={props.image}
                alt={props.title}
                className="card-image"
            />

            <div className="card-content">
                <h3>{props.title}</h3>

                <p>{props.description}</p>

                <Button label={props.buttonLabel} />
            </div>
        </div>
    );
}

export default Card;