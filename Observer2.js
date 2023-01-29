class Observer2{
    constructor(element){
        this.element = element;
    }
    dialer(digits){
        this.element.innerHTML =   ` dialing ${digits.gloVariable}.....`
        
    }
}

export default Observer2;