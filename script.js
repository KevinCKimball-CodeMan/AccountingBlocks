const baseBlocksData = [
    { classification: 'DR Asset', color: 'white'},
    { classification: 'CR Asset', color: 'white' },
    { classification: 'DR Liability', color: 'white' },
    { classification: 'CR Liability', color: 'white' },
    { classification: 'DR Equity', color: 'white' },
    { classification: 'CR Equity', color: 'white' },
    { classification: 'DR Dividends', color: 'white' },
    { classification: 'CR Dividends', color: 'white' },
    { classification: 'DR Revenues', color: 'white' },
    { classification: 'CR Revenues', color: 'white' },
    { classification: 'DR Expenses', color: 'white' },
    { classification: 'CR Expenses', color: 'white' }
];

const debitCreditData = [
    'Debit', 'Credit', 'Debit', 'Credit', 'Debit', 'Credit',
    'Debit', 'Credit', 'Debit', 'Credit', 'Debit', 'Credit'
];

const fallingBlocksData = [
    { account: '+ Cash', color: 'green', classification: 'DR Asset' },
    { account: '- Cash', color: 'red', classification: 'CR Asset' },
    { account: '+ Acct. Receivable', color: 'green', classification: 'DR Asset' },
    { account: '- Acct. Receivable', color: 'red', classification: 'CR Asset' },
    { account: '+ Prepaid Rent', color: 'green', classification: 'DR Asset' },
    { account: '- Prepaid Rent', color: 'red', classification: 'CR Asset' },
    { account: '+ Prepaid Insurance', color: 'green', classification: 'DR Asset' },
    { account: '- Prepaid Insurance', color: 'red', classification: 'CR Asset' },
    { account: '+ Store Supplies', color: 'green', classification: 'DR Asset' },
    { account: '- Store Supplies', color: 'red', classification: 'CR Asset' },
    { account: '+ Office Supplies', color: 'green', classification: 'DR Asset' },
    { account: '- Office Supplies', color: 'red', classification: 'CR Asset' },
    { account: '+ Equipment', color: 'green', classification: 'DR Asset' },
    { account: '- Equipment', color: 'red', classification: 'CR Asset' },
    { account: '+ Buildings', color: 'green', classification: 'DR Asset' },
    { account: '- Buildings', color: 'red', classification: 'CR Asset' },
    { account: '+ Land', color: 'green', classification: 'DR Asset' },
    { account: '- Land', color: 'red', classification: 'CR Asset' },
    { account: '+ Notes Receivable', color: 'green', classification: 'DR Asset' },
    { account: '- Notes Receivable', color: 'red', classification: 'CR Asset' },
    { account: '+ Accounts Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Accounts Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Wages Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Wages Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Notes Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Notes Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Taxes Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Taxes Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Interest Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Interest Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Interest Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Interest Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Rent Payable', color: 'green', classification: 'CR Liability' },
    { account: '- Rent Payable', color: 'red', classification: 'DR Liability' },
    { account: '+ Unearned Revenue', color: 'green', classification: 'CR Liability' },
    { account: '- Unearned Revenue', color: 'red', classification: 'DR Liability' },
    { account: '+ Common Stock', color: 'green', classification: 'CR Equity' },
    { account: '- Common Stock', color: 'red', classification: 'DR Equity' },
    { account: '+ Ret. Earnings', color: 'green', classification: 'CR Equity' },
    { account: '- Ret. Earnings', color: 'red', classification: 'DR Equity' },
    { account: '+ Dividends', color: 'green', classification: 'DR Dividends' },
    { account: '- Dividends', color: 'red', classification: 'CR Dividends' },
    { account: '- Service Revenue', color: 'red', classification: 'DR Revenues' },
    { account: '+ Consulting Revenue', color: 'green', classification: 'CR Revenues' },
    { account: '- Consulting Revenue', color: 'red', classification: 'DR Revenues' },
    { account: '+ Consulting Revenue', color: 'green', classification: 'CR Revenues' },
    { account: '- Rental Revenue', color: 'red', classification: 'DR Revenues' },
    { account: '+ Rental Revenue', color: 'green', classification: 'CR Revenues' },
    { account: '- Service Revenue', color: 'red', classification: 'DR Revenues' },
    { account: '+ Service Revenue', color: 'green', classification: 'CR Revenues' },
    { account: '- Interest Revenue', color: 'red', classification: 'DR Revenues' },
    { account: '+ Interest Revenue', color: 'green', classification: 'CR Revenues' },
    { account: '+ Wages Expense', color: 'green', classification: 'DR Expenses' },
    { account: '- Wages Expense', color: 'red', classification: 'CR Expenses' },
    { account: '+ Salaries Expense', color: 'green', classification: 'DR Expenses' },
    { account: '- Salaries Expense', color: 'red', classification: 'CR Expenses' },
    { account: '+ Advertising Expense', color: 'green', classification: 'DR Expenses' },
    { account: '- Advertising Expense', color: 'red', classification: 'CR Expenses' },
    { account: '+ Utilities Expense', color: 'green', classification: 'DR Expenses' },
    { account: '- Utilities Expense', color: 'red', classification: 'CR Expenses' },
    { account: '+ Rent Expense', color: 'green', classification: 'DR Expenses' },
    { account: '- Rent Expense', color: 'red', classification: 'CR Expenses' }
];

