$("input[type=number]").attr("max","40");

function makeGrid() {
    document.getElementById("pixel_canvas").innerHTML=''; 
    
    var N = document.getElementById("input_height").value; 
    var M = document.getElementById("input_width").value;

    for(var i = 1; i<= N; i++) {
        var row = document.getElementById("pixel_canvas").insertRow();
        row.style.borderColor="#242021";      
        for(var j = 1; j<= M; j++) {
            var cell = row.insertCell();
            cell.style.borderColor="#242021";        
        }
    }                      
}

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
});

$("#pixel_canvas").on("mousemove", "td", function(e) {
    var code = document.getElementById("colorInput").value;
    if (e.buttons == 1) {
      $(this).css("background-color", code); 
    }
  });

$('#pixel_canvas').on("click", "td", function() {      
    var code = document.getElementById("colorInput").value;
    $(this).css("background-color", code);
});

$("#checkbox").on("change", function() {
  if (this.checked == true) {
    $("td").css("border-color", "black");
  } else {
    $("td").css("border-color", "transparent");
  }
});
