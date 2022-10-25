class Student{
    constructor(id = null,name = null,year = null,courses = null){
      this.id = id
      this.name = name
      this.year = year
      this.courses = courses
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getYear(){
        return this.year
    }
    getCourses(){
        return this.courses
    }
    getStudent(){
      return{id:this.id,name:this.name,year:this.name,year:this.year,courses:this.courses}
    }
  }

class Course{
    constructor(id = null,name = null,desc = null){
      this.id = id
      this.name = name
      this.desc = desc
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getdesc(){
        return this.desc
    }
    getCourse(){
      return{id:this.id,name:this.name,desc:this.desc}
    }
  }

  
  function CourseManagement(){
    let courses = []
    function addCourses(id,name,desc){
      courses.push(new Course(id,name,desc).getCourse())
    }
    function updateCourses(id,newCourse){
        let indexofC = courses.indexOf(id,newCourse)
        courses[indexofC] = newCourse.getCourse()
    }
    function findCourses(id){
        return courses.find(a => a.id === id)
    }
    function getCourses(){
      return courses
    }
    return{
      addCourses,
      getCourses,
      updateCourses,
      findCourses
    }
  }
  
  const {addCourses,getCourses,updateCourses,findCourses} = CourseManagement()
  
addCourses('INT100', 'IT Fund')
addCourses('INT101', 'Program Fund')
addCourses('INT102', 'Web Tech')
addCourses('INT114', 'Discrete')
addCourses('INT201', 'Web based Client Side I')
addCourses('INT202', 'Server Side I')
addCourses('INT205', 'Database Mgt')
addCourses('INT307', 'Security I')
addCourses('INT314', 'Applied Mathematics for Data Science')
addCourses('INT319', 'IT Pro Comm')
addCourses('INT321', 'DevOps')

// updateCourses('INT100',new Course('INT2000','LOL','ZAZA'))


console.log(findCourses('INT321','DevOps'))

// console.log(getCourses())


function showListOfCourseNotRegistration(student,courses){
    const courseofStudent = student.getCourse()

    let d = courses.filter(a => a.id.startsWith(student.year,3))

    return d.filter(a => !courseofStudent.some(b => b.id === a.id))
}