
class Student{
    constructor(id = null,name = null,year = null,courses = null){
      this.id = id
      this.name = name
      this.year = year
      this.courses = courses
    }
  
    getStudent(){
      return{id:this.id,name:this.name,year:this.name,year:this.year,courses:this.courses}
    }
  }


module.export = new Student