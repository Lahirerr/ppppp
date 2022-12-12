// let profile = {
//     id: 123,
//     interest: ['music','skiing']
// }

// console.log(profile.interest)

// profile.interest[profile.interest.length-1]= 'reading'
// console.log(profile.interest)


// let book = {isbn: 123456789,
//     titile: 'Javascript',
//     author:{
//         firstname: 'Tanachart',
//         lastname: 'Bunyaittiwan'
//     }
// }

// book.author.firstname='Menoa'
// book.author['lastname']='Manoe'


// console.log(book.author)

//2. using new operator to create object
// class Point{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     compare(anotherPoint){
//         console.log(`this.x =${this.x}, this.y= ${this.y}, anotherPoint.x =${anotherPoint.x}, anotherPoint.y= ${anotherPoint.y}`)
//     }
// }
// const p1=new Point(1,2)
// let p2=new Point(4,5)
// // // p1=p2 //unable to reassign
// // // p1.x=100
// // // p1.y=50
// // // p2=p1 //able to reassign
// // console.log(p1.compare(p2))
// // console.log(p2.compare(p1))

// console.log(Object.prototype.isPrototypeOf(p1))

// console.log(Point.prototype.isPrototypeOf(p1))

// let square1={
//     side: 5,
//     area(){
//         return this.side*this.side
//     }
// }
// console.log(square1.side)
// console.log(square1.area())

// class Square{
//     constructor(side){
//         this.side=side
//     }
//     area(){
//         return this.side*this.side
//     }
// }
// const square1= new Square(5)
// const square2 = new Square(3)

// console.log(square1.side)
// console.log(square1.area())
// console.log(square2.side)
// console.log(square2.area())

// function Square(side){
//     this.side=side
// }
// function getArea(){
//     return this.side*this.side
// }
// const sq1=new Square(3)
// console.log(sq1)
// sq1.area=getArea
// console.log(sq1.area())


// const sq2=new Square(5)
// console.log(sq2)
// sq2.area=getArea
// console.log(sq2.area())




