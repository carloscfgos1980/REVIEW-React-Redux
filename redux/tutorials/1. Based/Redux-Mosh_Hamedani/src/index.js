import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';
import { BUG_RESOLVED } from './actionTypes';

// The only place that we make changes is in actionTypes.js
const unsubscribe = store.subscribe(() => {
    console.log("Store Change!", store.getState());
})

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch(bugRemoved(1));


console.log(store.getState());


