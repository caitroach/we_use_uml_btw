// Visitor counter
(function () {
    var count = localStorage.getItem('zephyrus_visits');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('zephyrus_visits', count);
    document.documentElement.setAttribute('data-visits', count);
})();