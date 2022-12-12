function isImageFileExtension(fileName) {
    if(fileName === null || fileName === undefined){
        return false
    }
    if(fileName.includes('.jpeg')){
        return true
    }
    else if(fileName.includes('.jpg')){
        return true
    }
    else if(fileName.includes('.svg')){
        return true
    }
    else if(fileName.includes('.png')){
        return true
    }
    else if(fileName.includes('.gif')){
        return true
    }
    else{
        return false
    }
    
}
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('myPic.jpg'))
console.log(isImageFileExtension('product.gif'))
console.log(isImageFileExtension('img.svg'))
console.log(isImageFileExtension('student.png'))
console.log(isImageFileExtension('x.doc'))
console.log(isImageFileExtension('y.pdf'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))