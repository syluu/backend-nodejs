const getHomepage = (req, res) => {
    res.send("hellooooooo HOme Page");
}

const getTestpage = (req, res) => {
    res.render('../views/sample.ejs');
}

module.exports = {
    getHomepage,
    getTestpage
}