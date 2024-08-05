const nanoCard = document.querySelector('.card')
console.log("this is the nanocard ",nanoCard.innerHTML)
const textCenter = document.querySelector('h6.text-center')
const card = document.querySelector('#ga-7096a2 .slate')
card.innerHTML = "Everything You Need to Know About Data"
const sth = document.createElement('span')
sth.innerHTML = "<h6 style='color:blue'>This is a created element</h6>"
card.appendChild(sth)

const mainHeader = document.querySelector('h1')
const otherHeader = document.querySelector('h4')
const exitedText = document.createElement('span')
exitedText.textContent = "!!!"
mainHeader.appendChild(exitedText)
otherHeader.appendChild(exitedText)
card.insertAdjacentHTML('afterbegin','<h6>YEAH</h6>')
const arrayOfClasses = card.className.split(' ')
console.log(arrayOfClasses, "those are classes", "the first class is ",arrayOfClasses[0])
console.log(card.classList.contains("nothing"))


//assignment
const startLearningButton = document.querySelector('#start-now')
startLearningButton.style.cssText = 'background-color:#2015ff; border-radius:5rem;';

const linkNewClasses = document.querySelector('.hero--homepage')
linkNewClasses.classList.add('new-hero')

const cardClasses = document.querySelectorAll('.card')
cardClasses.forEach(card=>{
        card.classList.add('new-card')
})