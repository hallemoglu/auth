import Api from "./Api";

const Auth = {
    register(data: any) {
        return Api.post("/auth/register", data);
    },
    verifiedAccount(token: any) {
        return Api.get("/auth/verified-account/"+token);
    },
    login(data: any) {
        return Api.post("/auth/login", data);
    },
    forgotPassword(data: any) {
        return Api.post("/auth/forgot-password", data);
    },
    resetPassword(data: any) {
        return Api.post("/auth/reset-password", data);
    }

}

export default Auth;