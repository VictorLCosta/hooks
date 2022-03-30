export function numberAdd2 (dispatch) {

    fetch('')
        .then(resp => resp.json())
        .then(json => dispatch({type: 'userListReady', payload: json}))

}