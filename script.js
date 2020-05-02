// if current time is less than 9 am, the box will be green and available to write on 

// if current time is equal to 9 am the box will be orange

// how to compare 9 am to 3 pm (military time)

// if else statements 

// time as JS objects

// get webpage populated 

// event i time

// Today's Date
var dayAndTime = moment().format('dddd, MMMM Do YYYY');

// Append today's date to heading
$('#currentDay').append(dayAndTime);

var currentTime = moment().format('H');



// List of events that user will input
var appts = [];

// Hourly timeblocks
var events = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// For-loop for generating each row
for (var i = 0; i < events.length; i++) {
    var tableRow = $('<tr>');
    tableRow.attr("class", "row");


    var timeCol = $('<td>');
    timeCol.attr("class", "hour");
    timeCol.width(100);


    var eventCol = $('<td>');
    eventCol.width(800);
    eventCol.attr("data-userInput", "");
    
    var inputTableCell = $('<input id="user">');
     console.log(inputTableCell);

    eventCol.append(inputTableCell);
    
    var saveCol = $('<td>');
    var saveButton = $('<button>');
    saveButton.attr("class", "saveBtn");
    saveButton.width(100);
    saveCol.append(saveButton);


    tableRow.append(timeCol);
    tableRow.append(eventCol);
    tableRow.append(saveCol);
    $('#table').append(tableRow);

    numberInColumn(events[i]);

    var oneEvent = events[i];

    if (oneEvent < currentTime) {
        eventCol.attr("class", "past");

    } else if (oneEvent = currentTime) {
        eventCol.attr("class", "present");

    } else if (oneEvent > currentTime) {
        eventCol.attr("class", "future");

    } 
};

saveButton.on('click', 'button', function(event){
    event.preventDefault();

    submitEvent = $('#user')[0].value;

    console.log($('#user')[0].value);

    appts.push(submitEvent);

    console.log(appts);

});

function numberInColumn(eventTime) {
    if (eventTime < 12) {
            beforeNoon = eventTime;
            timeCol.text(beforeNoon);
                
            } else if (eventTime > 12) {
            afternoonTime = eventTime - 12;
            timeCol.text(afternoonTime);
            
            } else {
            timeCol.text(eventTime);
            
            }

};


// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```