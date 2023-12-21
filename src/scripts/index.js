/* Desenvolva sua lógica aqui ... */

import { products } from "./productsData.js"
import { render, renderDarkMode } from "./render.js"
import { filterByRange } from "./filter.js"

const todosButton = document.querySelector("#todos")
todosButton.addEventListener("click", allGenres)

function allGenres() {
    render(products)
    filterByRange(products)
  }  


const popButton = document.querySelector("#pop")
popButton.addEventListener("click", filterPop)

function filterPop() {
    const filteredValues = products.filter((product) => product.category === 1 || product.category === "Pop")
    render(filteredValues)
    filterByRange(filteredValues)
  }
  
  
const mpbButton = document.querySelector("#mpb")
  mpbButton.addEventListener("click", filterMPB)

  function filterMPB() {
    const filteredValues = products.filter((product) => product.category === 2 || product.category === "MPB")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const forroButton = document.querySelector("#forro")
  forroButton.addEventListener("click", filterForro)

  function filterForro() {
    const filteredValues = products.filter((product) => product.category === 3 || product.category === "Forro")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const sambaButton = document.querySelector("#samba")
  sambaButton.addEventListener("click", filterSamba)

  function filterSamba() {
    const filteredValues = products.filter((product) => product.category === 4 || product.category === "Samba")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const baiaoButton = document.querySelector("#baiao")
  baiaoButton.addEventListener("click", filterBaiao)

  function filterBaiao() {
    const filteredValues = products.filter((product) => product.category === 5 || product.category === "Baiao")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const rapButton = document.querySelector("#rap")
  rapButton.addEventListener("click", filterRap)

  function filterRap() {
    const filteredValues = products.filter((product) => product.category === 6 || product.category === "Rap")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const hiphopButton = document.querySelector("#hiphop")
  hiphopButton.addEventListener("click", filterHiphop)

  function filterHiphop() {
    const filteredValues = products.filter((product) => product.category === 7 || product.category === "Hip-Hop")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const rockButton = document.querySelector("#rock")
  rockButton.addEventListener("click", filterRock)

  function filterRock() {
    const filteredValues = products.filter((product) => product.category === 8 || product.category === "Rock")
    render(filteredValues)
    filterByRange(filteredValues)
  }

const reggaeButton = document.querySelector("#reggae")
  reggaeButton.addEventListener("click", filterReggae)

  function filterReggae() {
    const filteredValues = products.filter((product) => product.category === 9 || product.category === "Reggae")
    render(filteredValues);
    filterByRange(filteredValues)
  }

const countryButton = document.querySelector("#country")
  countryButton.addEventListener("click", filterCountry)

  function filterCountry() {
    const filteredValues = products.filter((product) => product.category === 10 || product.category === "Country")
    render(filteredValues);
    filterByRange(filteredValues)
  }

const gospelButton = document.querySelector("#gospel")
  gospelButton.addEventListener("click", filterGospel)

  function filterGospel() {
    const filteredValues = products.filter((product) => product.category === 11 || product.category === "Gospel")
    render(filteredValues)
    filterByRange(filteredValues)
  }


const handleSelectFilter = () => {
    const buttons = document.querySelectorAll(".usualButton")
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const element = event.target;
  
        buttons.forEach((activeButton) => {
          if (activeButton.classList.contains("usualButton--active")) {
            activeButton.classList.remove("usualButton--active")
          }
       })

       element.classList.add("usualButton--active");
     })
   })
}

render(products)
renderDarkMode()
handleSelectFilter()
userPreferences()
filterByRange(products)