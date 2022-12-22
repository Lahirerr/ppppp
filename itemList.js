// import { products } from './data/products.js'
const { template } = require('@babel/core')
const products = require('./data/products.js')

//64130500029 Tanachart Bunyarittiwan
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
      const text = document.querySelector('input')
      text.addEventListener('input',filterItemsHandler)
      showItems(products)
  }

  const filterItemsHandler = (event) => {
      const filteredItems = items.filter((item) =>
      item.keywords.toLowerCase().includes(event.target.value.toLowerCase()))
      showItems(filteredItems)
  }

  
  const showItems = (items) => {
    const ul = document.getElementById('items')
    ul.textContent = " "
    for (let i = 0; i < items.length; i++) {
      const liEle = document.createElement('li')
      liEle.textContent = `ID:${items[i].id}, NAME:${items[i].name}, KEYWORDS:${items[i].keywords}`
      ul.appendChild(liEle)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
