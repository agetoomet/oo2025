class calculator{

    private panelContent:string = "";

    pressButton(b:string):void{
        this.panelContent+= b;
    }

    getPanelContents():string{
        return this.panelContent;       //return the full number as string
    }
}



export{
    calculator
};