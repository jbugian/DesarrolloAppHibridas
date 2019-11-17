export function addUser (state, user) {
    state.users.push(user)
}

export function loggedUser (state, user) {
    state.user = user
}

export function logout (state) {
    state.user = null
}

export function addGame (state, game) {
    state.games.push(game)
}