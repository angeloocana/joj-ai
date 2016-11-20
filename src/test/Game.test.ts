import { Game, Players, Player } from "joj-core";
import { ok, deepEqual, equal, notEqual } from "ptz-assert";
import Ai from "../Ai";

describe("Game", function () {
    let game: IGame;

    describe("backMove", () => {
        it("backMove vsComputer game", function () {
            let players = new Players({
                white: new Player({
                    name: "Angelo",
                    foto: "img/black_user.png",
                }),
                black: new Player({
                    name: "Gabi",
                    foto: "img/white_user.png",
                    ai: new Ai()
                })
            });

            let game = new Game({
                players
            });

            game.move({ x: 2, y: 7 }, { x: 2, y: 6 });

            let gameBeforeLastMove = game.getCopy();

            game.move({ x: 2, y: 6 }, { x: 2, y: 5 });

            game.backMove();

            equal(gameBeforeLastMove.movements.length, game.movements.length);
            deepEqual(gameBeforeLastMove.movements, game.movements);
        });
    });
});