const gameContainer = document.getElementById('game-container');
const baseBlocksContainer = document.getElementById('base-blocks');
const debitCreditBlocksContainer = document.createElement('div');
debitCreditBlocksContainer.id = 'debit-credit-blocks';
gameContainer.appendChild(debitCreditBlocksContainer);

const permanentAccountsBlocksContainer = document.createElement('div');
permanentAccountsBlocksContainer.id = 'permanent-accounts-blocks';
gameContainer.appendChild(permanentAccountsBlocksContainer);

const fallingSound = document.getElementById('falling-sound');
const explosionSound = document.getElementById('explosion-sound');
const kaChingSound = document.getElementById('ka-ching-sound');

const gameOverModal = document.getElementById('game-over-modal');
const gameOverMessage = document.getElementById('game-over-message');
const restartButton = document.getElementById('restart-button');
const exitButton = document.getElementById('exit-button');

let currentBlock = null;
let fallingBlockElement = null;
let intervalId = null;
let countdownIntervalId = null;
let fallSpeed = 7.5; // Normal fall speed (25% slower than the original 10)
let acceleratedFallSpeed = 50; // Accelerated fall speed for down arrow
let reverseFallSpeed = -20; // Reverse fall speed for up arrow
let currentFallSpeed = fallSpeed; // Variable to track the current fall speed
let timeLeft = 120; // Two-minute countdown

// Scoring variables
let correctScore = 0;
let incorrectScore = 0;
let usedBlocks = new Set(); // To track used blocks

// Get score elements
const correctScoreElement = document.getElementById('correct-score');
const incorrectScoreElement = document.getElementById('incorrect-score');
const finalScoreElement = document.getElementById('final-score');
const timeLeftElement = document.getElementById('time-left');
const welcomeMessageElement = document.getElementById('welcome-message');

const blockHeight = 70; // Updated block height
const baseBlockWidth = gameContainer.clientWidth / baseBlocksData.length; // Block width matches the base block width
const halfBlockWidth = baseBlockWidth / 2;

function updateScoreDisplay() {
    correctScoreElement.innerText = correctScore;
    incorrectScoreElement.innerText = incorrectScore;
    finalScoreElement.innerText = correctScore + incorrectScore;
}

function updateTimeDisplay() {
    timeLeftElement.innerText = timeLeft;
}

function createBaseBlocks() {
    baseBlocksData.forEach(block => {
        const div = document.createElement('div');
        div.classList.add('base-block');
        div.style.backgroundColor = block.color;
        div.innerText = block.classification;
        baseBlocksContainer.appendChild(div);
    });
}

