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
var Product = /** @class */ (function () {
    function Product(price, name, stock) {
        this.price = price;
        this.name = name;
        this.stock = stock;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getStock = function () {
        return this.stock;
    };
    return Product;
}());
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(price, name, stock, manufacturer, guarantee) {
        var _this = _super.call(this, price, name, stock) || this;
        _this.manufacturer = manufacturer;
        _this.guarantee = guarantee;
        return _this;
    }
    Electronics.prototype.isAvailable = function () {
        return this.stock > 0;
    };
    Electronics.prototype.additionalInfo = function () {
        return "Tootja: ".concat(this.manufacturer, "\nGarantii: ").concat(this.guarantee, " aastat");
    };
    Electronics.prototype.productType = function () {
        return "Elektroonika";
    };
    //elektroonika spetsiifilised meetodid
    Electronics.prototype.extendGuarantee = function (years) {
        if (years <= 0) {
            throw new Error("Garantii pikendus peab olema positiivne!");
        }
        this.guarantee += years;
    };
    Electronics.prototype.getGuaranteeInfo = function () {
        return "".concat(this.name, " - garantii kehtib ").concat(this.guarantee, " aastat");
    };
    return Electronics;
}(Product));
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes(price, name, stock, size, material, color) {
        var _this = _super.call(this, price, name, stock) || this;
        _this.size = size;
        _this.material = material;
        _this.color = color;
        return _this;
    }
    Clothes.prototype.isAvailable = function () {
        return this.stock > 0;
    };
    Clothes.prototype.additionalInfo = function () {
        return "Suurus: ".concat(this.size, "\nMaterjal: ").concat(this.material, "\nV\u00E4rv: ").concat(this.color);
    };
    Clothes.prototype.productType = function () {
        return "Riie";
    };
    //riide spetsiifilised meetodid
    Clothes.prototype.sizeAvailable = function (desiredSize) {
        return this.size === desiredSize && this.stock > 0;
    };
    return Clothes;
}(Product));
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(price, name, stock, expirationDate, weight) {
        var _this = _super.call(this, price, name, stock) || this;
        _this.expirationDate = expirationDate;
        _this.weight = weight;
        return _this;
    }
    Food.prototype.isAvailable = function () {
        var today = new Date();
        return this.stock > 0 && today < this.expirationDate;
    };
    Food.prototype.additionalInfo = function () {
        return "Kaal: ".concat(this.weight, "g\nS\u00E4ilivus: ").concat(this.expirationDate.toLocaleDateString());
    };
    Food.prototype.productType = function () {
        return "Toidukaup";
    };
    //toidukauba spetsiifilised meetodid
    Food.prototype.willExpire = function () {
        var today = new Date();
        var daysTilExpired = Math.floor((this.expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return daysTilExpired <= 3;
    };
    return Food;
}(Product));
function eshop() {
    console.log("E-POE KATALOOG\n");
    var phone = new Electronics(899.99, "Samsung Galaxy S22", 0, "Samsung", 2);
    var laptop = new Electronics(1499.99, "MacBook Pro", 5, "Apple", 3);
    var shirt = new Clothes(24.99, "T-särk", 20, 40, "100% puuvill", "sinine");
    var jeans = new Clothes(69.99, "Teksapüksid", 15, 38, "Denim", "must");
    //toidukaubad aegumiskuupäevadega
    var dateToday = new Date();
    var chocolate = new Food(3.99, "Tume šokolaad", 500, new Date(dateToday.getFullYear(), dateToday.getMonth() + 6, dateToday.getDate()), // 6 kuud
    550);
    var milk = new Food(1.49, "Täispiim", 30, new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 2), // 2 päeva
    1000);
    //toodete info
    console.log("TOODETE INFO:\n");
    var products = [phone, laptop, shirt, jeans, chocolate, milk];
    products.forEach(function (product) {
        console.log("".concat(product.getName(), " (").concat(product.productType(), ")"));
        console.log("Hind: ".concat(product.getPrice().toFixed(2), "\u20AC"));
        console.log("Laoseis: ".concat(product.getStock()));
        console.log("Saadavus: ".concat(product.isAvailable() ? "Saadaval" : "Pole saadaval"));
        console.log(product.additionalInfo());
        console.log("-".repeat(40));
    });
    console.log("\nToidukaupade näide:");
    console.log("Piim aegumas: ".concat(milk.willExpire() ? "Jah" : "Ei"));
    console.log("\nRiiete näide:");
    console.log("38 suurus saadaval: ".concat(shirt.sizeAvailable(38) ? "Jah" : "Ei"));
    console.log("Elektroonika näide:");
    console.log(phone.getGuaranteeInfo());
    phone.extendGuarantee(1);
    console.log("P\u00E4rast garantii pikendamist: ".concat(phone.getGuaranteeInfo()));
}
eshop();
