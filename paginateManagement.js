const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//64130500029 Tanachart Bunyarittiwan
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const iofc = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    const ulParent = document.getElementById('products')
    for(let i = 0; i < iofc.length; i++){
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${iofc[i].id}, NAME:${iofc[i].name}`
      ulParent.appendChild(liElement)
    }
  }

  const pageHandler = (event) => {
    const paginateE = document.querySelector('.pagination')
    for (let i = 0; i < paginateE.children.length; i++){
      const colorBut = paginateE.children[i]
      colorBut.style = 'border: 1px solid #999'
    }
    // const butcolored = document.querySelectorAll('button')
    // butcolored.forEach((butcolored) => (butcolored.style = 'border: 1px solid #999') )
    const productsUl = document.getElementById('products')
    productsUl.textContent = ''

    const cbtn = event?.target ?? paginateE.children[0]
    const cbtnId = cbtn.id
    showItemsOfCurrentPage(cbtnId)

    const dPage = document.getElementById(cbtnId)
    dPage.style = 'background-color: LightSteelBlue'
  }
  const showPageNumbers = () => {
    const total = getTotalPages(products,rowsPerPage)
    const divpage = document.querySelector('.pagination')
    for(let i = 1; i <= total; i++){
      const button = document.createElement('button')
      button.textContent = i
      button.setAttribute('id',i)
      divpage.appendChild(button)
      button.addEventListener('click',pageHandler)
    }  
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
