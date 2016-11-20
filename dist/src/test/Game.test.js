import { Game, Players, Player } from "joj-core";
import { deepEqual, equal } from "ptz-assert";
describe("Game", function () {
    let game;
    describe("backMove", () => {
        it("backMove vsComputer game", function () {
            let players = new Players({
                white: new Player({
                    name: "Angelo",
                    foto: "img/black_user.png",
                }),
                black: new Player({ name: "Gabi", foto: "img/white_user.png" })
            });
            let game = new Game({
                players
            });
            game.move({ x: 2, y: 7 }, { x: 2, y: 6 });
            game.move({ x: 2, y: 0 }, { x: 2, y: 1 });
            let gameBeforeLastMove = game.getCopy();
            game.move({ x: 2, y: 6 }, { x: 2, y: 5 });
            game.move({ x: 2, y: 1 }, { x: 2, y: 2 });
            game.backMove();
            equal(gameBeforeLastMove.movements.length, game.movements.length);
            deepEqual(gameBeforeLastMove.movements, game.movements);
        });
    });
});
//# sourceMappingURL=Game.test.js.map