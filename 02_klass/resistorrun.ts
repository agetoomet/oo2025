class Resistor {
    constructor(protected r: number) {}
    getCurrent(u: number): number {
      return u / this.r;
    }

    getPower(u: number): number {
      return u * this.getCurrent(u);
    }
  }
  
  let r1: Resistor = new Resistor(220);
  console.log(r1.getCurrent(5));
  let r2: Resistor = new Resistor(110);
  console.log(r2.getCurrent(5));
  let r3: Resistor = new Resistor(4700);
  console.log(r3.getCurrent(5));
  let takistid: Resistor[] = [r1, r2, r3];
  console.log(takistid);

  let voolusumma=0;
  for (let takisti of takistid){
    voolusumma+=takisti.getCurrent(5);
  }
  console.log(voolusumma);

  console.log(takistid.reduce((siiani, praegune) => siiani+praegune.getCurrent(5), 0));

  let soojus=0;
  for (let takisti of takistid){
    soojus = takisti.getCurrent(5) //pooleli
  }

//Takistile mõjub pinge 5 volti ning seda läbib vool 2 amprit. Mitu vatti soojust eraldub takistist?


//Takistile mõjub pinge 4 volti ning sealt eraldub võimsus 6 vatti. Mitu amprit voolu läbib takistit?

//Mitu oomi on eelneva takisti takistus?

//Veekeedukannu võimsuseks on 1 kilovatt, seal sees on vett 1 liiter. Mitme kraadi peale tõuseb vee temperatuur 20 kraadi Celsiuse pealt ühe minutiga, kui kogu sisselülitatud kannu võimsus läheb vee soojendamiseks?

//Mitu amprit voolu läbib eelnimetatud veekeedukannu, kui võrgupinge on 220 volti?

//Mitu oomi on selle veekeedukannu takistus?

//Max võimsus
