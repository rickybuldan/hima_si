let dtpr;

$(document).ready(function () {
    $(".js-example-basic-single").select2({
        dropdownParent: $("#modal-data"),
        placeholder: "Pilih Kategori",
    });
    getListData();
});


// console.log(roleid);

function getListData() {
    wherestate = null
    if (ntaid != 0 && ntaid != 1) {
        wherestate = "nta ='" + ntaid + "'"
    }
    dtpr = $("#table-list").DataTable({
        ajax: {
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json", // Set content type to JSON
            data: function (d) {
                return JSON.stringify({
                    tableName: "aspirasis",
                    where: wherestate
                });
            },
            dataSrc: function (response) {
                if (response.code == 0) {
                    es = response.data;
                    // console.log(es);

                    return response.data;
                } else {
                    return response;
                }
            },
            complete: function () {
                // loaderPage(false);
            },
        },
        language: {
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: ">",
                sPrevious: "<",
            },
        },
        columns: [
            {
                data: "id",
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                },
            },
            { data: "nta" },
            { data: "judul" },
            { data: "status" },
            { data: "s_text" },
            { data: "id" },
        ],
        columnDefs: [
            // {
            //     mRender: function (data, type, row) {
            //         $rowData = `<img src="/template/admin2/assets/images/lightgallry/01.jpg" style="width:50px">`;
            //         if(row.file_path){
            //             $rowData = `<img src="/storage/${row.file_path}" style="width:50px">`;
            //         }

            //         return $rowData;
            //     },
            //     visible: true,
            //     targets: 1,
            //     className: "text-center",
            // },
            {
                mRender: function (data, type, row) {
                    $rowData = ` <span class="badge badge-dark">Initial</span>`;
                    if (row.status == 20) {
                        $rowData = ` <span class="badge badge-warning">Review</span>`;
                    }
                    if (row.status == 30) {
                        $rowData = ` <span class="badge badge-success">Processed</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 3,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    var $rowData = `<button type="button" class="btn btn-info btn-sm mx-2 edit-btn"><i class="fa fa-pencil"></i></button>`;
                    $rowData += `<button type="button" class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>`;
                    return $rowData;
                },
                visible: true,
                targets: 5,
                className: "text-center",
            },
        ],
        drawCallback: function (settings) {
            var api = this.api();
            var rows = api.rows({ page: "current" }).nodes();
            var last = null;

            $(rows)
                .find(".edit-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    editdata(rowData);
                });
            $(rows)
                .find(".delete-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    deleteData(rowData);
                });
        },
    });
}

function setImagePackage(urlFile) {
    console.log(urlFile);
    $(".img-paket").prop("src", null)
    if (urlFile) {
        $(".img-paket").prop("src", "/storage/" + urlFile);
    } else {
        urlFile = '/template/admin2/assets/images/lightgallry/01.jpg'
        $(".img-paket").prop("src", urlFile);
    }
}

$("#form-img").change(function () {
    var file = $(this).prop('files')[0]; // Use $(this) to refer to the element that triggered the event
    if (file) {
        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var imageUrl = e.target.result;

                var img = $("<img>");
                img.attr("class", "img-paket");
                img.attr("src", imageUrl);
                img.attr("style", "width:30%");

                $(".img-paket").replaceWith(img);
            };

            reader.readAsDataURL(file);
        }

    } else {
        var img = $("<img>");
        img.attr("class", "img-paket");
        imageUrl = '/template/admin2/assets/images/lightgallry/01.jpg'
        img.attr("src", imageUrl);
    }
});

let isObject = {};

function editdata(rowData) {
    isObject = rowData;

    // setImagePackage(rowData.file_path)
    aspirasi_status = 10;
    $("#save-btn").text("Review")

    if (rowData.status == 10) {
        aspirasi_status = 20
        $("#save-btn").text("Review")
    }

    if (rowData.status == 20) {
        aspirasi_status = 30
        $("#save-btn").text("Processed")
    }

    $("#form-status").val(aspirasi_status)
    $("#form-judul").val(rowData.judul).prop("disabled", true);
    $("#form-nta").val(rowData.nta).prop("disabled", true);
    $("#form-isi").text(rowData.s_text).prop("disabled", true);
    $("#form-nama").val(rowData.nama).prop("disabled", true)
    $("#modal-data").modal("show");
}

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    $("#save-btn").text("Simpan")
    isObject = {};
    isObject["id"] = null;
    $("#form-nta").val("").prop("disabled", false)

    if (ntaid != 0) {
        $("#form-nta").val(ntaid).prop("disabled", true);
    }
    $("#form-status").val(10)
    $("#form-judul").val("").prop("disabled", false);
    $("#form-nta").val("").prop("disabled", false)
    $("#form-isi").text("").prop("disabled", false)
    $("#form-nama").val("").prop("disabled", false)

    $("#modal-data").modal("show");
});

$("#save-btn").on("click", function (e) {
    e.preventDefault();
    checkValidation();
});

function checkValidation() {
    // console.log($el);

    if (
        validationSwalFailed(
            (isObject["nta"] = $("#form-nta").val()),
            "NTA tidak boleh kosong."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["judul"] = $("#form-judul").val()),
            "Judul tidak boleh kosong"
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["isi"] = $("#form-isi").val()),
            "Isi tidak boleh kosong."
        )
    )
        return false;

    isObject["status"] = $("#form-status").val()
    isObject["nama"] = $("#form-nama").val()

    saveData();
}

function deleteData(data) {
    swal({
        title: "Are you sure to delete ?",
        text: "You will not be able to recover this imaginary file !!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it !!",
        cancelButtonText: "No, cancel it !!",
        closeOnConfirm: !1,
        closeOnCancel: !1,
    }).then(function (e) {
        console.log(e);
        if (e.value) {
            $.ajax({
                url: baseURL + "/deleteGlobal",
                type: "POST",
                data: JSON.stringify({ id: data.id, tableName: "aspirasis" }),
                dataType: "json",
                contentType: "application/json",
                beforeSend: function () {
                    Swal.fire({
                        title: "Loading",
                        text: "Please wait...",
                    });
                },
                complete: function () { },
                success: function (response) {
                    // Handle response sukses
                    if (response.code == 0) {
                        swal("Deleted !", response.message, "success").then(
                            function () {
                                location.reload();
                            }
                        );
                    } else {
                        sweetAlert("Oops...", response.message, "error");
                    }
                },
                error: function (xhr, status, error) {
                    // Handle error response
                    // console.log(xhr.responseText);
                    sweetAlert("Oops...", xhr.responseText, "error");
                },
            });
        } else {
            swal(
                "Cancelled !!",
                "Hey, your imaginary file is safe !!",
                "error"
            );
        }
    });
}

function saveData() {

    // formdata
    // console.log(isObject);
    var formData = new FormData();
    // var file = $("#form-img")[0].files[0];
    // formData.append('image', file);
    formData.append('data', JSON.stringify(isObject));

    $.ajax({
        url: baseURL + "/saveAspirasi",
        type: "POST",
        data: formData,
        dataType: "json",
        processData: false, // Important: prevent jQuery from automatically processing the data
        contentType: false,
        beforeSend: function () {
            Swal.fire({
                title: "Loading",
                text: "Please wait...",
            });
        },
        complete: function () { },
        success: function (response) {
            // Handle response sukses
            if (response.code == 0) {
                swal("Saved !", response.message, "success").then(function () {
                    location.reload();
                });
                // Reset form
            } else {
                sweetAlert("Oops...", response.message, "error");
            }
        },
        error: function (xhr, status, error) {
            // Handle error response
            // console.log(xhr.responseText);
            sweetAlert("Oops...", xhr.responseText, "error");
        },
    });
}
