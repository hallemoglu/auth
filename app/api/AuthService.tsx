import Api from "./Api";

const Auth = {
    register(data: any) {
        return Api.post("/auth/register", data);
    }
}

export default Auth;