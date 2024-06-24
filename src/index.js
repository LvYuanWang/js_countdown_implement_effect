(function () {
    var item_timer = document.querySelectorAll('.timer');
    var changeTimeNumber = function (node, timer) {
        var nodeH = node.parentElement.offsetHeight;
        setInterval(() => {
            var firstChild = node.querySelector('li:first-child');
            node.style.transition = 'all .5s';
            node.style.top = -nodeH + 'px';
            node.addEventListener('transitionend', function () {
                node.style.transition = 'none';
                node.style.top = '0px';
                node.appendChild(firstChild);
            })
        }, timer);
    }
    changeTimeNumber(item_timer[5].querySelector('ul'), 1000);
    changeTimeNumber(item_timer[4].querySelector('ul'), 10000);
    changeTimeNumber(item_timer[3].querySelector('ul'), 60000);
    changeTimeNumber(item_timer[2].querySelector('ul'), 600000);
    changeTimeNumber(item_timer[1].querySelector('ul'), 36000000);
    changeTimeNumber(item_timer[0].querySelector('ul'), 108000000);
})()
