let dtpr;

$(document).ready(function () {
    $(".js-example-basic-single").select2({
        dropdownParent: $("#modal-data"),
        placeholder: "Pilih Kategori",
    });
    getListData();
    loadRole();
    loadCat();
});


// console.log(roleid);

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
                    tableName: "berkas_programs",
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
        scrollX:true,
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
            { data: "nm_kategori" },
            { data: "judul" },
            { data: "status" },
            { data: "type_doc" },
            { data: "s_text" },
            { data: "file_path" },
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
                        $rowData = ` <span class="badge badge-success">Validated</span>`;
                    }
                    if (row.status == 30) {
                        $rowData = ` <span class="badge badge-danger">Canceled</span>`;
                    }

                    return $rowData;
                },
                visible: true,
                targets: 5,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    $rowData = ` <span class="badge badge-dark">Pengajuan</span>`;
                    if (row.type_doc == 10) {
                        $rowData = ` <span class="badge badge-warning">Pengajuan</span>`;
                    }
                    if (row.type_doc == 20) {
                        $rowData = ` <span class="badge badge-info">Laporan</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 6,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    $rowData = '-'
                    if (row.file_path) {
                        $rowData = `<a href="${row.file_path}" target="_blank">Lihat PDF</a>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 8,
                className: "text-center",
            },

            {
                mRender: function (data, type, row) {
                    var $rowData = `<button type="button" class="btn btn-info btn-sm me-2 edit-btn"><i class="fa fa-pencil"></i></button>`;

                    if(row.status == 10 && roleid == 15){
                        $rowData += `<button type="button" class="btn btn-danger btn-sm batal-btn me-2 "><i class="fa fa-times" aria-hidden="true"></i></button>`;
                    }

                    if(roleid == 15){
                        $rowData += `<button type="button" class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>`;
                    }
                    // $rowData += `<button type="button" class="btn btn-danger btn-sm batal-btn"><i class="fa fa-times" aria-hidden="true"></i></button>`;
                    

                    return $rowData;
                },
                visible: true,
                targets: 9,
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
                .find(".batal-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    isObject = rowData
                    isObject.status = 30
                    isObject.tujuan = rowData.nta_tujuan
                    isObject.isi = rowData.s_text
                    saveData()
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
    $("#save-btn").prop("disabled", false)
    aspirasi_status = 10;
    $("#save-btn").text("Review")

    if (rowData.status == 10) {
        aspirasi_status = 20
        $("#save-btn").prop("disabled", false)
        if (roleid != 15) {
            $("#save-btn").prop("disabled", true)
        }
        $("#save-btn").text("Review")
    }

    if (rowData.status == 20) {
        $("#save-btn").prop("disabled", true)
    }
    let $el = $("input:radio[name='form-type'][value='" + rowData.type_doc + "']");
    $el.prop("checked", true).prop("disabled", true);

    if (rowData.type_doc == 10) {
        $(".pengajuan-form").show();
        $(".laporan-form").hide();
    }
    if (rowData.type_doc == 20) {
        $(".laporan-form").show();
        $(".pengajuan-form").hide();
    }

    if (rowData.status == 30) {
        $("#save-btn").text("Canceled").prop("disabled", true)
    }

    if (rowData.file_path) {
        $('#fileLabel').text('File exists: ' + rowData.file_path.split('/').pop());
        $('#form-file').prop('disabled', true);
    } else {
        $('#fileLabel').text('Choose a file...');
    }

    $('#form-file').prop('disabled', true);

    if (rowData.status == 10 && rowData.type_doc == 10) {
        aspirasi_status = 20
        $('#form-file').prop('disabled', false);
        $("#save-btn").text("Validated")
        $(".laporan-form").show();
        $(".pengajuan-form").hide();
    }
    if (rowData.status == 20 && rowData.type_doc == 10) {
        aspirasi_status = 20
        $('#form-file').prop('disabled', false);
        $("#save-btn").text("Validated")
        $(".laporan-form").show();
        $(".pengajuan-form").show();
    }

    $("#form-status").val(aspirasi_status)
    $("#form-judul").val(rowData.judul).prop("disabled", true);
    $("#form-nta").val(rowData.nta).prop("disabled", true);
    $("#form-isi").text(rowData.s_text).prop("disabled", true);
    $("#form-nama").val(rowData.nama).prop("disabled", true)
    $("#form-tujuan").val(rowData.nta_tujuan).prop("disabled", true).trigger("change")
    $("#form-kategori").val(rowData.kategori_berkas).prop("disabled", true).trigger("change")
    $("#modal-data").modal("show");
}

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    $("#save-btn").text("Simpan")
    isObject = {};
    isObject["id"] = null;
    $("#form-nta").val("").prop("disabled", false)
    let $el = $("input:radio[name='form-type'][value='" + 10 + "']");
    $el.prop("checked", true).prop("disabled", false);

    if (roleid != 6) {
        $("#form-nta").val(ntaid).prop("disabled", true);
    }

    $('#fileLabel').text('Choose files...');
    $("#form-status").val(10)
    $("#form-judul").val("").prop("disabled", false);
    $("#form-isi").text("").prop("disabled", false)
    $("#form-nama").val("").prop("disabled", false)
    $("#form-tujuan").val("").prop("disabled", false).trigger("change")
    $("#form-kategori").val("").prop("disabled", false).trigger("change")
    $("#modal-data").modal("show");
});

