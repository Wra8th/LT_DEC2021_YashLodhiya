function dropdown(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
$(document).ready(function() {
    $('video').prop('muted',true).play()
});