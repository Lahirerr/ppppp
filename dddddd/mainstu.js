import { students } from "./data/students.js"
import { lecturers } from "./data/lecturers.js"
const divButton = document.getElementById('buttonPanel')

const studentsbutton =  divButton.children[0]
const lecturersbutton =  divButton.children[1]

// const StudentHandler = () =>{
//     const ulParent = document.querySelector('ul')
//     ulParent.textContent=''
//     for(let i=0; i<students.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID:${students[i].id},Name:${students[i].name}`
//         ulParent.appendChild(liElement)
//     }
// }
const allHandler = (event) =>{
    const item = event.target.id==="1"? students:lecturers
    const ulParent = document.querySelector('ul')
    ulParent.textContent=''
    for(let i=0; i<item.length; i++){
        const liElement = document.createElement('li')
        let textval =''
        for(const key in item[i]){
            textval=textval+`${key}: ${item[i][key]}`
        }
        liElement.textContent = textval
        ulParent.appendChild(liElement)
    }
}



// const lecturerHandler = () =>{
//     const ulParent = document.querySelector('ul')
//     ulParent.textContent=''
//     for(let i=0; i<lecturers.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID:${lecturers[i].id},Name:${lecturers[i].name}`
//         ulParent.appendChild(liElement)
//     }
// }


studentsbutton.addEventListener('click',allHandler)
lecturersbutton.addEventListener('click',allHandler)

// const studentsHandler = ()=>{
//     alert('Good BYE')
// }

// studentsbutton.addEventListener('click',studentsHandler)

// studentsbutton.removeEventListener('click',studentsHandler)