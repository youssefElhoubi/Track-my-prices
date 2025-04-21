const signOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
}
export default signOut;