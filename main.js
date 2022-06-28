
const pokemon = [
    {name: 'bulbasaur', id: '001'},
    {name: 'charmander', id: '004'},
    {name: 'squirtle', id: '007'}
]


const containerDiv = document.querySelector('#container')

// DOM = Document Object Model 
// loop over every ID
// create an HTML element
// set the HTML element values
// append HTML element to the DOM 

pokemon.map((element, index) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    console.log(element)
    let div = document.createElement('div') // adding a div to house the img element 
    let h3 = document.createElement('h3')
    h3.innerText = element.name
    div.setAttribute('class', 'pokemon-card') // setting the class of the div 
    let img = document.createElement('img') // creating the img element itself
    img.src = imgUrl
    div.append(img, h3) // append the img element to the div
    containerDiv.append(div)
})


