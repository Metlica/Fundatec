$(function () {
    var li = $("#my_todos>li:first-child");
    li.remove();
    $("form").submit(function (event) {
        var text = $("input[type='text']", this).val();
        $.ajax({
            type: "POST",
            url: "test.html",
            context: document.body
        }).done(function () {
            $(this).addClass("done");
        });
        $.post("https://api.parse.com/1/classes/todo", function (data) {
            $(".result").html(data);
        });
        nova = li.clone();
        $("span", nova).text(text);
        nova.appendTo("#my_todos");
        $("input[type='text']", this).val("");
        event.preventDefault();

    })
})