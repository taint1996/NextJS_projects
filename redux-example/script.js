// ========================== My REDUX ==========================
function createStore(reducer) {
  let state = reducer(undefined, {});
  const subscribers = []

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action)

      subscribers.forEach((subscriber) => subscriber())
    },
    subscribe(subscriber) {
      subscribers.push(subscriber)
    }
  };
}

// ========================== My APP ==========================
// Add skypack to use Redux
// import { createStore } from 'https://cdn.skypack.dev/redux'
const initState = 0;

// reducer function
function bankReducer(state = initState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
}

// store
const store = window.store = createStore(bankReducer);

// actions
function actionDeposit(payload) {
  return {
    type: 'DEPOSIT',
    payload
  };
}

function actionWithdraw(payload) {
  return {
    type: 'WITHDRAW',
    payload
  };
}

// DOM events
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// event handler
deposit.onClick = function () {
  store.dispatch(actionDeposit(10));
};

withdraw.onClick = function () {
  store.dispatch(actionWithdraw(10));
};

// listener
store.subscribe(() => {
  render();
});

// render
function render() {
  const output = document.querySelector('#output');
  output.innerText = store.getState();
}

render();
