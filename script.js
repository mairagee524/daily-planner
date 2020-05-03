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

    var eventCol = $('<textarea>');
    eventCol.attr("class", "textarea");
    eventCol.width(800);
    
    var saveCol = $('<td>');
    var saveButton = $('<button>');
    saveButton.attr("id", "submit");
    saveButton.attr("class", "saveBtn");
    saveButton.text("Save");
    saveCol.append(saveButton);

    tableRow.append(timeCol);
    tableRow.append(eventCol);
    tableRow.append(saveCol);
    $('#table').append(tableRow);

    numberInColumn(events[i]);

    var oneEvent = events[i];

    if (oneEvent < currentTime) {
        eventCol.attr("class", "past");

        } else if (oneEvent > currentTime) {
        eventCol.attr("class", "future");

        } else {
        eventCol.attr("class", "present");

    }; 
};

function showSavedEvents() {
    typedEvents = localStorage.getItem(eventCol[0].value);

    typedEvents = JSON.parse(typedEvents);

    appts.push(typedEvents);
    };

showSavedEvents(); 

$("submit").on('click', 'button', function(event){
    event.preventDefault();

    oneEvent = eventCol[0].value;

    localStorage.setItem("typedEvents", JSON.stringify(oneEvent)); 
    showSavedEvents();
});

function numberInColumn(currentTime) {
    if (currentTime < 12) {
        beforeNoon = currentTime;
        timeCol.text(beforeNoon);
            
        } else if (currentTime > 12) {
        afternoonTime = currentTime - 12;
        timeCol.text(afternoonTime);
            
        } else {
        timeCol.text(currentTime);
    }
};