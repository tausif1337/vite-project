import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const message = "Hello";
    const name = "Asif";
    const age = 20;
    const city = "Dhaka";
    const number1 = 10;
    const number2 = 20;

    return (
        <div>
            <ChildComponent message={message} name={name} age={age} city={city} number1={number1} number2={number2} />
        </div>
    );
}

export default ParentComponent;