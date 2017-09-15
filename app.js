$("#add").click(function () {
    var inputTodo = $("#input-todo").val();
    $("#todo-list").append("<li><input type='checkbox'>" + inputTodo + "</li>");
});

$(document).on("change", "input[type=checkbox]", function () {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ccc");
    }
    else{
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color", "#000");
    }
});