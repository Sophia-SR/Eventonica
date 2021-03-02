
document.addEventListener("DOMContentLoaded", () => {

  // Use this to call all the logic we already created
  const app = new Eventonica();

  // // Builds HTML list for all events. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    let eventList = document.querySelector("#eventList");
    let eventRow = document.createElement('tr');

    Event.all.forEach((event) => {
      eventRow.innerHTML = `<td class="eventName">${event.eventName}</td>
      <td>${event.eventDate}</td>
      <td>${event.eventTime}</td>
      <td>${event.eventLocation}</td>
      <td>${event.hostName}</td>
      <button class="deletebtn" id="deletebtn">X</button>`;
      eventList.appendChild(eventRow);
    });
    
  }

  const refreshUserList = () => {
    let userList = document.querySelector("#userList");
    let userRow = document.createElement('tr');

    User.all.forEach((user) => {
      userRow.innerHTML = `<td class="eventName">${user.username}</td>
      <td>${user.password}</td>
      <td>${user.email}</td>
      <button class="deletebtnuser" id="deletebtn">X</button>`;
      userList.appendChild(userRow);
    });
    
  };


  const refreshEventBrowseList = () => {
    let eventList = document.querySelector("#eventList");
    let eventRow = document.createElement('tr');

    Event.all.forEach((event) => {
      eventRow.innerHTML = `<td class="eventName">${event.eventName}</td>
      <td>${event.eventDate}</td>
      <td>${event.eventTime}</td>
      <td>${event.eventLocation}</td>
      <td>${event.hostName}</td>
      <button class="deletebtn" id="deletebtn">X</button>`;
      eventList.appendChild(eventRow);
    });
    
  }

  

  const addEventForm = document.querySelector("#eventForm");
  const addUserForm = document.querySelector("#userForm");
  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const nameInput = document.querySelector("#eName").value;
    const dateInput = document.querySelector("#eDate").value;
    const timeInput = document.querySelector("#eTime").value;
    const locInput = document.querySelector("#eLocation").value;
    const hostInput = document.querySelector("#eHost").value;
    const event = app.addEvent(nameInput,dateInput, timeInput, locInput, hostInput);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
    console.log(Event.all);
  });


  addUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const usernameInput = document.querySelector("#userName").value;
    const passInput = document.querySelector("#userEmail").value;
    const emailInput = document.querySelector("#userPass").value;
    const user = app.addUser(usernameInput,passInput, emailInput);
    console.log("Added User", user);
    refreshUserList();
    addUserForm.reset();
  });

  document.querySelector('#eventList').addEventListener('click', (e) => {
    console.log(e.target);
    app.deleteEvent(e.target); 
 
  }); 

  document.querySelector('#userList').addEventListener('click', (e) => {
    console.log(e.target);
    app.deleteUser(e.target); 
 
  }); 

 


  

});

if (typeof module !== "undefined") {
  module.exports = { User, Event, Eventonica};
}