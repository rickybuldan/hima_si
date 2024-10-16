

let dtpr;

$(document).ready(function () {
    getListData();

});

function getListData() {
    wherestate = "nta !='0'"

    if (roleid == 6 || roleid == 14 || roleid == 15) {
        wherestate = null
    }
    dtpr = $("#table-list").DataTable({
        ajax: {
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json",
            data: function (d) {
                return JSON.stringify({
                    tableName: "users",
                    where: wherestate
                });
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
            { data: "name" },
            { data: "email" },
            { data: "role_name" },
            { data: "is_active" },
            { data: "id" },
        ],
        columnDefs: [
            {
                mRender: function (data, type, row) {
                    // var $rowData = '<button class="btn btn-sm btn-icon isEdit i_update"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-info"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>';
                    // $rowData += `<button class="btn btn-sm btn-icon delete-record i_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-danger"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
                    $rowData =
                        ` <span class="badge badge-dark">` +
                        row.role_name +
                        `</span>`;
                    return $rowData;
                },
                visible: true,
                targets: 3,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    // var $rowData = '<button class="btn btn-sm btn-icon isEdit i_update"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-info"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>';
                    // $rowData += `<button class="btn btn-sm btn-icon delete-record i_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-danger"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
                    $rowData = ` <span class="badge badge-danger">Inactive</span>`;
                    if (row.is_active == 1) {
                        $rowData = `<span class="badge badge-success">Active</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 4,
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
            loadDivisi()
        },

    });
}



let isObject = {};

function editdata(rowData) {
    isObject = {}
    isObject.id = rowData.id;
    console.log(isObject);

    setImagePackage(rowData.file_path)
    $("#form-email").val(rowData.email);
    $("#form-password").val();
    $("#form-name").val(rowData.name);
    $("#form-kelas").val(rowData.kelas);
    $("#form-nta").val(rowData.nta);
    $("#form-angkatan").val(rowData.tahun_angkatan);
    $("#form-role").val(rowData.role_id).trigger("change");
    $("#form-divisi").val(rowData.divisi).trigger("change");

    let $el = $("input:radio[name=form-status]");

    $el.filter("[value=" + rowData.is_active + "]").prop("checked", true);

    $("#modal-data").modal("show");
}

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    setImagePackage(null)
    isObject = {};
    isObject["id"] = null;
    $("#form-email").val("");
    $("#form-password").val("");
    $("#form-name").val("");
    $("#form-role").val("").trigger("change");
    $("#form-divisi").val("").trigger("change");
    $("input:radio[name=form-status]").prop("checked", false);
    $("#modal-data").modal("show");
});

$("#save-btn").on("click", function (e) {
    e.preventDefault();
    checkValidation();
});


function checkValidation() {
    let $el = $("input:radio[name=form-status]:checked").val();
    // console.log($el);
    if (
        validationSwalFailed(
            (isObject["name"] = $("#form-name").val()),
            "Name field cannot be empty."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["email"] = $("#form-email").val()),
            "Email field cannot be empty."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["is_active"] = $el),
            "Please choose a status."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["role_id"] = $("#form-role").val()),
            "Please choose a role."
        )
    )

        return false;
    isObject["divisi"] = $("#form-divisi").val()
    isObject["nm_divisi"] = $("#form-nm-divisi").val()

    isObject["password"] = $("#form-password").val();
    isObject["tahun_angkatan"] = $("#form-angkatan").val();
    isObject["nta"] = $("#form-nta").val();
    isObject["kelas"] = $("#form-kelas").val();
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
                url: baseURL + "/deleteUser",
                type: "POST",
                data: JSON.stringify({ id: data.id }),
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
        url: baseURL + "/savePengurus",
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

async function loadDivisi() {
    try {
        const response = await $.ajax({
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                tableName: "divisi",
            }),
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
                text: item.nm_divisi,
            };
        });

        $("#form-divisi").select2({
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

$("#form-divisi").change(function () {
    var value = $(this).val()
    if(value == 5){
        $(".add-division").show()
    }else{
        $(".add-division").hide()
    }
});

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