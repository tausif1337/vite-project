function ChildComponent({ message, name, age, city, number1, number2 }) {
    return (
        <div>
            <p>Message: {message}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>

            <p>Number1: {number1}</p>
            <p>Number2: {number2}</p>
            <p>Sum: {number1 + number2}</p>
        </div>
    );
}

export default ChildComponent;