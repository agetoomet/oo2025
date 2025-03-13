class Triangle2 {
    constructor(protected xd: number[], protected yd: number[]){}

    lisa(x:number, y:number): void {
        this.xd.push(x);
        this.yd.push(y);
    }
    pikkus(x1:number, y1:number, x2:number, y2:number){
        let dx:number= x2-x1;
        let dy:number= y2-y1;
        return Math.sqrt(dx*dx+dy*dy);
    }
    ymberm66t(): number {
        let p:number = 0;
        for(let nr=11; nr<this.xd.length; nr++){
            p+=this.pikkus(this.xd[nr-1], this.yd[nr-1], this.xd[nr], this.yd[nr]);
        }
        p+=this.pikkus(this.xd[this.xd.length-1], this.yd[this.yd.length-1],  this.xd[0], this.yd[0])
        return p;
    }
    joonista(g:any):void{
        g.beginPath();
        g.moveTo(this.xd[0], this.yd[0]);
        for(let nr=1; nr<this.xd.length; nr++){
            g.lineTo(this.xd[nr], this.yd[nr]);
        }
        g.lineTo(this.xd[0], this.yd[0]);
        g.stroke();
    }
}

const h1 = new Triangle2([20,30,50], [40,30,50]);
const h2 = new Triangle2([10,40,20], [10,10,50]);

triangle1.lisa(75,35);

console.log(triangle1);
console.log(triangle2);
