

let dtpr;

$(document).ready(function () {
    getListData();
});

let month = null
function getListData() {
    dtpr = $("#table-list").DataTable({
        ajax: {
            url: baseURL + "/loadGlobal",
            type: "POST",
            contentType: "application/json", // Set content type to JSON
            data: function (d) {
                return JSON.stringify({
                    tableName: "uang_kas",
                    where: `DATE_FORMAT(created_at, '%Y-%m') = '${month}'`
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
        dom: 'Bfrtip', // 'B' is for buttons
        buttons: [

            {
                extend: 'excel',
                text: 'Export ke Excel',
                init: function (api, node, config) {
                    dtpr = api;
                },
                customize: function (xlsx) {
                    var totalRevenue = dtpr.column(3, { search: 'applied' }).data().reduce(function (a, b) {
                        return parseInt(a) + parseInt(b);
                    }, 0);


                    var sheet = xlsx.xl.worksheets['sheet1.xml'];
                    var lastCol = sheet.getElementsByTagName('col').length;
                    var totalRow = sheet.getElementsByTagName('sheetData')[0].appendChild(document.createElement('row'));

                    totalRow.innerHTML = `<c r="A${lastCol + 1}" t="s">
                                            <v>${lastCol + 1}</v>
                                         </c>
                                         <c r="B${lastCol + 1}" t="n">
                                            <v>${totalRevenue}</v>
                                         </c>`;

                    // Update the sharedStrings.xml file
                    // Update the sharedStrings.xml file if available
                    var sharedStrings = xlsx.xl.sharedStrings && xlsx.xl.sharedStrings[0];
                    if (sharedStrings) {
                        sharedStrings.innerHTML += `<si><t>${totalRevenue}</t></si>`;
                    }
                }
            },
            'pdf'

        ],
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
            { data: "created_at" },
            { data: "nominal" },
            { data: "file_path" },
            { data: "status" },

        ],
        columnDefs: [
            {
                mRender: function (data, type, row) {
                    // var $rowData = '<button class="btn btn-sm btn-icon isEdit i_update"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-info"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>';
                    // $rowData += `<button class="btn btn-sm btn-icon delete-record i_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-danger"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
                    $rowData = parseInt(row.nominal)

                    if ($rowData) {
                        $rowData = formatRupiah(parseInt($rowData))
                        if(row.expense){
                            $rowData += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down">
                                            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                            <polyline points="17 18 23 18 23 12"></polyline>
                                        </svg>` 
                        }else{
                            $rowData += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                            <polyline points="17 6 23 6 23 12"></polyline>
                                        </svg>`
                        }
                    }

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
                    $rowData = ` <span class="badge badge-dark">Initial</span>`;
                    if (row.status == 20) {
                        $rowData = `<span class="badge badge-success">Validated</span>`;
                    }
                    return $rowData;
                },
                visible: true,
                targets: 5,
                className: "text-center",
            },
            {
                mRender: function (data, type, row) {
                    $rowData = `<img src="/template/admin2/assets/images/lightgallry/01.jpg" style="width:50px">`;
                    if (row.file_path) {
                        $rowData = `<img src="/storage/${row.file_path}" style="width:50px">`;
                        $rowData += `<a href="/storage/${row.file_path}">Link File</a>`;
                    }

                    return $rowData;
                },
                visible: true,
                targets: 4,
                className: "text-center",
            },

        ],
        initComplete: function (settings, json) {
            // Create an input element of type 'text' to attach Flatpickr
            var dateInput = document.createElement('input');
            dateInput.type = 'month';
            dateInput.className = 'form-control';
            dateInput.id = 'datetime-local';
            dateInput.placeholder = 'Select a month';

            $('.dt-buttons').append(dateInput);

            var totalPendapatan = document.createElement('span');
            totalPendapatan.className = 'badge badge-info my-1';
            totalPendapatan.id = 'total-saldo';
            totalPendapatan.textContent = 'Saldo: 0'; // Set initial text
        
            var totalPengeluaran = document.createElement('span');
            totalPengeluaran.className = 'badge badge-danger my-1';
            totalPengeluaran.id = 'total-pengeluaran';
            totalPengeluaran.textContent = 'Total Pengeluaran: 0'; // Set initial text
        
            var totalPemasukan = document.createElement('span');
            totalPemasukan.className = 'badge badge-success my-1';
            totalPemasukan.id = 'total-pemasukan';
            totalPemasukan.textContent = 'Total Pemasukan: 0'; // Set initial text
        
            // Append the spans to the '.dt-buttons'
            $('.dt-buttons').append(totalPendapatan);
            $('.dt-buttons').append(totalPengeluaran);
            $('.dt-buttons').append(totalPemasukan);


            $("#datetime-local").on("change", function () {
                month = $(this).val()
                dtpr.clear().draw(); // Clear the current data
                dtpr.ajax.reload();

            })


            // Initialize Flatpickr on the input element
            // flatpickr('#datetime-local', {
            //     dateFormat: 'Y-m', // Set the format for the visible input (only month and year)
            //     altInput: true,
            //     altFormat: 'F Y', //// Set the format for the alternate input (placeholder)
            //     onClose: function (selectedDates, dateStr, instance) {
            //         // Directly update the DataTable
            //         dtpr.clear().draw(); // Clear the current data
            //         dtpr.ajax.reload(); // Reload the DataTable using Ajax

            //         // You can also add your logic with the selected date here
            //         console.log('Selected date:', dateStr);
            //     }
            // });

            // Hide the default button created by DataTables
            // $('.dt-buttons button').hide();
        },


        drawCallback: function (settings) {
            var api = this.api();
            var rows = api.rows({ page: "current" }).nodes();
            var last = null;

            // Calculate totals for specific columns
            var totalExpense = api.rows().data().reduce(function (sum, row) {
                return sum + (row.expense ? parseInt(row.nominal) : 0);
            }, 0);
    
            var totalRevenue = api.rows().data().reduce(function (sum, row) {
                return sum + (!row.expense ? parseInt(row.nominal) : 0);
            }, 0);
    
            var totalMoney = totalRevenue - totalExpense;
    
            // Format the totals and update the input fields
            $("#total-pendapatan").text("Total Pemasukan:"+formatRupiah(totalRevenue));
            $("#total-pengeluaran").text("Total Pengeluaran:"+formatRupiah(totalExpense));
            $("#total-saldo").text("Saldo:"+formatRupiah(totalMoney));

            $(rows)
                .find(".done-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    saveChangeStatus(rowData, 10);
                });

            $(rows)
                .find(".paid-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    saveChangeStatus(rowData, 20);
                });

            $(rows)
                .find(".process-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    // if (rowData.karyawan_id == null && rowData.transaction_type == "GR") {
                    //     showModalKaryawan(rowData)
                    // } else {
                    //     saveChangeStatus(rowData, 30);
                    // }

                    saveChangeStatus(rowData, 30);

                });

            $(rows)
                .find(".cancel-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    saveChangeStatus(rowData, 50);
                });

            $(rows)
                .find(".invoice-btn")
                .on("click", function () {
                    var tr = $(this).closest("tr");
                    var rowData = dtpr.row(tr).data();
                    getinvoice(rowData);
                });

        },
    });
}

