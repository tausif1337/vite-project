function ToDoList({ toDoList }) {
    return (


        <div>
            <h1>To Do List</h1>
            <ul>
                {
                    toDoList.map((item, index) => (
                        <li key={index}>{index + 1} -- {item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ToDoList;
