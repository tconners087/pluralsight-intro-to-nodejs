var maxTime = 1000;

//if input is even, double it
//if input is odd, error
//(call takes random amount of time < 1s)

var evenDoubler = function(v, callback){

}

var handleResults = function(err, results, time) {
  if (err) {
    console.log("ERROR: " + err.message);
  } else {
    console.log ("the results are: " + results + " (" + time + " ms)");
  }
};

for (var i = 0; i < 10; i++) {
  console.log("calling evenDoubler for value: "+i);
  evenDoubler(i, handleResults);
}

console.log("-----");
