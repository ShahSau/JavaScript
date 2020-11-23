const width = 28
let score = 0
const scoreDisplay = document.getElementById('score')
const startButton = document.getElementById('start-button')
const grid = document.querySelector('.grid')
let gameOverId
let checkWinId
let leftId
let rightId
let upId
let downId
const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
  
const squares = []
  
//create your board

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    
    //add layout to the board
    if(layout[i] === 0) {
      squares[i].classList.add('pac-dot')
    } else if (layout[i] === 1) {
      squares[i].classList.add('wall')
    } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
    } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      }
  }
}
createBoard()

function startGame() {
  //move the Ghosts randomly
  ghosts.forEach(ghost => moveGhost(ghost))
  document.addEventListener('keyup', movePacman)
  checkWinId = setInterval(checkForWin, 100)
  gameOverId = setInterval(checkForGameOver, 100)
}
startButton.addEventListener('click', startGame)

//draw pacman onto the board
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pac-man')
squares[pacmanCurrentIndex].classList.add('pac-man-right')

function removePacman() {
  squares[pacmanCurrentIndex].classList.remove('pac-man')
  squares[pacmanCurrentIndex].classList.remove('pac-man-right')
  squares[pacmanCurrentIndex].classList.remove('pac-man-left')
  squares[pacmanCurrentIndex].classList.remove('pac-man-down')
  squares[pacmanCurrentIndex].classList.remove('pac-man-up')
}

function goLeft() {
  clearInterval(rightId)
  clearInterval(upId)
  clearInterval(downId)
  leftId = setInterval(function () {
    if (
    squares[pacmanCurrentIndex -1].classList.contains('wall') ||
    squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
    ) {
      clearInterval(leftId)
    } else {
      removePacman()
      pacmanCurrentIndex -= 1
      if (squares[pacmanCurrentIndex -1] === squares[363]) {
        pacmanCurrentIndex = 391
      }
      pacDotEaten()
      powerPelletEaten()
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    squares[pacmanCurrentIndex].classList.add('pac-man-left')
  }, 500)
}

function goRight() {
  clearInterval(leftId)
  clearInterval(upId)
  clearInterval(downId)
  rightId = setInterval(function () {
    if(
      squares[pacmanCurrentIndex +1].classList.contains('wall') ||
      squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
    ) {
      clearInterval(rightId)
    } else {
      removePacman()
      pacmanCurrentIndex += 1
      if (squares[pacmanCurrentIndex +1] === squares[392]) {
        pacmanCurrentIndex = 364
      }
      pacDotEaten()
      powerPelletEaten()
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    squares[pacmanCurrentIndex].classList.add('pac-man-right')
  }, 500)
}

function goUp() {
  clearInterval(rightId)
  clearInterval(leftId)
  clearInterval(downId)
  upId = setInterval(function () {
  if(
    squares[pacmanCurrentIndex -width].classList.contains('wall') ||
    squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
    ) {
      clearInterval(upId)
    } else {
      removePacman()
      pacmanCurrentIndex -= width
      squares[pacmanCurrentIndex].classList.add('pac-man')
      squares[pacmanCurrentIndex].classList.add('pac-man-up')
      pacDotEaten()
      powerPelletEaten()
    }
  }, 500)
}

function goDown() {
  clearInterval(rightId)
  clearInterval(upId)
  clearInterval(leftId)
  downId = setInterval(function () {
    if (
      squares[pacmanCurrentIndex +width].classList.contains('wall') ||
      squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
    ) {
      clearInterval(downId)
    } else {
      removePacman()
      pacmanCurrentIndex += width
      squares[pacmanCurrentIndex].classList.add('pac-man')
      squares[pacmanCurrentIndex].classList.add('pac-man-down')
      pacDotEaten()
      powerPelletEaten()
    }
  }, 500)
}

//move pacman
function movePacman(e) {
  switch(e.keyCode) {
    case 37:
      goLeft()
      break
    case 38:
      goUp()
      break
    case 39:
      goRight()
      break
    case 40:
      goDown()
      break
  }
}

    
// what happens when you eat a pac-dot
function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++
    scoreDisplay.innerHTML = score
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    squares[pacmanCurrentIndex].innerHTML = ''
  }
}
    
//what happens when you eat a power-pellet
function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    score +=10
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unScareGhosts, 10000)
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
  }
}
  
//draw blinky on the board
let blinkyCurrentIndex = 197
squares[blinkyCurrentIndex].classList.add('blinky')
  
//get the coordinates of pacman or blinky on the grid with X and Y axis
function getCoordinates(index) {
  return [index % width, Math.floor(index / width)]
}
  
  
//move blinky
function moveBlinky() {
  const directions =  [-1, +1, +width, -width]
  let ghostimerId  = NaN
  let direction = directions[Math.floor(Math.random() * directions.length)]
  
  ghostimerId = setInterval(function() {
    console.log(blinkyCurrentIndex)
    if  (!squares[blinkyCurrentIndex + direction].classList.contains('wall')) {
      //remove the ghosts classes
      squares[blinkyCurrentIndex].classList.remove('blinky')
      //move into that space
  
      const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex)
      const [pacManX, pacManY] = getCoordinates(pacmanCurrentIndex)
      const [blinkyNextX, blinkyNextY] = getCoordinates(blinkyCurrentIndex + direction)
  
      function isXCoordCloser() {
        if ((blinkyNextX - pacManX) > (blinkyX - pacManX)){
          return true
        } else return false
      }
  
      function isYCoordCloser() {
        if ((blinkyNextY - pacManY) > (blinkyY - pacManY)) {
          return true
        } else return false
      }
      if (isXCoordCloser() || isYCoordCloser()) {
        blinkyCurrentIndex += direction
        squares[blinkyCurrentIndex].classList.add('blinky')
      } else {
        squares[blinkyCurrentIndex].classList.add('blinky')
        direction = directions[Math.floor(Math.random() * directions.length)]
      }
      squares[blinkyCurrentIndex].classList.add('blinky')
      } else direction = directions[Math.floor(Math.random() * directions.length)]
  
      if(squares[blinkyCurrentIndex].classList.contains('pac-man')) clearInterval(ghostimerId)
  
  }, 300)
}
  
  
moveBlinky()
    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
          !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
          ghosts.forEach(ghost => clearInterval(ghost.timerId))
          document.removeEventListener('keyup', movePacman)
          setTimeout(function(){ alert("Game Over"); }, 500)
        }
      }
    
      //check for a win - more is when this score is reached
      function checkForWin() {
        if (score === 274) {
          ghosts.forEach(ghost => clearInterval(ghost.timerId))
          document.removeEventListener('keyup', movePacman)
          setTimeout(function(){ alert("You have WON!"); }, 500)
        }
      }
  