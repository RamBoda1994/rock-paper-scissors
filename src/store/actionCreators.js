import {SELECT_ROCK_PAPER_SCISSORS, RESET_GAME} from './actions';

export const selectRockPaperScissors = userSelection => {
    return {
        type: SELECT_ROCK_PAPER_SCISSORS,
        payload: {
            userSelection
        }
    }
}

export const resetGame = () => {
    return {
        type: RESET_GAME
    }
}