class MainPage {
    get trendingLinks(){
        return $$('.popular-tags a');
    }
}

module.exports = new MainPage();
