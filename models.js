//  * Paste your code from Part 1 into this file but keep the module check at the very end.
//  * (The following is a just a small subset for the Add Event form on the example page to work)
//  */

class Event {
  static all = [];
  static _nextId = 100;
  constructor(eventName, eventDate, eventTime, eventLocation, hostName) {
    this.id = Event._nextId++;
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventLocation = eventLocation;
    this.hostName = hostName;
    Event.all.push(this);   
  } 
         
}



 
  class User {
    static all = [];
    static _nextId = 200;
    constructor(username, password, email) {
      this.id = User._nextId++;
      this.username = username;
      this.password = password;
      this.email = email; 
      User.all.push(this);
  }

  }

class Eventonica {
  addEvent(newName, newDate,newTime, newLocation, newHost){
  return new Event(newName, newDate, newTime, newLocation, newHost )
  }
 
  updateEvent(updateName, updateDate, updateTime, updateLocation, updateHost){
  return 
  }

  deleteEvent(el) {
  if(el.classList.contains('deletebtn')) {
      el.parentElement.remove();
     Event.all = Event.all.filter(event => 
        event.eventName !== el.parentElement.children[0].innerHTML)
      
      
    }  console.log(Event.all)
}
 
  addUser(newUsername, newPassword, newEmail){
    return new User (newUsername, newPassword, newEmail)
  }

  updateUser(){

  }
  
  deleteUser(el){
    if(el.classList.contains('deletebtnuser')) {
      el.parentElement.remove();
     User.all = User.all.filter(user => 
        user.username !== el.parentElement.children[0].innerHTML) 
      
    } 
  }
  


}
// let eventArray = Event.all; 

// localStorage.setObj(eventArray, JSON.stringify(eventArray));


  if (typeof module !== "undefined") {
    module.exports = { User, Event };
  }
