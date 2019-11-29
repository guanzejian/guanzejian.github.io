const defaultState = {
    inputValue : 'Write Something',
    list : [
        '111111111111111111111',
        '222222222222222222222',
        '333333333333333333333'
    ]
}

export default (state = defaultState,action) =>{
    // reducer 里只能接收state， 不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue= action.value
    }

    return state
}