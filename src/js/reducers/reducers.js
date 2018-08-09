// action types
const FETCH_ISSUES = 'FETCH_ISSUES';

const storeMess = {
    issuesData:null
}

// reducer
export default function (state = storeMess, action) {
    let newState = {...state};
    switch (action.type) {
        case FETCH_ISSUES:
            newState.issuesData = action.data;
            return {...newState}
        default:
            return state
    }
}

// action creators
export const getIssuesData= (data) => {
    return { type: FETCH_ISSUES, data }
}