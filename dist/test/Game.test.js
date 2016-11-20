"use strict";

var _jojCore = require("joj-core");

var _ptzAssert = require("ptz-assert");

var _Ai = require("../Ai");

var _Ai2 = _interopRequireDefault(_Ai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Game", function () {
    var game = void 0;
    describe("backMove", function () {
        it("backMove vsComputer game", function () {
            var players = new _jojCore.Players({
                white: new _jojCore.Player({
                    name: "Angelo",
                    foto: "img/black_user.png"
                }),
                black: new _jojCore.Player({
                    name: "Gabi",
                    foto: "img/white_user.png",
                    ai: new _Ai2.default()
                })
            });
            var game = new _jojCore.Game({
                players: players
            });
            game.move({ x: 2, y: 7 }, { x: 2, y: 6 });
            var gameBeforeLastMove = game.getCopy();
            game.move({ x: 2, y: 6 }, { x: 2, y: 5 });
            game.backMove();
            (0, _ptzAssert.equal)(gameBeforeLastMove.movements.length, game.movements.length);
            (0, _ptzAssert.deepEqual)(gameBeforeLastMove.movements, game.movements);
        });
    });
});