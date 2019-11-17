export function addUser (state, user) {
    state.users.push(user)
}

export function loggedUser (state, user) {
    state.user = user
}