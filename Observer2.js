class Observer2{
    constructor(element){
        this.element = element;
    }
    dialer(digits){
        this.element.innerHTML = "hello"
        console.log('hey')
    }
}

export default Observer2;