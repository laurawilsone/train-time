
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
  
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirst = moment($("#first-input").val().trim(), "HH:mm-military time").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
    
    // holding data
    var newTrain = {
      train: trainName,
      destination: trainDestination,
      first: trainFirst,
      frequency: trainFrequency
    };
    
    // goes into the database
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);
   
   
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-input").val("");
    $("#frequency-input").val("");
  });

  // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainFirst = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;
    
    // train info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirst);
    console.log(trainFrequency);

    // moment
    var arrivalTime = moment.unix(trainFirst).format("HH:mm");
 
    var trainFrequency = moment().diff(moment.unix(trainFirst), "minutes");
  // console.log();
    
    var remainder = moment().diff(moment.unix(trainFirst), "minutes") % trainFrequency;
    console.log(remainder);
    var tminutes = trainFrequency - remainder;

    console.log(arrivalTime)
    console.log(trainFrequency)
    console.log(remainder)
    console.log(tminutes)

    // Add each train's data into the table

  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + 
   trainFirst + "</td><td>" + arrivalTime + "</td><td>" + trainFrequency + "</td><td>");
  });


