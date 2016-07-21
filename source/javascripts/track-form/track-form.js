(function(exports){

  var DATA_KEY = "trackFormData"

  exports.trackForm = {
    DATA_KEY: DATA_KEY,
    saveForLater: saveForLater, 
    popData: popData
  };

  function saveForLater (data, storage) {
    var formattedData = data.reduce(formatData, {});

    if ( formattedData.email !== "") {
      var dataString = JSON.stringify(formattedData);
      storage.setItem(DATA_KEY, dataString);
    }
  }

  function popData(storage, callback) {
    var properties = submittedData(storage);

    if(properties) {
      callback(JSON.parse(properties));
      storage.removeItem(DATA_KEY);
    }
  }

  function submittedData(storage) {
    return storage.getItem(DATA_KEY); 
  }
  
  function formatData (result, current) {
    result[current.name] = current.value;
    return result;
  }

})(this);
