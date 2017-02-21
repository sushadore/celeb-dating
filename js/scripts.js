$(function() {
  $("form#questionnaire").submit(function(event) {
    var age = parseInt($("input#age").val());
    /*var height = parseInt($("input#height").val());*/
    var gender = $("select#gender").val();
    var gandalf = "Gandalf the Grey";
    var johnSnow = "John Snow";
    var harryPotter = "Harry Potter";
    var arwen = "Arwen of Rivendell";
    var daenerys = "Daenerys Targaryen";
    var hermoine = "Hermoine Granger";

    if (age >=60 && gender === "female") {
      alert(gandalf);
    /*  $("chosen-celeb").show();
      $("#celebrity").text(gandalf);
    }*/

    event.preventDefault();
  });

});