function getinvoice(params) {
    location.href = baseURL + "/invoice?noinvoice=" + params.no_transaction
}


function saveChangeStatus(param, status) {
    data = {}
    data.status = status
    data.id = param.id
    $.ajax({
        url: baseURL + "/changeStatusTransaction",
        type: "POST",
        data: JSON.stringify(data),
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


let isObject = {};
function showModalKaryawan(params) {
    isObject = {}
    isObject.id = params.id
    isObject.status = 30
    $('#setassign-karyawan').modal("show")
    loadKaryawan();
}

async function loadKaryawan() {
    try {

        const response = await $.ajax({
            url: baseURL + "/loadGlobal",
            type: "POST",
            data: JSON.stringify({ tableName: 'users', where: "role_id = 8" }),
            dataType: "json",
            contentType: "application/json",
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
                text: item.name,
            };
        });



        $(`#sel-karyawan`).select2({
            // theme: "bootstrap-5",
            // width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',

            data: res,
            placeholder: "Pilih Karyawan",
            // dropdownParent: $("#modal-data"),
        });
        $(`#sel-karyawan`).val("").trigger("change");

    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}




function saveData() {

    swal({
        title: "Are you sure to save data ?",
        text: "You will not be able to recover this imaginary file !!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, save it !!",
        cancelButtonText: "No, cancel it !!",
        closeOnConfirm: !1,
        closeOnCancel: !1,
    }).then(function (e) {
        console.log(e);
        if (e.value) {
            $.ajax({
                url: baseURL + "/assignKaryawanTransaction",
                type: "POST",
                data: JSON.stringify(isObject),
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
                        swal("Saved !", response.message, "success").then(
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

$("#add-btn").on("click", function (e) {
    e.preventDefault();
    $("#save-btn").text("Simpan")
    isObject = {};
    isObject["id"] = null;
    $("#form-nta").val("").prop("disabled", false)
    if (ntaid != 0) {
        $("#form-nta").val(ntaid).prop("disabled", true);
    }
    $("#form-status").val(20)
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
    isObject["expense"] = 1

    saveData();
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