$("#save-btn").on("click", function (e) {
    e.preventDefault();
    checkValidation();
});

$(".laporan-form").hide();
$(".pengajuan-form").show();

$("input:radio[name='form-type']").change(function () {
    let $el = $("input:radio[name='form-type']:checked").val();
    console.log($el);

    if ($el == 10) {
        $(".pengajuan-form").show();
        $(".laporan-form").hide();
    }
    if ($el == 20) {
        $(".laporan-form").show();
        $(".pengajuan-form").hide();
    }
});

function checkValidation() {
    // console.log($el);
    let $el = $("input:radio[name=form-type]:checked").val();
    if (
        validationSwalFailed(
            (isObject["nta"] = $("#form-nta").val()),
            "NTA pengusul tidak boleh kosong."
        )
    )
        return false;

    if (
        validationSwalFailed(
            (isObject["tujuan"] = $("#form-tujuan").val()),
            "NTA tujuan tidak boleh kosong."
        )
    )
        return false;

    if (
        validationSwalFailed(
            (isObject["kategori_berkas"] = $("#form-kategori").val()),
            "Pilih Kategori Berkas."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["type_doc"] = $el),
            "Pilih Tipe Berkas."
        )
    )
        return false;

    isObject["isi"] = $("#form-isi").val()
    isObject["status"] = $("#form-status").val()
    isObject["judul"] = $("#form-judul").val()
    isObject["nm_kategori"] = $("#form-nm-kategori").val()

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
    console.log(isObject);
    var formData = new FormData();
    var file = $("#form-file")[0].files[0];
    formData.append('file', file);
    formData.append('data', JSON.stringify(isObject));

    $.ajax({
        url: baseURL + "/saveBerkasProgram",
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
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                tableName: "users",
                where: "nta != 0 and us.role_id = 15"
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
                id: item.nta,
                text: item.name,
            };
        });

        $("#form-tujuan").select2({
            data: res,
            placeholder: "Please choose an option",
            dropdownParent: $("#modal-data"),
        });
    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}

async function loadCat() {
    try {
        const response = await $.ajax({
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                tableName: "kategori_berkas",
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
                text: item.nm_kategori,
            };
        });

        $("#form-kategori").select2({
            data: res,
            placeholder: "Please choose an option",
            dropdownParent: $("#modal-data"),
        });
    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}

$("#form-kategori").change(function () {
    var value = $(this).val()
    if(value == 5){
        $(".add-kategori").show()
    }else{
        $(".add-kategori").hide()
    }
});