var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tool = /** @class */ (function () {
    function Tool(ctx) {
        this.ctx = ctx;
    }
    return Tool;
}());
var PenTool = /** @class */ (function (_super) {
    __extends(PenTool, _super);
    function PenTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PenTool.prototype.onDraw = function (x, y) {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    };
    return PenTool;
}(Tool));
var EraserTool = /** @class */ (function (_super) {
    __extends(EraserTool, _super);
    function EraserTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EraserTool.prototype.onDraw = function (x, y) {
        var size = this.ctx.lineWidth;
        this.ctx.clearRect(x - size / 2, y - size / 2, size, size);
    };
    return EraserTool;
}(Tool));
var DrawingApp = /** @class */ (function () {
    function DrawingApp() {
        var _this = this;
        this.isDrawing = false;
        this.doDraw = function (e) {
            if (!_this.isDrawing)
                return;
            var x = e.clientX - _this.canvas.offsetLeft + window.scrollX;
            var y = e.clientY - _this.canvas.offsetTop + window.scrollY;
            _this.setStrokeStyle();
            _this.tool.onDraw(x, y);
        };
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.tool = new PenTool(this.ctx);
        this.init();
    }
    DrawingApp.prototype.init = function () {
        this.ctx.lineWidth = +document.querySelector("#lwInput").value;
        this.setStrokeStyle();
        document.querySelector("#colorInput").addEventListener("change", this.setStrokeStyle.bind(this));
        document.querySelector("#lwInput").addEventListener("input", this.setLineWidth.bind(this));
        document.querySelector("#eraser").addEventListener("click", this.toggleEraser.bind(this));
        document.querySelector("#clearCanvasBtn").addEventListener("click", this.clearCanvas.bind(this));
        this.canvas.addEventListener("pointerdown", this.startDraw.bind(this));
        this.canvas.addEventListener("pointerup", this.stopDraw.bind(this));
        this.canvas.addEventListener("pointerout", this.stopDraw.bind(this));
        this.canvas.addEventListener("pointercancel", this.stopDraw.bind(this));
    };
    DrawingApp.prototype.hexToRgb = function (hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return { r: r, g: g, b: b };
    };
    DrawingApp.prototype.setStrokeStyle = function () {
        var color = document.querySelector("#colorInput").value;
        var _a = this.hexToRgb(color), r = _a.r, g = _a.g, b = _a.b;
        this.ctx.strokeStyle = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    };
    DrawingApp.prototype.setLineWidth = function (e) {
        var input = e.target;
        this.ctx.lineWidth = +input.value;
    };
    DrawingApp.prototype.startDraw = function (e) {
        this.setStrokeStyle();
        var x = e.clientX - this.canvas.offsetLeft + window.scrollX;
        var y = e.clientY - this.canvas.offsetTop + window.scrollY;
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.isDrawing = true;
        this.canvas.addEventListener("pointermove", this.doDraw);
    };
    DrawingApp.prototype.stopDraw = function () {
        this.isDrawing = false;
        this.ctx.closePath();
        this.canvas.removeEventListener("pointermove", this.doDraw);
    };
    DrawingApp.prototype.toggleEraser = function () {
        var eraserBtn = document.getElementById('eraser');
        if (this.tool instanceof EraserTool) {
            this.tool = new PenTool(this.ctx);
            eraserBtn === null || eraserBtn === void 0 ? void 0 : eraserBtn.classList.remove('active');
        }
        else {
            this.tool = new EraserTool(this.ctx);
            eraserBtn === null || eraserBtn === void 0 ? void 0 : eraserBtn.classList.add('active');
        }
    };
    DrawingApp.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return DrawingApp;
}());
window.onload = function () { new DrawingApp(); };
