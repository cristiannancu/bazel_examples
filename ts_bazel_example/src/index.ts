import { randomFunc } from './foo';

const randomInt = () => {
    return randomFunc();
}

setInterval(() => {
    console.log(randomInt());
    }, 1000);
