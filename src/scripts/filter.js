import { products } from "./productsData.js"
import { render } from "./render.js"


export const filterByRange = (array) => {
    const inputRange = document.querySelector('#rangeInput')
    const span = document.querySelector('.mainContent__filterDiv__value')
  
    inputRange.addEventListener('input', () => {
  
      span.innerText = inputRange.value
  
      const productFilter = array.filter((product) => {
        return product.price >= inputRange.value
      })
  
      console.log(productFilter)
  
      render(productFilter)
    })
  }