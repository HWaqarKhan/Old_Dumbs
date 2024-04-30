var dtable;
$(document).ready(function () {
    dtable = $('#myTable').DataTable({
        "ajax": {
            "url": "/Admin/Product/AllProducts"
        },
        "columns": [
        { "data": "name" },
        { "data": "description" },
        { "data": "price" },
        { "data": "category.name" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                    <a href="/Admin/Product/AddOrEdit?id=${data}"><i class="bi bi-pencil-square"></i></a> |
                    <a href="/Admin/Product/details?id=${data}">Details</a> |
                    <a href="/Admin/Product/delete?id=${data}"><i class="bi bi-trash"></i></a>`
                }
            },
        ]
    });
});
