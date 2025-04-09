abstract class Product {
    protected price: number;
    protected name: string;
    protected stock: number;
  
    constructor(price: number, name: string, stock:number) {
      this.price = price;
      this.name = name;
      this.stock = stock
    }
    
    getName(): string {
    return this.name;
    }

    getPrice(): number {
    return this.price;
    }

    getStock(): number {
    return this.stock;
    }

    // Abstraktsed meetodid realiseerimiseks alamklassides
    abstract calculatePrice(amount: number): number;
    abstract isAvailable(): boolean;
    abstract additionalInfo(): string;
    abstract productType(): string;

}

class Electronics extends Product {
    private manufacturer: string;
    private guarantee: number;
  
    constructor(price: number, name: string, stock:number, manufacturer: string, guarantee: number
    ) {
      super(price, name, stock);
      this.manufacturer = manufacturer;
      this.guarantee = guarantee;
    }

    calculatePrice(amount: number): number {
      //10% allahindlus 3+ toote puhul
      let sale = 0;
      if (amount >= 3) {
        sale = 0.1;
      }
      return this.price * amount * (1 - sale);
    }
  
    isAvailable(): boolean {
      return this.stock > 0;
    }
  
    additionalInfo(): string {
      return `Tootja: ${this.manufacturer}\nGarantii: ${this.guarantee} aastat`;
    }
  
    productType(): string {
      return "Elektroonika";
    }
  
    // Elektroonika spetsiifilised meetodid
    extendGuarantee(years: number): void {
      if (years <= 0) {
        throw new Error("Garantii pikendus peab olema positiivne!");
      }
      this.guarantee += years;
    }
  
    getGuaranteeInfo(): string {
      return `${this.name} - garantii kehtib ${this.guarantee} aastat`;
    }
  }

class Clothes extends Product {
    private size: number;
    private material: string;
    private color: string;

    constructor(price: number, name: string, stock:number, size: number, material: string, color: string) {
        super(price, name, stock);
        this.size = size;
        this.material = material;
        this.color = color;
    }
    
    calculatePrice(amount: number): number {
        //hooajalised allahindlused
        const today = new Date();
        const month = today.getMonth(); // 0-11 (jaanuar-detsember)
        
        let sale = 0;
        //aprillis on 20% allahindlus
        if (month === 3) {
          sale = 0.2; // 20% allahindlus
        }
        
        return this.price * amount * (1 - sale);
    }

    isAvailable(): boolean {
        return this.stock > 0;
    }

    additionalInfo(): string {
        return `Suurus: ${this.size}\nMaterjal: ${this.material}\nVärv: ${this.color}`;
    }

    productType(): string {
        return "Riie";
    }

    // Riide spetsiifilised meetodid
    sizeAvailable(desiredSize: number): boolean {
        return this.size === desiredSize && this.stock > 0;
    }
}

class Food extends Product {
    private expirationDate: Date;
    private weight: number;

    constructor(price: number, name: string, stock: number,  expirationDate: Date, weight: number) {
        super(price, name, stock);
        this.expirationDate = expirationDate;
        this.weight = weight;
    }
    
    calculatePrice(amount: number): number { 
        //toit on peaaegu aegumas = allahindlus
        const today = new Date();
        const daysTilExpired = Math.floor((this.expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        let sale = 0;
        if (daysTilExpired <= 3 && daysTilExpired > 0) {
          sale = 0.3; // 30% allahindlus kui aegub 3 päeva jooksul
        }
        
        return this.price * amount * (1 - sale);
    }

    isAvailable(): boolean {
        const today = new Date();
        return this.stock > 0 && today < this.expirationDate;
    }

    additionalInfo(): string {
        return `Kaal: ${this.weight}g\nSäilivus: ${this.expirationDate.toLocaleDateString()}`;
    }

    productType(): string {
        return "Toidukaup";
    }

    // Toidukauba spetsiifilised meetodid
    willExpire(): boolean {
        const today = new Date();
        const daysTilExpired = Math.floor((this.expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return daysTilExpired <= 3;
    }
}

function eshop() {
    console.log("E-POE KATALOOG\n");

    const phone = new Electronics( 
      899.99, 
      "Samsung Galaxy S22",
      0, 
      "Samsung", 
      2
    );
    
    const laptop = new Electronics(
      1499.99, 
      "MacBook Pro", 
      5, 
      "Apple", 
      3
    );
    
    const shirt = new Clothes(
      24.99, 
      "T-särk", 
      20, 
      40, 
      "100% puuvill", 
      "sinine"
    );
    
    const jeans = new Clothes(
      69.99, 
      "Teksapüksid",
      15, 
      38, 
      "Denim", 
      "must"
    );
    
    //toidukaubad aegumiskuupäevadega
    const dateToday = new Date();
    
    const chocolate = new Food(
      3.99, 
      "Tume šokolaad", 
      500, 
      new Date(dateToday.getFullYear(), dateToday.getMonth() + 6, dateToday.getDate()), // 6 kuud
      550,
    );
    
    const milk = new Food(
      1.49, 
      "Täispiim", 
      30,
      new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 2), // 2 päeva
      1000,
    );
  
    //toodete info
    console.log("TOODETE INFO:\n");
    const products = [phone, laptop, shirt, jeans, chocolate, milk];
    
    products.forEach(product => {
      console.log(`${product.getName()} (${product.productType()})`);
      console.log(`Hind: ${product.getPrice().toFixed(2)}€`);
      console.log(`Laoseis: ${product.getStock()}`);
      console.log(`Saadavus: ${product.isAvailable() ? "Saadaval" : "Pole saadaval"}`);
      console.log(product.additionalInfo());
      console.log("-".repeat(40));
    });
}

eshop();