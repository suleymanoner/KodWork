export default function( state, action) {
    switch (action.type) {
        case "ADD_FAV":
            const {favouriteJob} = action.payload
            const newList = [...state.favoriteList, favouriteJob];
            return {...state, favoriteList: newList};

        case "REMOVE_FAV":
            const {removeJob} = action.payload
            const newList2 = [...state.favoriteList.filter(j => j !== removeJob)]
            return {...state, favoriteList: newList2};
        default:
            return state;
    }
}