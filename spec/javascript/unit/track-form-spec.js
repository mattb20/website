var trackForm = require("../../../source/javascripts/track-form/track-form").trackForm;

describe("trackForm", function(){
  describe("saving for later", function(){
    var localStorage;

    beforeEach(function(){
      localStorage = jasmine.createSpyObj("localStorage", ["setItem"]);
    });

    it("saves to local storage", function(){
      var formData = [{name:  "email",
                       value: "dan@test.com"}];
    
      trackForm.saveForLater(formData, localStorage);
      
      expect(localStorage.setItem).toHaveBeenCalledWith(trackForm.DATA_KEY,'{"email":"dan@test.com"}');
    });

    it("does not save to local storage if there is no email address", function() {
      var formData = [{name:  "email",
                       value: ""}];
    
      trackForm.saveForLater(formData, localStorage);

      expect(localStorage.setItem).not.toHaveBeenCalled();
    })
  });

  describe("retrieving the data", function() {
    it("passes the data to a callback", function() {
      var formData = {email: "dan@test.com"};
      var storage = {
        getItem: function(datakey) {
          return JSON.stringify(formData);
        },
        removeItem: function(){}
      };
      var callBackSpy = jasmine.createSpy('callBackSpy')

      trackForm.popData(storage, callBackSpy);

      expect(callBackSpy).toHaveBeenCalledWith(formData)
    });

    it("deletes the stored data", function() {
      localStorage = jasmine.createSpyObj("localStorage", ["removeItem", "getItem"]);

      localStorage.getItem.andReturn('{"email":"dan@test.com"}')

      trackForm.popData(localStorage, function(){});

      expect(localStorage.removeItem).toHaveBeenCalledWith(trackForm.DATA_KEY)
    })
  
  })
});
