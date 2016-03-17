(function(queryString) {
  var careersCampaignParam = /utm_campaign=Careers(\w+)/;
  var params = queryString.match(careersCampaignParam);

  if (params !== null) {
    var cityName = params[1];
    updateCityPlaceholders(cityName);
  }

  function updateCityPlaceholders(cityName) {
    var cityPlaceholders = document.querySelectorAll('.campaign-city-name');
    Array.prototype.forEach.call(cityPlaceholders, function(placeholder) {
      placeholder.textContent = cityName;
    });
  }
})(window.location.search, document);
