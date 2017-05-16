import { Game } from 'joj-core';
import * as assert from 'ptz-assert';
import R from 'ramda';
import * as Ai from './index';

describe('Ai', () => {
    describe('getComputerMove', () => {
        it('Start as black', () => {
            const game = Game.createGame();
            const move = Ai.getComputerMove(game);

            // [[From], ...[to]]
            const allowedMoves = [
                [[0, 7], [0, 6], [1, 6]],
                [[1, 7], [0, 6], [1, 6], [2, 6]],
                [[2, 7], [1, 6], [2, 6], [3, 6]],
                [[3, 7], [2, 6], [3, 6], [4, 6]],
                [[4, 7], [3, 6], [4, 6], [5, 6]],
                [[5, 7], [4, 6], [5, 6], [6, 6]],
                [[6, 7], [5, 6], [6, 6], [7, 6]],
                [[7, 7], [6, 6], [7, 6]]
            ].reduce((moves, move) => {
                const from = R
            }, []);

            assert.equal(gameBeforeLastMove.movements.length, game.movements.length);
            assert.deepEqual(gameBeforeLastMove.movements, game.movements);
        });
    });
});
