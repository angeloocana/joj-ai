'use strict';

var _jojCore = require('joj-core');

var J = _interopRequireWildcard(_jojCore);

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var Ai = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Ai', function () {
    describe('getComputerMove', function () {
        it('Start as black', function () {
            // [[From], ...[to]]
            var allowedMoves = J.Move.getAllowedMovesFromArrays([[[0, 7], [0, 6], [1, 6]], [[1, 7], [0, 6], [1, 6], [2, 6]], [[2, 7], [1, 6], [2, 6], [3, 6]], [[3, 7], [2, 6], [3, 6], [4, 6]], [[4, 7], [3, 6], [4, 6], [5, 6]], [[5, 7], [4, 6], [5, 6], [6, 6]], [[6, 7], [5, 6], [6, 6], [7, 6]], [[7, 7], [6, 6], [7, 6]]]);
            var game = J.Game.createGame();
            var move = Ai.getComputerMove(game);
            assert.ok(J.Move.movesContains(allowedMoves, move));
        });
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map