const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function incrementCount() {
    return {type: 'INCREMENT'};
}
function decrementCount() {
    return {type: 'DECREMENT'};
}
export { INCREMENT, incrementCount,DECREMENT,decrementCount };