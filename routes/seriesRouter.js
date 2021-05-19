
const router = require("express").Router();
const seriesController = require("../controllers/seriesController.js");

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
        res.json(await seriesController.findTopRated());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await seriesController.searchById(id));
    } catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

module.exports = router;