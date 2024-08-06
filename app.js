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

const changeText = document.querySelector('h1')
changeText.addEventListener('mouseenter',function(){
        changeText.innerText = 'Build an AR App'
})

changeText.addEventListener('mouseleave',function(){
        changeText.innerText = 'Learn ARKit'
});



//assignment
let checked = false;
const heroModule = document.querySelector('.hero__module')
heroModule.addEventListener('click',deleteLastElement)
function deleteLastElement(){
        event.preventDefault();
        heroModule.removeChild(heroModule.lastElementChild);
        removeListener();
}

function removeListener(){
        heroModule.removeEventListener('click',deleteLastElement);
}


const classroom = document.querySelector('#ga-99cff7')
classroom.addEventListener('click',addNewClass)
function addNewClass(e){
        e.preventDefault();
        console.log('classroom')
}


// const myDiv = document.createElement('div')
// for(let i = 0; i <200; i++){     
//         const myP = document.createElement('p')
//         myP.textContent = 'Hello Pragraph ' + i
//         myP.addEventListener('click',function(e){
//                 console.log('Clicked on paragraph', e.target.textContent)
//         })
// 	myDiv.appendChild(myP)
// }
// document.body.appendChild(myDiv)

const delegateDiv = document.createElement('div')
for(let i = 0; i <200; i++){
        const delegateP = document.createElement('p')
        delegateP.textContent = 'Hello Pragraph ' + i
        delegateDiv.appendChild(delegateP)
}

document.body.appendChild(delegateDiv)

delegateDiv.addEventListener('click',function(event){
       if(event.target.nodeName === 'P')
       console.log(event.target.textContent)
})



//assignment
const cardForButton = document.querySelectorAll('.card--nanodegree__title')
cardForButton.forEach(card=>{
        createButton(card)
})


function createButton(element){
        let star;
        const newButtonOb = {
                state:false,
                text: "Add To Favourites!"
        }
        const newButton = document.createElement('button')
        // newButton.style.cssText = "position:absolute; background-color:blue; border:none;"
        newButton.classList.add('button')
        newButton.classList.add('button--primary')
        newButton.textContent = 'Add To Favourites!'
        newButton.addEventListener('click',function(event){
                event.preventDefault();
                newButtonOb.state = !newButtonOb.state
                if(newButtonOb.state)
                        star = addStar(element)  
                else
                        removeStar(element,star)
                newButton.textContent = newButtonOb.state===false?newButtonOb.text:"Remove From Favourites!"
        })
        element.appendChild(newButton)
}



function addStar(element){
        const star =document.createElement('div')
        star.textContent = '⭐ ⭐ ⭐ '
        element.appendChild(star)
        return star;
}

function removeStar(element,star){
        if(star)
                element.removeChild(star)
}