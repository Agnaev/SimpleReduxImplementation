import createStore from './redux.js'
import * as logic from './logic.js'

const intialState = { count: 0};
const store = createStore(logic.reducer, intialState);
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const reset = document.querySelector('#res');
const amount = document.querySelector('#amount');
const output = document.querySelector('#num');

store.subscribe(() => {
    output.textContent = store.getState().count;
});

store.subscribe(() => {
    console.clear();
    console.log(store.getState().count);
});

add.addEventListener('click', e => {
    store.dispatch(logic.increment(+amount.value));
});

sub.addEventListener('click', e => {
    store.dispatch(logic.decrement(+amount.value));
});

reset.addEventListener('click', e => {
    store.dispatch(logic.reset());
});

amount.addEventListener('keypress', function(e) {
    if(['e'].includes(e.key)){
        e.preventDefault();
    }
});