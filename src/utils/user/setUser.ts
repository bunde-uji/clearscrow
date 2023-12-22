interface User {
    name: string
    email: string
    password: string
}

export function setUser({name, email, password}: User) {
    localStorage.setItem("user", JSON.stringify({"name": name, "email": email, "password": password}))
}