document.addEventListener('DOMContentLoaded', function() {

    var addBtn = document.getElementById('addBtn');
    var addInput = document.getElementById('addInput');

    addInput.addEventListener('keypress', function(e){
        if(e.keyCode==13) addBtn.click();
    });
});