const array = ['value', () => 'showValue'];

const [value, showValue] = array

export const taskSeven = () => {
    alert(value);
    alert(showValue());
}