import { products } from "./productsData.js"

export const render = (array) => {
    const productList = document.querySelector(".mainContent__albumDiv")
    productList.innerHTML = ''

    array.forEach(product => {
        const item = createItem(product)

        productList.appendChild(item)
    })
}

const createItem = (product => {
    const upperbox = document.createElement('div')
    const insidebox = document.createElement('div')
    const infobox = document.createElement('div')
    const pricebox = document.createElement('div')
    const item = document.createElement('li')
    const title = document.createElement('h2')
    const category = document.createElement('p')
    const price = document.createElement('p')
    const buybutton = document.createElement('button')
    const itemimg = document.createElement('img')
    const band = document.createElement('h3')
    const year = document.createElement('p')

    item.classList.add('list__item')
    upperbox.classList.add('item__upperBox')
    insidebox.classList.add('item__insideBox')
    infobox.classList.add('item__infoBox')
    pricebox.classList.add('item__priceBox')
    title.classList.add('item__title')
    price.classList.add('item__price')
    buybutton.classList.add('buyButton')
    itemimg.classList.add("item__img")
    band.classList.add('item__text')
    year.classList.add('item__text')
    category.classList.add('hidden')

    itemimg.setAttribute('src', product.img)
    title.innerHTML = product.title
    band.innerHTML = product.band
    year.innerHTML = product.year
    price.innerHTML = `R$ ${product.price}`
    buybutton.innerHTML = "Comprar"
    category.innerHTML = product.category

    if (product.category === 1) {
        category.innerHTML = "Pop"
    } 
    if (product.category === 2) {
        category.innerHTML = "MPB"
    } 
    if (product.category === 3) {
        category.innerHTML = "Forro"
    }
    if (product.category === 4) {
        category.innerHTML = "Samba"
    } 
    if (product.category === 5) {
        category.innerHTML = "Baiao"
    } 
    if (product.category === 6) {
        category.innerHTML = "Rap"
    } 
    if (product.category === 7) {
        category.innerHTML = "Hip-Hop"
    } 
    if (product.category === 8) {
        category.innerHTML = "Rock"
    } 
    if (product.category === 9) {
        category.innerHTML = "Reggae"
    } 
    if (product.category === 10) {
        category.innerHTML = "Country"
    } 
    if (product.category === 11) {
        category.innerHTML = "Gospel"
    } 

    item.append(itemimg, upperbox)
    upperbox.appendChild(insidebox)
    insidebox.append(infobox, title, pricebox)
    infobox.append(band, year)
    pricebox.append(price, buybutton)

    return item
})

export const renderDarkMode = () => {
    const darkButton = document.querySelector('.mode__controller')
    const html = document.querySelector('html')

    const modePreference = JSON.parse(localStorage.getItem('dark__mode'))

    if(modePreference) {
        darkButton.setAttribute('src', './src/assets/img/sun.svg')
        html.classList.add('dark__mode')
    } else {
        darkButton.setAttribute('src', './src/assets/img/moon.svg')
        html.classList.remove('dark__mode')
    }

    darkButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')) {
            darkButton.setAttribute('src', './src/assets/img/sun.svg')
            localStorage.setItem('dark__mode', true)
        } else {
            darkButton.setAttribute('src', './src/assets/img/moon.svg')
            localStorage.setItem('dark__mode', false)
        }
    })
}