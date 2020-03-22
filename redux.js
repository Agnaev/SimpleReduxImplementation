///////////////////////////////////////////////////////////////////////
/////////////////Redux/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
export default function createStore(reducer, initialState){
    let state = reducer(initialState, { type: '__INIT__' });
    const subscribers = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        subscribers.forEach(x => x());
    }

    const subscribe = subscriber => {
        subscribers.push(subscriber);
        return () => subscribers.filter(x => x !== subscriber);
    }

    return {
        getState, 
        dispatch, 
        subscribe
    };
}