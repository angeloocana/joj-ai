'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComputerMove = undefined;

var _jojCore = require('joj-core');

var J = _interopRequireWildcard(_jojCore);

var _ptzMath = require('ptz-math');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get closest positions to win.
 */
function getClosestMovesToWin(piece) {
    return piece.whereCanIGo.reduce(function (closestPositions, position) {
        var move = { from: piece, to: position };
        if (!closestPositions[0] || closestPositions[0].y > position.y) return [move];
        if (closestPositions[0].y === position.y) return closestPositions.concat(move);
        return closestPositions;
    }, []);
}
/**
 * Get closest moves to win.
 */
function getClosestMovesToWinForPieces(pieces) {
    return pieces.reduce(function (accMoves, piece) {
        var moves = getClosestMovesToWin(piece);
        if (!accMoves[0]) return moves;
        if (!moves[0]) return accMoves;
        if (moves[0].to.y > accMoves[0].to.y) return moves;
        if (moves[0].to.y === accMoves[0].to.y) return accMoves.concat(moves);
        return moves;
    }, []);
}
/**
 * Tries to return the best move for a game.
 */
function getComputerMove(game) {
    var pieces = J.Game.getTurnPiecesWhereCanIGo(game);
    var moves = getClosestMovesToWinForPieces(pieces);
    return (0, _ptzMath.getRandomItem)(moves);
}
exports.getComputerMove = getComputerMove;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map