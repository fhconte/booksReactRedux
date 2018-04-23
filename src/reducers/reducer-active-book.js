// State = Reducer state
export default function(state = null, action) {
    switch(action.type) {
        // Here we define the comapitble case to dispatch action
        case 'BOOK_SELECTED':
        return action.payload;
    }
    
    return state;
}