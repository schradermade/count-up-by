$(document).ready(function() {
  $("form#counting").submit(function(event) {
    event.preventDefault();
    let countBy = parseInt($("#input1").val());
    let countToNumber = parseInt($("#input2").val());
    let countToNumber = parseInt($("#input2").val());

  for (let i = 0; i <= countToNumber; i += countBy) {
    console.log(i)
    }
  });
});
