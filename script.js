//your JS code here. If required.
document.getElementById("removeButton").addEventListener("click", function() {
     let colorSelect = document.getElementById("colorSelect");
      colorSelect.remove(colorSelect.selectedIndex);
});