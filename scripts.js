$(document).ready(function () {
    var list = [];
    var list1 = [];
    function renderList() {
        $("#list-body").empty();
        // Loop through list array and append table rows
        for (var i = 0; i < list.length; i++) {
            $("#list-body").append(
                "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + list[i] + "</td>" +
                "<td>" + list1[i] + "</td>" +
                "<td><button class='btn btn-danger delete-btn' data-index='" + i + "'>Delete</button></td>" +
                "</tr>"
            );
        }
    }

    // Add item to list
    $("#add-form").submit(function (event) {
        event.preventDefault();
        var item = $("#item").val();
        var rating = $("#rating").val();
        list.push(item);
        list1.push(rating);
        renderList();
        $("#item").val("");
        $("#rating").val("");
    });

    // Delete item from list
    $(document).on("click", ".delete-btn", function () {
        var index = $(this).data("index");
        list.splice(index, 1);
        renderList();
    });
    // Sort table by column
    $("#list-table th").click(function () {
        var index = $(this).index();
        if (index == 0) {
            list.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
        } else if (index == 1) {
            list.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
        }
        renderList();
    });
});

var slider = document.getElementById("rating");
var output = document.getElementById("ratsh");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}