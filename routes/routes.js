import express from "express";  //called express
import games from "../data/data.js";   //called games data

const router = express.Router();  //called router


//Middleware for validate game with required fields in post and put request
const validateGame = (req, res, next) => {         
  const { gameName, gameType, releaseYear } = req.body;

  if (!gameName || !gameType || !releaseYear) {
    return res.status(400).json({
      message: "Missing required fields: gameName, gameType, releaseYear",
    });
  }

  next();
};


//Route to get all games
router.get("/games", (req, res) => {
  res.status(200).json(games);
});

//route to get game by specific id
router.get("/game/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});


//route to post game with validation of required fields
router.post("/game", validateGame, (req, res) => {
  const { gameName, gameType, releaseYear } = req.body;
  const newGame = {
    id: String(games.length + 1),  //for new game id
    gameName,
    gameType,
    releaseYear,
  };
  games.push(newGame); //pushing the newly added game into game data
  res.status(201).json(newGame);
});

//Updating game according to game id and validation
router.put("/game/:id", validateGame, (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    game.gameName = req.body.gameName || game.gameName;
    game.gameType = req.body.gameType || game.gameType;
    game.releaseYear = req.body.releaseYear || game.releaseYear;
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

//route for deleting game according to id
router.delete("/game/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);

  if (game) {
    const updatedGames = games.filter((g) => g.id !== req.params.id);
    games.length = 0;
    games.push(...updatedGames);

    res.status(200).json({ message: "Game deleted successfully" });
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

export default router;
