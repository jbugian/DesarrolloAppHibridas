export function addUser (state, user) {
    state.users.push(user)
}

export function loggedUser (state, user) {
    state.user = user
}

export function addGame (state, game) {
    state.games.push(game)
}