const reducers = (state, action) => {
    switch (action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}

        case 'multiplyBy_7':
            return {...state, number: state.number * 7}

        case 'divideBy_25':
            return {...state, number: state.number / 25}

        case 'round':
            return {...state, number: Math.round(state.number)}
    
        default:
            return state;
    }
}

export default reducers