// class Person{
//    constructor(firstName='N/A',lastName='N/A',dateofBirth = new Date(Date.now())){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dateofBirth = dateofBirth
//    }
//    getFullName(){
//     return `${this.lastName}, ${this.firstName}`
// }
//     getAge(){
//         const ms = Date.now() - this.dateofBirth.getTime()
//         console.log(ms)
//         const date = new Date(ms)
//         console.log(date)
//         return date.getUTCFullYear()-1970
//     }
// }

class Todo{
    static nam = 1
    constructor(description){
        this.id = Todo.nam++
        this.description = description
    }
    getTodo(){
        return {id:this.id,description:this.description}
    }
    setDescription(newDescription){
        this.newDescription = newDescription
    }
}
function TodoList(){
    let todos = []
    let num = 1
    function addTodo(des){
        todos.push(new Todo(des))
        return todos.length
    }
    function removeTodo(removeId){
        return todos.filter(a => a.id !== removeId)
    }
    function findTodo(searchId){
        return todos.find(todo => todo.id === searchId)
    }
    function getTodos(){
        return todos
    }

    return {
        addTodo,removeTodo,findTodo,getTodos
    }
}


const {addTodo,removeTodo,findTodo,getTodos}=TodoList()


console.log(addTodo(23))
console.log(addTodo(24))
console.log(getTodos())
// console.log(getTodos());ww
// console.log(findTodo(1));
// console.log(removeTodo(1));

// const p1 =new Person('Tanachart','Bunyarittiwan',new Date(2003,02,25))
// console.log(p1.getFullName()) 
// console.log(p1.getAge())

// const p2 = new Person('Tanachart','Bunyarittiwan',)
// console.log(p2.getFullName()) 

// function compare(anotherPerson){
//     return this?.firstName.toLowerCase() === anotherPerson?.firstName.toLowerCase() &&  this?.lastName.toLowerCase() === anotherPerson?.lastName.toLowerCase()
// }

// Person.prototype.isEqual= compare

// console.log(Person.prototype)
// console.log(p1.isEqual(p2))


// Person.prototype.toString=function (){
//     return `fullname: ${this.getFullName()},age: ${this.getAge()}`
// }

// console.log(p1.toString())


// const obj1={}
// const obj2 ={id:1,product:'pain'}

// console.log(JSON.stringify(obj1) === '{}'?'empty':'not empty')

// console.log(JSON.stringify(obj2) === '{}'?'empty':'not empty')


// const buyer={
//     id:1234,
//     fullName:{
//         firstName:'Menoa',
//         lastName:'Bae'
//     },
//     totalPoints:1000
// }

// const address={
//     no:555,
//     street:'pompom',
//     Province:'Nonthaburi'

// }

// let {fullName}=buyer
// console.log(fullName)

// const{fullName:{firstName,lastName}}=buyer
// console.log(firstName)

// const{id,...buyerDetails}=buyer
// console.log(id)
// console.log(buyerDetails)


// const products=[
//     {pid:1,productName:'Sword'},
//     {pid:2,productName:'Shield'}
// ]
// const[,{pid,productName}]=products
// console.log(pid,productName)
// const buyerProfile={...buyer,...address}
// console.log(buyerProfile)

// const newBuyer={...buyer, totalPoints:0}
// console.log(newBuyer)

// const num = [1,2,3,4]

// const hello = num.map((numb) => {return numb*2})

// console.log(hello)



// //Anonymous arrow
// const get = function (msg,index){
//     return msg[index]
// }

// console.log(get('hello world',4));
// //Anonymous keyword function
// const get2 =(msg, index)=>{
//     return msg[index]
// }

// console.log(get2('hello world',3));


// function outer(a){
//     let b = 2
//     function inner1(c){
//         let b=20
//         let d=4
//         console.log(b);
//         return d+c
//     }
//     inner1(100)
//     console.log(b);
//     return a+b
// }


// console.log(outer(10));

// function outer(){      
//     function inner(x){
//         return 'inner here '+x
//     }
//     return inner
// }
// //1
// console.log(outer()('someone'))
// //2
// const inFn=outer()
// console.log(inFn('somewhere'))




// function counter() {
//     //free variable
//     let count = 0
//     function increment() {
//      return count++
//     }
//     function decrement() {
//      return count--
//     }
//     function getCount() {
//      return count
//     }
//     return {
//         increment,
//         decrement,
//         getCount
//     }
//    }
// //object destructuring



// const {increment,decrement, getCount} = counter()
// increment()
// increment()
// console.log(getCount())
//    const c=counter() 
   //c={increment:increment, decrement:decrement, getCount:getCount}
//    c.increment()
//    c.increment()
//    c.increment()
//    c.decrement()
//    console.log(c.getCount())




// const products = [
//     { id: 123, name: 'bag' },
//     { id: 2, name: 'pen' },
//     { id: 33, name: 'BAG' }
//  ]

//  console.log(products.map(a => a.name))



// const months = ['Jan', 'March', 'April', 'June']
// //insert at index 2 with two elements 'A' and 'B'
// months.splice(2, 0 ,'A', 'B')
// console.log(months)
// //[ 'Jan', 'March', 'A', 'B', 'April', 'June' ]
// //remove 1 element at index 2
// months.splice(2, 1 )
// console.log(months)
// //[ 'Jan', 'March', 'B', 'April', 'June' ]
// //replace at index 3 with 'X', 'Y'
// months.splice(3, 2, 'X', 'Y')
// console.log(months)
// //[ 'Jan', 'March', 'B', 'X', 'Y' ]