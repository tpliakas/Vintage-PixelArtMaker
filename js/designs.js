
//     $("input[type=number]").attr("max","50");

function makeGrid() {
    document.getElementById("pixel_canvas").innerHTML=''; 
    
    var N = document.getElementById("input_height").value; 
    var M = document.getElementById("input_width").value;

    for(var i = 1; i<= N; i++) {
        var row = document.getElementById("pixel_canvas").insertRow();
        row.style.borderColor="#b3b3b3";      
        for(var j = 1; j<= M; j++) {
            var cell = row.insertCell();
            cell.style.borderColor="#b3b3b3";        
        }
    }                      
}

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
});

$('#pixel_canvas').on("click", "td", function() {      
    var code = document.getElementById("colorInput").value;
    $(this).css("background-color", code);
});
