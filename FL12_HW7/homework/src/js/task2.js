let playGame = confirm('Do you want to play a game?');

second: 
if (playGame === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let minNumber = 0;
    let maxNumber = 8;
    let totalPrize = 0;
    //this names used for fixing eslint's 'magic number' warnings
    let prizeFirst = 100;
    let prizeSecond = 50;
    let prizeThird = 25;
    let prize = [0, prizeThird, prizeSecond, prizeFirst];
    let chooseRandomNumber;
    const two = 2;
    const four = 4;

    do {
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        let attempts = 3;
        
        first:
        for (let i = 3; i >= 0; i--) {
            if (i === 0) {
                alert(`Thank you for your participation. Your prize is: 0$`);
                let playAgain = confirm('Do You want to play again?');

                if (playAgain === true) {
                    break first;
                } else {
                    break second;
                }
            }
            
            chooseRandomNumber = parseInt( prompt(
            `Choose a roulette pocket number from 0 to ${maxNumber}
            \nAttempts left: ${attempts}
            \nTotal prize: ${totalPrize}$
            \nPossible prize on current attempt: ${prize[i]}$`, '0') );

            if (randomNumber === chooseRandomNumber) {
                totalPrize += prize[i];
                let playMore = confirm(`Congratulation, you won!\nYour prize is: ${prize[i]}$.
                                \nDo you want to continue?`);
                
                if (playMore === false) {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                    let playAgain = confirm('Do You want to play again?');

                    if (playAgain === true) {
                        break first;
                    } else {
                        break second;
                    }
                } else {
                    maxNumber += four;

                    for (let i = 1; i < four; i++) {
                        prize[i] *= two;
                    }
                    
                    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
                    break first;
                }
            }
            attempts--;
        }
        chooseRandomNumber++;
    } while (chooseRandomNumber);
}