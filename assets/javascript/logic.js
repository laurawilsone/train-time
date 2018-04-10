
  var config = {
    apiKey: "AIzaSyDq5N-SMq7wv-gCn4CpntAh5Bf2NVwOF_I",
    authDomain: "train-time-e9250.firebaseapp.com",
    databaseURL: "https://train-time-e9250.firebaseio.com",
    projectId: "train-time-e9250",
    storageBucket: "",
    messagingSenderId: "878094232087"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    // Grabs user input
    var Train = $("#train-name-input").val().trim();
    var Destination = $("#destination-input").val().trim();
    var First = moment($("#first-input").val().trim(), "HH:mm-military time").format("X");
    var Frequency = $("#frequency-input").val().trim();
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      train: Train,
      destination: Destination,
      first: First,
      frequency: Frequency
    };
    // Uploads employee data to the database
    database.ref().push(newTrain);
    // Logs everything to console
    console.log(newTrain.Train);
    console.log(newTrain.Destination);
    console.log(newTrain.First);
    console.log(newTrain.Frequency);
    // Alert
    //alert("Employee successfully added");
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-input").val("");
    $("#frequency-input").val("");
  });
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    // Store everything into a variable.
    var Train = childSnapshot.val().Train;
    var Destination = childSnapshot.val().Destination;
    var First = childSnapshot.val().First;
    var Frequency = childSnapshot.val().Frequency;
    // Employee Info
    console.log(Train);
    console.log(Destination);
    console.log(First);
    console.log(Frequency);
    // Prettify the employee start
  //  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
    // Calculate the months worked using hardcore math
    // To calculate the months worked
  //  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
 //   console.log(empMonths);
    // Calculate the total billed rate
 //   var empBilled = empMonths * empRate;
 //   console.log(empBilled);
    // Add each train's data into the table
 //   $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
 //   empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
  });