function createDebitCreditBlocks() {
    debitCreditData.forEach(label => {
        const div = document.createElement('div');
        div.classList.add('debit-credit-block');
        div.innerText = label;
        debitCreditBlocksContainer.appendChild(div);
    });
}

function createPermanentAccountsBlocks() {
    const permanentAccountsBlock1 = document.createElement('div');
    permanentAccountsBlock1.classList.add('permanent-accounts-block');
    permanentAccountsBlock1.style.backgroundColor = 'lightgrey';
    permanentAccountsBlock1.style.width = `${baseBlockWidth * 6}px`; // Covers from "DR Asset" to "CR Equity"
    permanentAccountsBlock1.innerText = 'Permanent Accounts';
    permanentAccountsBlocksContainer.appendChild(permanentAccountsBlock1);

    const permanentAccountsBlock2 = document.createElement('div');
    permanentAccountsBlock2.classList.add('permanent-accounts-block');
    permanentAccountsBlock2.style.backgroundColor = 'lightorange';
    permanentAccountsBlock2.style.width = `${baseBlockWidth * 6}px`; // Covers from "DR Dividends" to "CR Expenses"
    permanentAccountsBlock2.innerText = 'Temporary Accounts';
    permanentAccountsBlocksContainer.appendChild(permanentAccountsBlock2);
}

function createFallingBlock() {
    if (usedBlocks.size >= fallingBlocksData.length) {
        endGame();
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * fallingBlocksData.length);
    } while (usedBlocks.has(randomIndex));

    usedBlocks.add(randomIndex);
    currentBlock = fallingBlocksData[randomIndex];
    fallingBlockElement = document.createElement('div');
    fallingBlockElement.classList.add('falling-block');
    fallingBlockElement.style.backgroundColor = currentBlock.color;
    fallingBlockElement.innerText = currentBlock.account;
    fallingBlockElement.style.color = '#fff'; // Ensure the font color is set to white
    fallingBlockElement.style.left = `${gameContainer.clientWidth / 2 - baseBlockWidth / 2}px`;
    fallingBlockElement.style.top = '0px';
    gameContainer.appendChild(fallingBlockElement);

    // Play the falling sound
    fallingSound.currentTime = 0;
    fallingSound.play();
}

function moveFallingBlock() {
    const currentTop = parseInt(fallingBlockElement.style.top);
    fallingBlockElement.style.top = `${currentTop + currentFallSpeed}px`;

    if (currentTop + blockHeight >= gameContainer.clientHeight - (baseBlocksContainer.offsetHeight + 50)) { // Adjusted to start stacking directly on the classification blocks
        checkBlockAlignment();
    }
}

function checkBlockAlignment() {
    fallingSound.pause();

    const fallingBlockLeft = parseInt(fallingBlockElement.style.left);
    const fallingBlockRight = fallingBlockLeft + baseBlockWidth;
    const baseBlockIndex = Math.floor((fallingBlockLeft + fallingBlockRight) / 2 / baseBlockWidth);
    const baseBlock = baseBlocksData[baseBlockIndex];
    const baseBlockElement = baseBlocksContainer.children[baseBlockIndex];
    const stackHeight = baseBlockElement.dataset.stackHeight || 0;

    // Check if the falling block covers more than 50% of the base block
    const overlapWidth = Math.min(fallingBlockRight, (baseBlockIndex + 1) * baseBlockWidth) - Math.max(fallingBlockLeft, baseBlockIndex * baseBlockWidth);
    const overlapPercentage = overlapWidth / baseBlockWidth;

    if (currentBlock.classification === baseBlock.classification && overlapPercentage > 0.5) {
        // Correct alignment
        kaChingSound.play();
        correctScore++;
        fallingBlockElement.style.top = `${gameContainer.clientHeight - (blockHeight * (1 + parseInt(stackHeight))) - (baseBlocksContainer.offsetHeight + 50)}px`; // Adjusted for correct stacking directly on classification blocks
        fallingBlockElement.style.left = `${baseBlockIndex * baseBlockWidth}px`;
        baseBlockElement.dataset.stackHeight = parseInt(stackHeight) + 1;
        fallingBlockElement = null;
        createFallingBlock(); // Create a new falling block
    } else {
        // Incorrect alignment
        explosionSound.play();
        incorrectScore--;
        gameContainer.removeChild(fallingBlockElement);
        fallingBlockElement = null;
        createFallingBlock(); // Create a new falling block
    }

    updateScoreDisplay();
}

