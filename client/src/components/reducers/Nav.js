function Nav(state="Login",action){
    switch(action.type){
        case "Login":
            return "Login";
        case "Register":
            return "Register";
        default:
            return "Login";

    }

}
export default Nav;