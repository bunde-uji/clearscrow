
export function getUser() {
    // const user = JSON.parse(localStorage.getItem("user") || "")
    
    // return user ? user : {name: "jjf", email: "lld", password: "fhf"};
    // let user;

    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user") || "")
    } else {
        return null
    }
}
