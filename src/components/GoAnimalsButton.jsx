import { useNavigate } from 'react-router-dom';

function GoAnimalsButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/animals')}>Go Animals</button>
        </div>
    )
}
export default GoAnimalsButton;