class Telephone{
    globalVariable = null
    gloVariable = null
    phoneNumData = []
constructor(container){
    this.phoneNumData = []
    this.observers = []
    this.observers2 = []
    this.element = container
 
}
addNumber(){
    this.globalVariable = prompt("enter a phone number")
  this.phoneNumData.push({
    id:Math.floor(Math.random()*30),
    number:this.globalVariable
  })
  console.clear()
  this.phoneNumData.map((data)=>{
    console.log(`index: ${data.id}`)
    console.log(`phoneNumber: ${data.number}`)

 })
 this.notifyObservers(this.globalVariable)

}
deleteNumber(index){
  let deleted = prompt("input the phone number of the phone number you wish to delete")
  this.phoneNumData = this.phoneNumData.filter(function(obj) {
    return obj.number !== deleted;
  });
  console.log("Updated list of phone numbers after deletion")
  if(this.phoneNumData.length === 0){
    console.log("There are no phone numbers left")
  }
  this.phoneNumData.map((data)=>{
      console.log(`index: ${data.id}`)
      console.log(`phoneNumber: ${data.number}`)
 })
  
}
    dialNumber(){
        this.gloVariable = prompt("input the phone number you want to dial");
       
          this.notifyObservers2(this.gloVariable);
        
     
    }
    addObserver(o){
        this.observers.push(o)
    }
    addObserver2(ob){
        this.observers2.push(ob)
        console.log(ob)
    }
    removeObserver(){

    }
    notifyObservers(){
        for(let o of this.observers){
            o.update(this)
        }
    }
    notifyObservers2(){
        for(let ob of this.observers2){
            ob.dialer(this)
        }
    }
    deleteNumber(){
        this.element.innerHTML = ""
    }
}



export default Telephone;
