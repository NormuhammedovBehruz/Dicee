const images1 = document.querySelector('.img1')
const images2 = document.querySelector('.img2')

const refresh = document.querySelector('.heading-h1')

const random1 = Math.floor(Math.random() * 6 + 1)
const random2 = Math.floor(Math.random() * 6 + 1)

images1.src = `images/dice${random1}.png`
images2.src = `images/dice${random2}.png`

if(random1 > random2) {
    refresh.textContent = 'Player 1 win'
} else if (random1 < random2) {
    refresh.textContent = 'Player 2 win'
} else {
    refresh.textContent = 'Drow !'
}