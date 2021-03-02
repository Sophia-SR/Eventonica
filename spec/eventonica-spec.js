const utils = require('../eventonica.js')
module.exports = refreshEventsList;
describe("Refresh Event Browse List", () => { 
    it("should add new event to event array",() => {
    expect(Event.all.length).toBe(Event.all.length + 1);    
    }); 

});

