class Observer{
    constructor(elementId){
        this.element = elementId;
    }
    update(digits){
        this.element.innerHTML = digits.phoneNumData[digits.phoneNumData.length - 1].number
        console.log(digits.phoneNumData[digits.phoneNumData.length - 1].number)
    }
}

export default Observer;