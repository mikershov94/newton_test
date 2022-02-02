import updateCharacters from "./characters-reducer"

const reducer(state, action) {
    return {
        characters: updateCharacters,
    }
}

export default reducer;