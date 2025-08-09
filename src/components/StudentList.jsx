function StudentList({ students }) {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>Name: {student.name} - Age: {student.age} - City: {student.city}</li>
                ))}
            </ul>
        </div>
    );
}
export default StudentList;