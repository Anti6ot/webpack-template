import example from './images/jsfirst.jpg'
import Example from './images/03.svg'
import './styles/main.scss'

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

const heading = document.createElement('h1')
heading.textContent = `Как интереснО!!!!!!`

const root = document.querySelector('#root')
root.append(heading, p)


console.log("Как интересно!");






