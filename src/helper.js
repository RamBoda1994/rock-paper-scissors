
const compChoices = ['r','p','s'];

export function computerChoice(){
    const choice = Math.floor(Math.random() * 3);
    return compChoices[choice];
}

export function letterToWord(selection){
    switch(selection){
        case 'r':
            return 'Rock';
        case 'p':
            return 'Paper';
        case 's':
            return 'Scissors';
        default:
            break;
    }
}