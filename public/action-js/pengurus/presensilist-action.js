let dtpr, dtpr_piket;

$(document).ready(function () {
    $(".js-example-basic-single").select2({
        dropdownParent: $("#modal-data"),
        placeholder: "Pilih Hari",
    });
    getListData();
    getListDataJadwal()
    updateButtonVisibility()
});

function getTimeInGMT7() {

    var now = new Date();
    var gmt7Time = new Date(now);

    var hours = gmt7Time.getHours(); 
    var minutes = gmt7Time.getMinutes();
    var seconds = gmt7Time.getSeconds();
    
    
    return { hours: hours, minutes: minutes, seconds: seconds };
}

function updateButtonVisibility() {
    var time = getTimeInGMT7();
    var currentHour = time.hours;
    console.log("jam sekarang:"+currentHour);
    if (currentHour >= 8 && currentHour <= 23) {
        $('#add-btn').show();
        $('#min-btn').show();
    } else {
        $('#add-btn').remove();
        $('#min-btn').remove();
    }
}


showAspirasi()
function showAspirasi() {
    $.ajax({
        url: baseURL + "/loadGlobal",
        type: "POST",
        data: JSON.stringify({
            tableName: "divisi",
            where: "u.nta ='" + ntaid + "'"
        }),

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

            if (response.code == 0) {

                isopen = response.data[0].hari_piket;
                if (isopen) {
                    $(".notice-piket").text("Anda Piket Setiap Hari " + isopen)
                } else {
                    $(".notice-piket").empty()
                }

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
            contentType: "application/json",
            data: function (d) {
                return JSON.stringify({
                    tableName: "presensis",
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
            { data: "lokasi" },
            { data: "status" },
            { data: "deskripsi_tugas" },
            { data: "checkin" },
            { data: "checkout" },
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
                    $rowData = ` <span class="badge badge-dark">Checkin</span>`;
                    if (row.status == 20) {
                        $rowData = ` <span class="badge badge-warning">Checkout</span>`;
                    }
                    if (row.status == 30) {
                        $rowData = ` <span class="badge badge-success">Validated</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 4,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {

                    var checkin = row.checkin;  // String tanggal dan waktu
                    var createdAt = new Date(checkin.replace(" ", "T"));  // Ganti spasi dengan 'T' untuk parsing

                    // Cek apakah parsing berhasil
                    if (isNaN(createdAt.getTime())) {
                        console.error("Invalid date format:", checkin);
                    } else {
                        var now = new Date();
                        var today = now.toISOString().slice(0, 10);  // Format hari ini (YYYY-MM-DD)
                        var createdAtDate = createdAt.toISOString().slice(0, 10);  // Format tanggal checkin (YYYY-MM-DD)

                        if (createdAtDate === today) {
                            $('#add-btn').remove()
                            console.log("Tanggal checkin sama dengan hari ini.");
                        }
                    }
                    return checkin

                },
                visible: true,
                targets: 6,
                className: "text-center",
            },

            {
                mRender: function (data, type, row) {
                    var checkin = row.checkout;  // String tanggal dan waktu
                    if (checkin != null) {
                        var createdAt = new Date(checkin.replace(" ", "T"));  // Ganti spasi dengan 'T' untuk parsing

                        // Cek apakah parsing berhasil
                        if (isNaN(createdAt.getTime())) {
                            console.error("Invalid date format:", checkin);
                        } else {
                            var now = new Date();
                            var today = now.toISOString().slice(0, 10);  // Format hari ini (YYYY-MM-DD)
                            var createdAtDate = createdAt.toISOString().slice(0, 10);  // Format tanggal checkin (YYYY-MM-DD)

                            if (createdAtDate === today) {
                                $('#min-btn').remove()
                                console.log("Tanggal checkin sama dengan hari ini.");
                            }
                        }
                    }


                    return checkin
                },
                visible: true,
                targets: 7,
                className: "text-center",
            },

            {
                mRender: function (data, type, row) {
                    var $rowData = `<button type="button" class="btn btn-info btn-sm mx-2 edit-btn"><i class="fa fa-pencil"></i></button>`;
                    if (roleid == 15) {
                        $rowData += `<button type="button" class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>`;
                    }

                    return $rowData;
                },
                visible: true,
                targets: 8,
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

function getListDataJadwal() {
    dtpr_piket = $("#table-list-piket").DataTable({
        ajax: {
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json", // Set content type to JSON
            data: function (d) {
                return JSON.stringify({
                    tableName: "divisi",
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
            { data: "nm_divisi" },
            { data: "hari_piket" },
            { data: "id" },
        ],
        columnDefs: [
            // {
            //     mRender: function (data, type, row) {
            //         $rowData = "";
            //         if (row.category == "GR") {
            //             $rowData = "Grooming";
            //         }
            //         if (row.category == "PN") {
            //             $rowData = "Penitipan";
            //         }
            //         return $rowData;
            //     },
            //     visible: true,
            //     targets: 2,
            //     className: "text-center",
            // },
            {
                mRender: function (data, type, row) {
                    $rowData = "No Action Availabel"
                    if (roleid == 15) {
                        $rowData = `<button type="button" class="btn btn-info btn-sm mx-2 edit-btn"><i class="fa fa-pencil"></i></button>`;
                        // $rowData += `<button type="button" class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>`;
                    }

                    return $rowData;
                },
                visible: true,
                targets: 3,
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
                    var rowData = dtpr_piket.row(tr).data();
                    editdatapiket(rowData);
                });
            $(rows)
                .find(".delete-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr_piket.row(tr).data();
                    deleteData(rowData);
                });
        },
    });
}


function editdatapiket(rowData) {
    isObject = {}
    isObject = rowData;

    $("#form-divisi").val(rowData.nm_divisi).prop("disabled", true);
    $("#form-hari").val(rowData.hari_piket).trigger("change");

    $("#modal-data-piket").modal("show");
}


$("#save-btn-piket").on("click", function (e) {
    e.preventDefault();

    isObject.hari_piket = $("#form-hari").val()
    savePiket();
});

function savePiket() {

    // formdata
    // console.log(isObject);
    var formData = new FormData();
    // var file = $("#form-img")[0].files[0];
    // formData.append('image', file);
    formData.append('data', JSON.stringify(isObject));

    $.ajax({
        url: baseURL + "/saveDivisi",
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
                sweetAlert("Oops...", response.info, "error");
            }
        },
        error: function (xhr, status, error) {
            // Handle error response
            // console.log(xhr.responseText);
            sweetAlert("Oops...", xhr.responseText, "error");
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

    if (rowData.status == 10) {
        aspirasi_status = 10
        $("#save-btn").text("Unvalidated").prop("disabled", true)
    }
    if (rowData.status == 20) {
        aspirasi_status = 30
        if (roleid == 15) {
            $("#save-btn").text("Validated").prop("disabled", false)
        }

    }
    if (rowData.status == 30) {
        aspirasi_status = 30
        $("#save-btn").text("Validated").prop("disabled", true)
    }

    $("#form-status").val(aspirasi_status)
    $("#form-lokasi").val(rowData.lokasi).prop("disabled", true);
    $("#form-nta").val(rowData.nta).prop("disabled", true);
    $("#form-desc").text(rowData.deskripsi_tugas).prop("disabled", true);

    $("#modal-data").modal("show");
}

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    makesureloc = getLocation()
    if (makesureloc) {
        isObject = {};
        isObject["id"] = null;

        $("#form-nta").val("").prop("disabled", false)

        if (roleid != 6) {
            $("#form-nta").val(ntaid).prop("disabled", true);
        }
        $("#form-status").val(10)
        $("#form-lokasi").val("").prop("disabled", true);

        $("#form-desc").text("").prop("disabled", false)
        $("#save-btn").text("Checkin")
    } else {
        console.log("ada error");
        $("#save-btn").prop("disabled", true)
    }
});

$("#min-btn").on("click", function (e) {
    e.preventDefault();
    makesureloc = getLocation()
    if (makesureloc) {
        isObject = {};
        isObject["id"] = null;

        $("#form-nta").val("").prop("disabled", false)
        if (ntaid != 0) {
            $("#form-nta").val(ntaid).prop("disabled", true);
        }
        $("#form-status").val(20)
        $("#form-lokasi").val("").prop("disabled", true);
        $("#form-desc").text("OK").prop("disabled", true)
        $("#save-btn").text("Checkout")
    } else {
        console.log("ada error");
        $("#save-btn").prop("disabled", true)
    }
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
            (isObject["lokasi"] = $("#form-lokasi").val()),
            "Judul tidak boleh kosong"
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["deskripsi_tugas"] = $("#form-desc").val()),
            "Isi tidak boleh kosong."
        )
    )
        return false;

    isObject["status"] = $("#form-status").val()


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
                data: JSON.stringify({ id: data.id, tableName: "presensis" }),
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
        url: baseURL + "/savePresensi",
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
                sweetAlert("Oops...", response.info, "error");
            }
        },
        error: function (xhr, status, error) {
            // Handle error response
            // console.log(xhr.responseText);
            sweetAlert("Oops...", xhr.responseText, "error");
        },
    });
}

const unikomLatitude = -6.8894;
const unikomLongitude = 107.6100;
const distanceThreshold = 10;

function getLocation() {
    Swal.fire({
        title: "Loading",
        text: "Please wait...",
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        return true;
    } else {
        sweetAlert("Oops...", "Geolocation is not supported by this browser.", "error");
        $("#save-btn").prop("disabled", true)
        return false;
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Radius bumi dalam meter
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function showPosition(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
    const distance = calculateDistance(userLatitude, userLongitude, unikomLatitude, unikomLongitude);

    let detail_address =
        "Latitude: " + userLatitude +
        "<br>Longitude: " + userLongitude +
        "<br>Distance from UNIKOM: " + distance.toFixed(2) + " meters";

    if (distance > distanceThreshold) {
        // Fetch the address even if the user is far from UNIKOM
        $.ajax({
            url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLatitude}&lon=${userLongitude}&addressdetails=1`,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data && data.display_name) {
                    detail_address += "<br>Your address: " + data.display_name;
                    sweetAlert("Oops...", detail_address + "<br>You are far from UNIKOM. Distance more than " + distanceThreshold + " Meters", "error");
                    $("#save-btn").prop("disabled", true);
                } else {
                    sweetAlert("Oops...", "Unable to retrieve address information.", "error");
                }
            },
            error: function (error) {
                sweetAlert("Oops...", "Error fetching geocoding data: " + error, "error");
            }
        });
        return false;
    } else {
        $("#save-btn").prop("disabled", false);
        // Fetch the address normally when within the threshold
        $.ajax({
            url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLatitude}&lon=${userLongitude}&addressdetails=1`,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data && data.address) {
                    detail_address += "<br>Your address: " + data.display_name;
                    swal("You are near UNIKOM.", detail_address, "success");
                    $("#form-lokasi").val(data.display_name).prop("disabled", true);
                    $("#modal-data").modal("show");
                } else {
                    sweetAlert("Oops...", "Unable to retrieve address information.", "error");
                }
            },
            error: function (error) {
                sweetAlert("Oops...", "Error fetching geocoding data: " + error, "error");
            }
        });
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            sweetAlert("Oops...", "User denied the request for Geolocation.", "error");
            break;
        case error.POSITION_UNAVAILABLE:
            sweetAlert("Oops...", "Location information is unavailable.", "error");
            break;
        case error.TIMEOUT:
            sweetAlert("Oops...", "The request to get user location timed out.", "error");
            break;
        case error.UNKNOWN_ERROR:
            sweetAlert("Oops...", "An unknown error occurred.", "error");
            break;
    }
}

