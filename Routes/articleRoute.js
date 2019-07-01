//here comes a request(CRUD operations) through server.js from a client side(article.service.ts)

let express = require('express'),
    router = express.Router(),
    util = require('../Utilities/util'),

    // ..and then it go to the:
    articleService = require('../Services/articleService');

/**Api to create article */
router.post('/create-article', (req, res) => {
    articleService.createArticle(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update article */
router.put('/update-article', (req, res) => {
    articleService.updateArticle(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the article */
router.delete('/delete-article', (req, res) => {
    articleService.deleteArticle(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of article */
router.get('/get-articles', (req, res) => {
    //documentService
    articleService.getArticle(req.query, (data) => {
        res.send(data);
    });
    // console.log('router.get(/get-articles)');
});

// /**API to get the article by id... */
router.get('/get-article-by-id', (req, res) => {
    articleService.getArticleById(req.query, (data) => {
        res.send(data);
    });
});

module.exports = router;