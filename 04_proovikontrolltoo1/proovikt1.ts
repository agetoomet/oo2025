class Triangle {
    constructor(protected xd: number[], protected yd: number[]){}
}

const triangle1 = new Triangle([20,30,50], [40,30,50]);
const triangle2 = new Triangle([10,40,20], [10,10,50]);

console.log(triangle1);
console.log(triangle2);