switchTab();

function switchTab() {
    var weekTab = $('.js-graph-week'),
        totalTab = $('.js-graph-total'),
        weekGraph = $('.c-graph__week'),
        totalGraph = $('.c-graph__total'),
        activeTabClass = 'c-graph__link--active';

    weekTab.click(function(e) {
        e.preventDefault();
        totalTab.removeClass(activeTabClass);
        $(this).addClass(activeTabClass);
        weekGraph.show();
        totalGraph.hide();
    });
    totalTab.click(function(e) {
        e.preventDefault();
        weekTab.removeClass(activeTabClass);
        $(this).addClass(activeTabClass);
        totalGraph.show();
        weekGraph.hide();
    });
}
