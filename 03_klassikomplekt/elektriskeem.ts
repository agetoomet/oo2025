class SimpleCircuit {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private switchOn: boolean = false;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.canvas.addEventListener("click", this.toggleSwitch.bind(this));
        this.drawCircuit();
    }

    private drawCircuit() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Joonista aku
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(20, 80, 20, 40);
        this.ctx.fillRect(60, 90, 10, 20);
        
        // Joonista juhtmed
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(30, 100); // Aku väljund
        this.ctx.lineTo(100, 100); // Lüliti
        this.ctx.lineTo(100, 60); // LED
        this.ctx.lineTo(200, 60); // LED teine pool
        this.ctx.lineTo(200, 100); // Tagasi akusse
        this.ctx.lineTo(70, 100); // Aku teine pool
        this.ctx.stroke();

        // Joonista lüliti
        this.ctx.fillStyle = this.switchOn ? "green" : "gray";
        this.ctx.fillRect(90, 90, 20, 20);

        // Joonista LED
        this.ctx.fillStyle = this.switchOn ? "red" : "darkgray";
        this.ctx.beginPath();
        this.ctx.arc(200, 50, 10, 0, Math.PI * 2);
        this.ctx.fill();
    }

    private toggleSwitch(event: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        if (x >= 90 && x <= 110 && y >= 90 && y <= 110) {
            this.switchOn = !this.switchOn;
            this.drawCircuit();
        }
    }
}

window.onload = () => new SimpleCircuit("circuitCanvas");
