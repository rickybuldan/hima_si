

let dtpr;

$(document).ready(function () {
    getListData();
});

function getListData() {
    wherestate = null
    if (roleid != 6 && roleid != 14 && roleid != 15) {
        wherestate = "uk.nta ='" + ntaid + "'"
    }

    dtpr = $("#table-list").DataTable({
        ajax: {
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json", // Set content type to JSON
            data: function (d) {
                return JSON.stringify({
                    tableName: "uang_kas",
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
            { data: "name" },
            { data: "created_at" },
            { data: "nominal" },
            { data: "file_path" },
            { data: "status" },

            { data: "id" },
        ],
        columnDefs: [
            {
                mRender: function (data, type, row) {
                    // var $rowData = '<button class="btn btn-sm btn-icon isEdit i_update"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-info"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>';
                    // $rowData += `<button class="btn btn-sm btn-icon delete-record i_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-danger"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
                    $rowData = parseInt(row.nominal)

                    if ($rowData) {
                        $rowData = formatRupiah(parseInt($rowData))
                    }

                    return $rowData;
                },
                visible: true,
                targets: 4,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    // var $rowData = '<button class="btn btn-sm btn-icon isEdit i_update"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-info"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>';
                    // $rowData += `<button class="btn btn-sm btn-icon delete-record i_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-danger"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
                    $rowData = ` <span class="badge badge-dark">Initial</span>`;
                    if (row.status == 20) {
                        $rowData = `<span class="badge badge-success">Validated</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 6,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    $rowData = `<img src="/template/admin2/assets/images/lightgallry/01.jpg" style="width:50px">`;
                    if (row.file_path) {
                        $rowData = `<img src="/storage/${row.file_path}" style="width:50px">`;
                    }

                    return $rowData;
                },
                visible: true,
                targets: 5,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    var $rowData = `<button type="button" class="btn btn-info btn-sm mx-2 edit-btn"><i class="fa fa-pencil"></i></button>`;
                    if(roleid == 15 ){
                        $rowData += `<button type="button" class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 7,
                className: "text-center",
                orderable: false
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
        initComplete: function () {
            loadRole()
        },

    });
}

let isObject = {};

function editdata(rowData) {
    isObject = rowData;

    aspirasi_status = 10;
    $("#save-btn").text("Initial").prop("disabled",false)

    if (rowData.status == 10) {
        aspirasi_status = 20

        $("#save-btn").text("Validating").prop("disabled",false)
        if (roleid != 15) {
            $("#save-btn").prop("disabled", true)
        }
    }
    if (rowData.status == 20) {
        aspirasi_status = 20
        $("#save-btn").text("Validated").prop("disabled",true)
    }

    setImagePackage(rowData.file_path)
    $("#form-nta").val(rowData.ntaid).prop("disabled",true);
    $("#form-nominal").val(formatRupiah(rowData.nominal));
    $("#form-status").val(aspirasi_status)

    $("#modal-data").modal("show");
}

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    setImagePackage(null)

    aspirasi_status = 10;
    $("#save-btn").text("Simpan")
    $("#form-status").val(aspirasi_status)
    isObject = {};
    isObject["id"] = null;
    $("#form-nta").val("");
    $("#form-nominal").val("");

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
            (isObject["nominal"] = unformatRupiah($("#form-nominal").val())),
            "Nominal tidak boleh kosong."
        )
    )
        return false;

    isObject["status"] = $("#form-status").val()
    isObject["expense"] = null

    saveData();
}



function deleteData(data) {

    swal({
        title: "Are you sure to delete ?",
        text: "You will not be able to recover this imaginary data !!",
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
                data: JSON.stringify({ id: data.id, tableName: "uang_kas" }),
                dataType: "json",
                contentType: "application/json",
                beforeSend: function () {
                    // Swal.fire({
                    //     title: "Loading",
                    //     text: "Please wait...",
                    // });
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
                "Hey, your imaginary data is safe !!",
                "error"
            );
        }
    });
}


function saveData() {

    // formdata
    console.log(isObject);
    var formData = new FormData();
    var file = $("#form-img")[0].files[0];
    formData.append('image', file);
    formData.append('data', JSON.stringify(isObject));

    $.ajax({
        url: baseURL + "/saveUangKas",
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

async function loadRole() {
    try {
        const response = await $.ajax({
            url: baseURL + "/getRole",
            type: "POST",
            dataType: "json",
            beforeSend: function () {
                // Swal.fire({
                //     title: "Loading",
                //     text: "Please wait...",
                // });
            },
        });

        const res = response.data.map(function (item) {
            return {
                id: item.id,
                text: item.role_name,
            };
        });

        $("#form-role").select2({
            // theme: "bootstrap-5",
            // width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',

            data: res,
            placeholder: "Please choose an option",
            dropdownParent: $("#modal-data"),
        });
    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
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