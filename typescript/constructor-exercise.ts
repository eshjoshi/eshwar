interface Address{
    permanent:string;
    current:string;
    
}
enum Gender {male,female};
class Patient {
   
    constructor(private nameOfPatient?:string,private address?:Address, 
    private mobile?:number,private age?:number ,private sex?:Gender
    ){
       
    }
  
    setx(nameOfPatient?:string){
        this.nameOfPatient = nameOfPatient;
    }
    getx(){
        return this.nameOfPatient;
    }

      display(){
        console.log("Name" +this.nameOfPatient);
        console.log("Address" +this.address.permanent);
        console.log("Mobile" +this.mobile);
        console.log("Age" +this.age);
        console.log("Sex" +this.sex);
    }

}
let obj = {"current":"Pune","permanent":"Chikhli"}
let patientDetails = new Patient( "",obj,8793248082,26,Gender.male);
patientDetails.display();
patientDetails.setx("arvind");
let newName = patientDetails.getx();
console.log(newName);
