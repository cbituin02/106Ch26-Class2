var nonImportantClass = "far fa-bell";
var importantClass = "fas fa-bell";
var isImportant = false;
var isFromVisible = false;

function toggleImportant() {
    console.log("icon clicked!");

    if (isImportant) {
        // non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else {
        // important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}



function toggleTaskInfo() {
    console.log("button clicked!");

    if (isFromVisible) {
        isFromVisible = false;
        $("#form").hide();
    }
    else {
        isFromVisible = true;
        $("#form").show();
    }
}

function init() {
    console.log("Task Manager");

    // event (#=id, . = class)
    $("#iImportant").click(toggleImportant);
    $("#btnTaskInfo").click(toggleTaskInfo);

    // laod data
}

window.onload = init;
