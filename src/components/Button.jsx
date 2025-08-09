function Button({ isLoggedIn }) {
    return (
        <button disabled={isLoggedIn}>Login</button>
    )
}
export default Button;