function handleKeyPress(event) {
    if (fallingBlockElement) {
        const currentLeft = parseInt(fallingBlockElement.style.left);
        const currentTop = parseInt(fallingBlockElement.style.top);

        if (event.key === 'ArrowLeft' && currentLeft > 0) {
            fallingBlockElement.style.left = `${currentLeft - halfBlockWidth}px`;
        } else if (event.key === 'ArrowRight' && currentLeft < gameContainer.clientWidth - baseBlockWidth) {
            fallingBlockElement.style.left = `${currentLeft + halfBlockWidth}px`;
        } else if (event.key === 'ArrowDown') {
            currentFallSpeed = acceleratedFallSpeed;
        } else if (event.key === 'ArrowUp') {
            currentFallSpeed = reverseFallSpeed;
        }
    }
}

function handleKeyRelease(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        currentFallSpeed = fallSpeed;
    }
}

// Modified startGame function
function startGame() {
    // Hide the welcome message and reset the game state
    welcomeMessageElement.style.display = 'none';
    resetGame();  // Ensure game is reset to a clean state

    // Create the blocks for the new game
    createBaseBlocks();
    createPermanentAccountsBlocks();
    createDebitCreditBlocks();
    createFallingBlock();  // Start with a falling block

    // Set up the block falling and timer intervals
    intervalId = setInterval(() => {
        if (fallingBlockElement) {
            moveFallingBlock();
        }
    }, 100);

    // Countdown timer for the game
    countdownIntervalId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimeDisplay();
        } else {
            endGame();  // Automatically end game when time runs out
        }
    }, 1000);
}


function resetGame() {
    // Reset scores and timer
    correctScore = 0;
    incorrectScore = 0;
    timeLeft = 120;
    usedBlocks.clear(); // Clear set of used blocks

    // Update the score and timer display
    updateScoreDisplay();
    updateTimeDisplay();

    // Clear game board elements
    baseBlocksContainer.innerHTML = '';  // Clear base blocks
    debitCreditBlocksContainer.innerHTML = '';  // Clear debit/credit blocks
    permanentAccountsBlocksContainer.innerHTML = '';  // Clear permanent accounts blocks

    // Remove all falling blocks from previous game
    const stackedBlocks = gameContainer.querySelectorAll('.falling-block');
    stackedBlocks.forEach(block => gameContainer.removeChild(block));

    // Remove current falling block if exists
    if (fallingBlockElement) {
        gameContainer.removeChild(fallingBlockElement);
        fallingBlockElement = null;
    }

    // Clear any existing intervals for game logic
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }

    // Hide the game-over modal and show the welcome message
    gameOverModal.style.display = 'none';
    welcomeMessageElement.style.display = 'block'; // Show welcome message
}

function endGame() {
    clearInterval(intervalId);
    clearInterval(countdownIntervalId);
    fallingSound.pause();

    gameOverMessage.innerHTML = `Game Over!<br>Correct: ${correctScore}<br>Incorrect: ${incorrectScore}<br>Final score: ${correctScore + incorrectScore}<br>Time left: ${timeLeft} seconds`;
    gameOverModal.style.display = 'block';
}

// Restart button handler to reset and start game
restartButton.addEventListener('click', () => {
    resetGame();  // Clean state
    startGame();  // Start new game
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !intervalId) {
        startGame();
    } else if (event.key === 'Escape') {
        endGame();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        handleKeyPress(event);
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        handleKeyRelease(event);
    }
});
