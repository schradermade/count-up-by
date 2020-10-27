$(document).ready(function() {
  $("form#counting").submit(function(event) {
    event.preventDefault();

    let startNumber;
    let countToNumber = parseInt($("#input1").val());
    let countBy = parseInt($("#input2").val());
    //let countToNumber = parseInt($("#input2").val());

  for (let i = 0 ; i <= countToNumber; i += countBy) {
    
    console.log(i)
    }
  });
});
