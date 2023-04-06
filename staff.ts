enum Gender {
    male,
    female,
    other
}


class Staff {
    fullName: string
    gender: Gender
    birthday:  string
    email: string
    numberPhone?: string
    constructor(fullName:string,gender:Gender,birthday:string,email:string,numberPhone:string) {
        this.fullName=fullName
        this.gender=gender
        this.birthday=birthday
        this.email=email
        this.numberPhone=numberPhone
    }

}
let staffList:Staff[]=[];
let staff1= new Staff("K",Gender.male,"23/12/1997","nhk@gmail.com",`12345`)
let staff2= new Staff("L",Gender.female,"7/10/2001","nkl@gmail.com",`33333`)
let staff3= new Staff("D",Gender.male,"22/2/2222","aaa@gmail.com",`22222`)
staffList.push(staff1,staff2)

function displayStaff(staff:Staff) {
    console.log(staff)
}
function addStaff(staff:Staff){
    staffList.push(staff)
}
function deleteStaff(index:number){
    staffList.splice(index,1)
}
  addStaff(staff3)
 deleteStaff(0)
staffList.forEach(displayStaff)

