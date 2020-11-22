import { LightningElement, track, api } from 'lwc';

const evaluator = (scope, expression) => {
    let func = `
        return (function(scope){
            const binder = function () {
                return (${expression} ? true : false);
            }
            return binder.apply(scope);
        })(scope);
    `;
    return Function("scope",func)(scope);
}

export default class LwcIf extends LightningElement {
    @track ready = false;

    @api condition;
    @api scope;

    connectedCallback(){
        this.ready = true;
    }

    get decision(){
        return evaluator(JSON.parse(JSON.stringify(this.scope)), this.condition);
    }
}