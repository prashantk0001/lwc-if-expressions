import { LightningElement, track } from 'lwc';

export default class ExampleLwcIf extends LightningElement {

    @track a = 10;
    @track b = 4;
    
    get scope(){
        return {
            a : this.a,
            b : this.b
        };
    }
    
    handleclick(){
        if(this.a == 10){
            this.a = 4;
            return;
        }
        if(this.a == 4){
            this.a = 10;
            return;
        }
    }
}