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
    eventCol.attr("id", events[i]);
    eventCol.width(800);

    appts.push(eventCol);

    
    var saveCol = $('<td>');
    var saveButton = $('<button>');
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
    for (var i = 0; i < events.length; i++) {

        typedEvents = localStorage.getItem(events[i]);

        typedEvents = JSON.parse(typedEvents);

        appts[i].text(typedEvents);
    
        console.log(typedEvents);
    }
};

showSavedEvents(); 

$(".saveBtn").on('click', function(event) {
    event.preventDefault();

    const singleEvent = event.target.parentNode.parentNode.childNodes[1];

    oneEventValue = singleEvent.value;

    const timeID = singleEvent.id;

    localStorage.setItem(timeID, JSON.stringify(oneEventValue)); 

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