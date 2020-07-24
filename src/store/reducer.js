import {SELECT_ROCK_PAPER_SCISSORS, RESET_GAME} from './actions';
import {computerChoice,letterToWord} from '../helper';

const initialState = {
    message: 'PLAY!',
    userTotal: 0,
    computerTotal: 0,
    winner: ''
}

export const reducer = (state=initialState, action) => {
    const {type} = action;
    switch(type){
        case SELECT_ROCK_PAPER_SCISSORS:
            const {payload: {userSelection}} = action;
            const compSelection = computerChoice();
            switch(`${userSelection}${compSelection}`){
                case 'rs':
                case 'sp':
                case 'pr':
                    return {
                        ...state,
                        userTotal: state.userTotal + 1,
                        message: `${letterToWord(userSelection)}<sup>you</sup> & 
                        ${letterToWord(compSelection)}<sup>computer</sup>. You win!`,
                        winner: 'user'
                    }
                case 'sr':
                case 'ps':
                case 'rp':
                    return {
                        ...state,
                        computerTotal: state.computerTotal + 1,
                        message: `${letterToWord(userSelection)}<sup>you</sup> & 
                        ${letterToWord(compSelection)}<sup>computer</sup>. Computer wins!`,
                        winner: 'computer'
                    }
                case 'ss':
                case 'rr':
                case 'pp':
                    return {
                        ...state,
                        message: `${letterToWord(userSelection)}<sup>you</sup> & 
                        ${letterToWord(compSelection)}<sup>computer</sup>. Its a draw!`,
                        winner: 'draw'
                    }
                default:
                    break;
            }
        case RESET_GAME:
            return {
                userTotal: 0,
                computerTotal: 0,
                message: 'PLAY!'
            }
        default:
            return state;
    }
}

