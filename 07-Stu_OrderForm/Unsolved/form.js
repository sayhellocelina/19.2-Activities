$("#submitOrder").click(function () {

  // Retrieve input values
  var numApple = $("#apple").val()
  var numPecan = $("#pecan").val()
  var numKeyLime = $("#keyLime").val()
 
  // Check if blank, if blank set to 0, else parse as integer
  if (numApple == "") {
    numApple = 0;
  }
  else {
    numApple = parseInt(numApple);
  }
 
  if (numPecan == "") {
    numPecan = 0;
  }
  else {
    numPecan = parseInt(numPecan);
  }
 
  if (numKeyLime == "") {
    numKeyLime = 0;
  }
  else {
    numKeyLime = parseInt(numKeyLime)
  }
 
  // Add
  var totalPies = numApple + numPecan + numKeyLime;
 
  // change modal content
  $(".modal-body").html("Please confirm your order for " + totalPies + " pies.");
 
 });