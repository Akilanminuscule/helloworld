import { LightningElement, track } from 'lwc';
export default class ConditionalButton extends LightningElement {
    @track show = false;
    handleClick(){
        this.show = !this.show;
    }
}