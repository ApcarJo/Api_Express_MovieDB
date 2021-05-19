
const router = require("express").Router();
const moviesController = require("../controllers/moviesController.js");

//CRUD

//GET

//localhost:3000/movies/
// router.get('/', async (req, res) => {
//     try {
//         res.json(await moviesController.findAllFilms());
//     }catch (err) {
//         return res.status(500).json({
//         message: err.message;
//     });
// });

router.get('/', async (req, res) => {
    try {
        res.json(await moviesController.findTopRated());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await moviesController.searchById(id));
    } catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

module.exports = router;