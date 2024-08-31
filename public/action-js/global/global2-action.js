$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$(".right-arrow").remove();
(function ($) {
    if (localStorage.getItem("color"))
        $("#color").attr(
            "href",
            "../assets/css/" + localStorage.getItem("color") + ".css"
        );
    if (localStorage.getItem("dark")) $("body").attr("class", "dark-only");
    // $(
    //     '<div class="customizer-links"><div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"><a class="nav-link" id="c-pills-layouts-tab" data-bs-toggle="pill" href="#c-pills-layouts" role="tab" aria-controls="c-pills-layouts" aria-selected="false" data-original-title=""><div class="settings"><i class="icon-paint-bucket"></i></div><span>Check layouts</span></a> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home" role="tab" aria-controls="c-pills-home" aria-selected="false" data-original-title=""><div class="settings"><i class="icon-settings"></i></div><span>Quick option</span></a> <a class="nav-link" target="_blank" href="https://pixelstrap.freshdesk.com/" data-original-title=""><div><i class="icon-support"></i></div><span>Support</span></a> <a class="nav-link" target="_blank" href="https://docs.pixelstrap.com/cuba/html/document/" target="_blank" data-original-title=""><div><i class="icon-settings"></i></div><span>Document</span></a> <a class="nav-link" target="_blank" href="http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks" data-original-title=""><div><i class="icon-panel"></i></div><span>Check features</span></a> <a class="nav-link" target="_blank" href="https://1.envato.market/3GVzd" data-original-title=""><div><i class="icon-shopping-cart-full"></i></div><span>Buy now</span></a></div></div><div class="customizer-contain"><div class="tab-content" id="c-pills-tabContent"><div class="customizer-header"><i class="icofont-close icon-close"></i><h5>Preview Settings</h5><p class="mb-0">Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i></p></div><div class="customizer-body custom-scrollbar"><div class="tab-pane fade" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab"><h6>Layout Type</h6><ul class="main-layout layout-grid"><li data-attr="ltr" class="active"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul></div></li><li data-attr="rtl"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light body"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul></div></li><li data-attr="ltr" class="box-layout px-3"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul></div></li></ul><h6>Sidebar Type</h6><ul class="sidebar-type layout-grid"><li data-attr="normal-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul></div></li><li data-attr="compact-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar compact"></li><li class="bg-light body"></li></ul></div></li></ul><h6>Sidebar Icon</h6><ul class="sidebar-setting layout-grid"><li class="active" data-attr="stroke-svg"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body bg-light"><span class="badge badge-primary">Stroke</span></div></li><li data-attr="fill-svg"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body bg-light"><span class="badge badge-primary">Fill</span></div></li></ul><h6>Unlimited Color</h6><ul class="layout-grid unlimited-color-layout"><input id="ColorPicker1" type="color" value="#7366ff" name="Background"><input id="ColorPicker2" type="color" value="#f73164" name="Background"><button type="button" class="color-apply-btn btn btn-primary color-apply-btn">Apply</button></ul><h6>Light layout</h6><ul class="layout-grid customizer-color"><li class="color-layout" data-attr="color-1" data-primary="#7366ff" data-secondary="#f73164"><div></div></li><li class="color-layout" data-attr="color-2" data-primary="#4831D4" data-secondary="#ea2087"><div></div></li><li class="color-layout" data-attr="color-3" data-primary="#d64dcf" data-secondary="#8e24aa"><div></div></li><li class="color-layout" data-attr="color-4" data-primary="#4c2fbf" data-secondary="#2e9de4"><div></div></li><li class="color-layout" data-attr="color-5" data-primary="#7c4dff" data-secondary="#7b1fa2"><div></div></li><li class="color-layout" data-attr="color-6" data-primary="#3949ab" data-secondary="#4fc3f7"><div></div></li></ul><h6>Dark Layout</h6><ul class="layout-grid customizer-color dark"><li class="color-layout" data-attr="color-1" data-primary="#4466f2" data-secondary="#1ea6ec"><div></div></li><li class="color-layout" data-attr="color-2" data-primary="#4831D4" data-secondary="#ea2087"><div></div></li><li class="color-layout" data-attr="color-3" data-primary="#d64dcf" data-secondary="#8e24aa"><div></div></li><li class="color-layout" data-attr="color-4" data-primary="#4c2fbf" data-secondary="#2e9de4"><div></div></li><li class="color-layout" data-attr="color-5" data-primary="#7c4dff" data-secondary="#7b1fa2"><div></div></li><li class="color-layout" data-attr="color-6" data-primary="#3949ab" data-secondary="#4fc3f7"><div></div></li></ul><h6>Mix Layout</h6><ul class="layout-grid customizer-mix"><li class="color-layout active" data-attr="light-only"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"></li></ul></div></li><li class="color-layout" data-attr="dark-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul></div></li><li class="color-layout" data-attr="dark-only"><div class="header bg-dark"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-dark body"></li></ul></div></li></ul></div><div class="tab-pane fade" id="c-pills-layouts" role="tabpanel" aria-labelledby="c-pills-layouts-tab"><ul class="sidebar-type layout-grid layout-types"><li data-attr="compact-sidebar"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/dubai.jpg" class="img-fluid" alt=""></a><h6>Dubai</h6></div></li><li data-attr="material-layout"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/los-angle.png" class="img-fluid" alt=""></a><h6>Los Angeles</h6></div></li><li data-attr="dark-sidebar"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/paris.jpg" class="img-fluid" alt=""></a><h6>Paris</h6></div></li><li data-attr="compact-wrap"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/tokyo.jpg" class="img-fluid" alt=""></a><h6>Tokyo</h6></div></li><li data-attr="compact-small"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/moscow.jpg" class="img-fluid" alt=""></a><h6>Moscow</h6></div></li><li data-attr="enterprice-type"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/singapore.jpg" class="img-fluid" alt=""></a><h6>Singapore</h6></div></li><li data-attr="box-layout" class="box-layout"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/newyork.png" class="img-fluid" alt=""></a><h6>New York</h6></div></li><li data-attr="advance-type"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/singapore.jpg" class="img-fluid" alt=""></a><h6>Barcelona</h6></div></li><li data-attr="color-sidebar"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/paris.jpg" class="img-fluid" alt=""></a><h6>Madrid</h6></div></li><li data-attr="material-icon"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/rome.jpg" class="img-fluid" alt=""></a><h6>Rome</h6></div></li><li data-attr="modern-layout"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/dubai.jpg" class="img-fluid" alt=""></a><h6>Seoul</h6></div></li><li class="only-body" data-attr="default-body"><div class="layout-img"><a href="javascript:void(0)"><img src="../assets/images/landing/layout-images/landon.png" class="img-fluid" alt=""></a><h6>London</h6></div></li></ul></div></div></div></div>'
    // ).appendTo($("body"));
    // (function () { })();
    //live customizer js
    $(document).ready(function () {
        setLayout();
        $(".customizer-color li").on("click", function () {
            $(".customizer-color li").removeClass("active");
            $(this).addClass("active");
            var color = $(this).attr("data-attr");
            var primary = $(this).attr("data-primary");
            var secondary = $(this).attr("data-secondary");
            localStorage.setItem("color", color);
            localStorage.setItem("primary", primary);
            localStorage.setItem("secondary", secondary);
            localStorage.removeItem("dark");
            $("#color").attr("href", "../assets/css/" + color + ".css");
            $(".dark-only").removeClass("dark-only");
            location.reload(true);
        });

        $(".customizer-color.dark li").on("click", function () {
            $(".customizer-color.dark li").removeClass("active");
            $(this).addClass("active");
            $("body").attr("class", "dark-only");
            localStorage.setItem("dark", "dark-only");
        });

        if (localStorage.getItem("primary") != null) {
            document.documentElement.style.setProperty(
                "--theme-deafult",
                localStorage.getItem("primary")
            );
        }
        if (localStorage.getItem("secondary") != null) {
            document.documentElement.style.setProperty(
                "--theme-secondary",
                localStorage.getItem("secondary")
            );
        }
        $(
            ".customizer-links #c-pills-home-tab, .customizer-links #c-pills-layouts-tab"
        ).click(function () {
            $(".customizer-contain").addClass("open");
            $(".customizer-links").addClass("open");
        });

        $(".close-customizer-btn").on("click", function () {
            $(".floated-customizer-panel").removeClass("active");
        });

        $(".customizer-contain .icon-close").on("click", function () {
            $(".customizer-contain").removeClass("open");
            $(".customizer-links").removeClass("open");
        });

        $(".color-apply-btn").click(function () {
            location.reload(true);
        });

        var primary = document.getElementById("ColorPicker1").value;
        document.getElementById("ColorPicker1").onchange = function () {
            primary = this.value;
            localStorage.setItem("primary", primary);
            document.documentElement.style.setProperty("--theme-primary", primary);
        };

        var secondary = document.getElementById("ColorPicker2").value;
        document.getElementById("ColorPicker2").onchange = function () {
            secondary = this.value;
            localStorage.setItem("secondary", secondary);
            document.documentElement.style.setProperty(
                "--theme-secondary",
                secondary
            );
        };

        $(".customizer-color.dark li").on("click", function () {
            $(".customizer-color.dark li").removeClass("active");
            $(this).addClass("active");
            $("body").attr("class", "dark-only");
            localStorage.setItem("dark", "dark-only");
        });

        $(".customizer-mix li").on("click", function () {
            $(".customizer-mix li").removeClass("active");
            $(this).addClass("active");
            var mixLayout = $(this).attr("data-attr");
            $("body").attr("class", mixLayout);
        });

        $(".sidebar-setting li").on("click", function () {
            $(".sidebar-setting li").removeClass("active");
            $(this).addClass("active");
            var sidebar = $(this).attr("data-attr");
            $(".sidebar-wrapper").attr("sidebar-layout", sidebar);
        });

        $(".sidebar-main-bg-setting li").on("click", function () {
            $(".sidebar-main-bg-setting li").removeClass("active");
            $(this).addClass("active");
            var bg = $(this).attr("data-attr");
            $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
        });

        function setLayout(params) {
            $("body").append("");
            console.log("test");
            var type = "normal-sidebar";

            var boxed = "";
            if ($(".page-wrapper").hasClass("box-layout")) {
                boxed = "box-layout";
            }
            switch (type) {
                case "compact-sidebar": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper " + boxed
                    );
                    $(this).addClass("active");
                    localStorage.setItem("page-wrapper-cuba", "compact-wrapper");
                    break;
                }
                case "normal-sidebar": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper horizontal-wrapper " + boxed
                    );
                    // $(".logo-wrapper")
                    //     .find("img")
                    //     .attr("src", "../assets/images/logo/logo.png");
                    localStorage.setItem("page-wrapper-cuba", "horizontal-wrapper");
                    break;
                }
                case "default-body": {
                    $(".page-wrapper").attr("class", "page-wrapper  only-body" + boxed);
                    localStorage.setItem("page-wrapper-cuba", "only-body");
                    break;
                }
                case "dark-sidebar": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper dark-sidebar" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-wrapper dark-sidebar"
                    );
                    break;
                }
                case "compact-wrap": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-sidebar" + boxed
                    );
                    localStorage.setItem("page-wrapper-cuba", "compact-sidebar");
                    break;
                }
                case "color-sidebar": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper color-sidebar" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-wrapper color-sidebar"
                    );
                    break;
                }
                case "compact-small": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-sidebar compact-small" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-sidebar compact-small"
                    );
                    break;
                }
                case "box-layout": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper box-layout " + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-wrapper box-layout"
                    );
                    break;
                }
                case "enterprice-type": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper horizontal-wrapper enterprice-type" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "horizontal-wrapper enterprice-type"
                    );
                    break;
                }
                case "modern-layout": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper modern-type" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-wrapper modern-type"
                    );
                    break;
                }
                case "material-layout": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper horizontal-wrapper material-type" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "horizontal-wrapper material-type"
                    );

                    break;
                }
                case "material-icon": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-sidebar compact-small material-icon" + boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "compact-sidebar compact-small material-icon"
                    );

                    break;
                }
                case "advance-type": {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper horizontal-wrapper enterprice-type advance-layout" +
                        boxed
                    );
                    localStorage.setItem(
                        "page-wrapper-cuba",
                        "horizontal-wrapper enterprice-type advance-layout"
                    );

                    break;
                }
                default: {
                    $(".page-wrapper").attr(
                        "class",
                        "page-wrapper compact-wrapper " + boxed
                    );
                    localStorage.setItem("page-wrapper-cuba", "compact-wrapper");
                    break;
                }
            }
        }

        $(".main-layout li").on("click", function () {
            $(".main-layout li").removeClass("active");
            $(this).addClass("active");
            var layout = $(this).attr("data-attr");
            $("body").attr("class", layout);
            $("html").attr("dir", layout);
        });

        $(".main-layout .box-layout").on("click", function () {
            $(".main-layout .box-layout").removeClass("active");
            $(this).addClass("active");
            var layout = $(this).attr("data-attr");
            $("body").attr("class", "box-layout");
            $("html").attr("dir", layout);
        });
    });
})(jQuery);


$(document).ready(function () {
    // // Delay the execution of getMenuAccess() by 2 seconds
    // setTimeout(function() {
    //     getMenuAccess();
    // }, 1000); // 2000 milliseconds = 2 seconds
    getMenuAccess();
    loadUidData();
    loadImgContent();
});


function loadUidData() {

    $.ajax({
        url: baseURL + "/home/loadGlobal",
        type: "POST",
        data: JSON.stringify({ tableName: 'users', where: "id = '" + uid + "'" }),
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
                // swal("Saved !", response.message, "success").then(function () {
                //     // location.reload();
                //     location.href = baseURL+"/invoice?noinvoice="+response.data.no_transaction
                // });
                // Reset form
                data = response.data;
                $("#v-nama").val(data[0].name).prop("readonly", true)
                $("#v-phone").val(data[0].phone).prop("readonly", true)
                $("#v-email").val(data[0].email).prop("readonly", true)
                $("#v-alamat").val(data[0].address).prop("readonly", true)

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

function getMenuAccess() {

    menuel = `
    <li class="sidebar-main-title">
        <div>
            <h6 class="lan-1">Appointment</h6>
        </div>
    </li><li class="sidebar-list"><i class="fa fa-thumb-tack"></i><a class="sidebar-link sidebar-title link-nav" href="#set-appointment">
        <i class="fa fa-dot-circle-o"></i>
        <span>Beranda</span>
        <div class="according-menu"><i class="fa fa-angle-right"></i></div>
        <div class="according-menu"><i class="fa fa-angle-right"></i></div></a>
    </li></ul>
    
    <li class="sidebar-main-title">
        <div>
            <h6 class="lan-1">Tentang Kami</h6>
        </div>
    </li><li class="sidebar-list"><i class="fa fa-thumb-tack"></i><a class="sidebar-link sidebar-title link-nav" href="#contact-kimi">
        <i class="fa fa-dot-circle-o"></i>
        <span>Aspirasi</span>
        <div class="according-menu"><i class="fa fa-angle-right"></i></div>
        <div class="according-menu"><i class="fa fa-angle-right"></i></div></a>
    </li></ul>
    `
    $('.simplebar-content .pin-title').after(menuel);

    const currentUrl = window.location.pathname;

    $(".simplebar-content").find('.sidebar-list a').each(function () {
        var menuItemUrl = $(this).attr('href');

        if (currentUrl === menuItemUrl) {

            $(this).addClass('active');
        }
    });


}

function validationSwalFailed(param, isText) {
    console.log(param);
    if (param == "" || param == null || param == 0) {
        sweetAlert("Oops...", isText, "warning");

        return 1;
    }
}


let isObject = {}
let startDate;
$(document).ready(function () {
    flatpickr("#datetime-local", {
        enableTime: false,
        minDate: "today",
        // mode:"range",
        dateFormat: "Y-m-d",

        onClose: function (selectedDates) {
            // console.log(selectedDates);
            startDate = this.formatDate(selectedDates[0], "Y-m-d");
            var formattedDate = this.formatDate(selectedDates[0], "Y-m-d");
            loadLastTransaction(formattedDate)
            // if (selectedDates.length === 2) {
                

            // }
        },
    });

});


counter = 0;
$("#add-btn").on("click", function (e) {
    e.preventDefault();

    counter++;

    el = ` <tr id="item${counter}">
    <td><input class="form-control form-control-lg v-pet pet-name" type="text"
            placeholder="Nama Pet" required=""></td>
    <td><select class="form-control pet-package" id="sel-package${counter}">
    </select></td>
    <td><select class="form-control pet-karyawan" id="sel-karyawan${counter}">
    </select></td>
    <td><select class="form-control form-control-lg v-pet pet-type" id="sel-petitem${counter}">
    </select></td>
   
    <td><a class="btn btn-danger" onclick="deleteItem(${counter})"><i
                class="fa fa-minus"></i></a></td>
    </tr>`;
    $("#f-pet").append(el);

    loadPackage(counter);
    loadKaryawan(counter);
    loadPet(counter);

});


$('#f-pet').on('change', '.pet-package', function () {
    if ($(this).val()) {
        countTotal();
    }

    var selectedPackage = $(this).val();
        
    var karyawanSelectId = $(this).attr('id').replace('sel-package', 'sel-karyawan');
    
    var newKaryawanValue = '';
    if (selectedPackage === '6') { 
        newKaryawanValue = '22'; 
        $('#' + karyawanSelectId).prop('disabled', true);
        $('#' + karyawanSelectId).val(newKaryawanValue);
        $('#' + karyawanSelectId).trigger('change');
    } else {
        loadKaryawan(karyawanSelectId);
        $('#' + karyawanSelectId).prop('disabled', false);

    }


});

$("#save-btn").hide();
// $(".jumlah-bayar").hide();
// $(".sisa-bayar").hide();

function countTotal() {
    let total_price = 0;
    $('tr[id^="item"]').each(function (index) {

        val = $(this).find('.pet-package').val()
        if (val) { // check if elid is not null or undefined
            selectedOptionText = $(this).find('.pet-package :selected').text()
            arrPrice = selectedOptionText.split("-");
            total_price += parseInt(arrPrice[1]);
        }

    });


    $(".v-total").val(total_price)
    if (total_price > 0) {
        $("#save-btn").show();
        // $(".jumlah-bayar").val(0).show();
        // $(".sisa-bayar").val(0).show();
    }
}


// $('.jumlah-bayar').on('input', function () {

//     if( $(this).val() > 0){
//         hasil = $(this).val() - parseInt($(".v-total").val()) 
//         $(".sisa-bayar").val(hasil).show();
//         if(hasil >= 0 ){
//             $("#save-btn").show();
//         }else{
//             $("#save-btn").hide();
//         }
//     }else{
//         $(".sisa-bayar").val(0).show();
//         $("#save-btn").hide();
//     }
// });


function deleteItem(params) {
    $(`#item${params}`).remove()
}

$("#save-btn").on("click", function (e) {
    e.preventDefault();
    let dataPet = [];
    let total_price = 0;

    $('tr[id^="item"]').each(function (index) {

        let name = $(this).find(".pet-name").val();
        let package = $(this).find(".pet-package").val();
        let type = $(this).find(".pet-type").val();
        let karyawan = $(this).find(".pet-karyawan").val();
        var selectedOptionText = $('.pet-package :selected').text();

        arrPrice = selectedOptionText.split("-")
        total_price += parseInt(arrPrice[1]);

        if (name && package && type && karyawan) {
            let pet = {
                name: name,
                package: package,
                karyawan_id: karyawan,
                type: type,
            };

            dataPet.push(pet);
        }
    });
    isObject.transaction_type = "GR";
    isObject.price_total = total_price;
    timex = $(".tipebayar").val()
    arrtime = timex.split('-')
    startDate = new Date(startDate + 'T' + arrtime[0] + ':00');
    // Membuat tanggal lengkap untuk endDate
    var formattedDate1 = startDate.getFullYear() + '-' + ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' + ('0' + startDate.getDate()).slice(-2) + ' ' + ('0' + startDate.getHours()).slice(-2) + ':' + ('0' + startDate.getMinutes()).slice(-2) + ':' + ('0' + startDate.getSeconds()).slice(-2);
  
    isObject.date = formattedDate1;


    checkValidation(dataPet);
});

function checkValidation(dataPet) {
    if (
        validationSwalFailed(
            (isObject["name"] = $("#v-nama").val()),
            "Nama tidak boleh kosong."
        )
    )
        return false;

    if (
        validationSwalFailed(
            (isObject["address"] = $("#v-alamat").val()),
            "Alamat tidak boleh kosong."
        )
    )
        return false;
    if (
        validationSwalFailed(
            (isObject["email"] = $("#v-email").val()),
            "Email tidak boleh kosong."
        )
    )
        return false;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(isObject["email"])) {
        validationSwalFailed(
            null,
            "Format email tidak valid. Gunakan format: example@example.com"
        );
        return false;
    }
    if (
        validationSwalFailed(
            (isObject["date"]),
            "Tanggal groomiing tidak boleh kosong."
        )
    )
        return false;
    // if (
    //     validationSwalFailed(
    //         (isObject["phone"] = $("#v-phone").val()),
    //         "Nama tidak boleh kosong."
    //     )
    // )
    //     return false;
    isObject["phone"] = $("#v-phone").val();
    isObject["uid"] = uid;

    console.log(dataPet.length);
    if (dataPet.length == 0) {
        if (validationSwalFailed(null, "Pets tidak boleh kosong."))
            return false;
    }
    isObject["data_pet"] = dataPet;
    var formData = new FormData();
    file = null

    if ($('.tipe-bayar').val() == 2) {
        if (validationSwalFailed($("#formFile")[0].files.length, "File tidak boleh kosong."))
            return false;


        file = $("#formFile")[0].files[0];

    }
    formData.append('image', file);

    formData.append('data', JSON.stringify(isObject));

    saveData(formData);
}

function saveData(formData) {

    $.ajax({
        url: baseURL + "/home/saveTransaction",
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
                    // location.reload();
                    location.href = baseURL + "/invoice?noinvoice=" + response.data.no_transaction
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

async function loadImgContent() {
    try {

        const response = await $.ajax({
            url: baseURL + "/home/loadGlobal",
            type: "POST",
            data: JSON.stringify({ tableName: 'packages' }),
            dataType: "json",
            contentType: "application/json",
            beforeSend: function () {
                // Swal.fire({
                //     title: "Loading",
                //     text: "Please wait...",
                // });
            },
        });

        dataimg = response.data

        el = ``;
        for (let index = 0; index < dataimg.length; index++) {
            var path = dataimg[index].file_path;
            var named = dataimg[index].package_name;
            var descr = dataimg[index].desc;
            if (path) {

                el += `<div class="col-xxl-3 col-md-6 box-col-6 card me-3"><figure class="figure pt-3 px-0"><img src='/storage/${path}' class="figure-img img-fluid rounded"><strong>${named}</strong><figcaption class="figure-caption">${descr}</figcaption></figure></div>`
            } else {
                el += `<div class="col-xxl-3 col-md-6 box-col-6 card me-3"><figure class="figure pt-3 px-0"><img src='/template/admin2/assets/images/lightgallry/01.jpg' class="figure-img img-fluid rounded"><strong>${named}</strong><figcaption class="figure-caption">${descr}</figcaption></figure></div>`
            }

        }


        $("#imgcontent").html(el)
    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}

async function loadPackage(param) {
    try {

        const response = await $.ajax({
            url: baseURL + "/home/loadGlobal",
            type: "POST",
            data: JSON.stringify({ tableName: 'packages', where: "category = 'GR'" }),
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
                text: item.package_name + "-" + item.price,
            };
        });



        $(`#sel-package${param}`).select2({
            // theme: "bootstrap-5",
            // width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',

            data: res,
            placeholder: "Pilih Paket/Layanan",
            // dropdownParent: $("#modal-data"),
        });
        $(`#sel-package${param}`).val("").trigger("change");

    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}


async function loadKaryawan(param) {
    try {

        const response = await $.ajax({
            url: baseURL + "/home/loadGlobal",
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



        $(`#sel-karyawan${param}`).select2({
            // theme: "bootstrap-5",
            // width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',

            data: res,
            placeholder: "Pilih Karyawan",
            // dropdownParent: $("#modal-data"),
        });
        $(`#sel-karyawan${param}`).val("").trigger("change");

    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}

async function loadPet(param) {
    try {

        const response = await $.ajax({
            url: baseURL + "/home/loadGlobal",
            type: "POST",
            data: JSON.stringify({ tableName: 'pets' }),
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
                id: item.pet_name,
                text: item.pet_name,
            };
        });



        $(`#sel-petitem${param}`).select2({
            // theme: "bootstrap-5",
            // width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',

            data: res,
            placeholder: "Pilih Pet",
            // dropdownParent: $("#modal-data"),
        });
        $(`#sel-petitem${param}`).val("").trigger("change");

    } catch (error) {
        sweetAlert("Oops...", error.responseText, "error");
    }
}

$(".bukti").hide()
$('.tipe-bayar').on('change', function () {
    if ($(this).val() == 1) {
        $(".bukti").hide()
    } else if ($(this).val() == 2) {
        $(".bukti").show()
    }
});

function loadLastTransaction(selectedDates) {
    valuedate = selectedDates
    $.ajax({
        url: baseURL + "/home/loadGlobal",
        type: "POST",
        data: JSON.stringify({ tableName: 'transactions', where: "DATE(transaction_start_date) = '" + selectedDates + "' AND transaction_end_date IS NULL" }),
        beforeSend: function () {
            // Swal.fire({
            //     title: "Loading",
            //     text: "Please wait...",
            // });
        },
        complete: function () { },
        success: function (response) {
            // Handle response sukses
            el = `<option value="09:00-09:30">09:00-09:30</option>
            <option value="10:00-10:30">10:00-10:30</option>
            <option value="11:00-11:30">11:00-11:30</option>
            <option value="12:00-12:30">12:00-12:30</option>
            <option value="13:00-13:30">13:00-13:30</option>
            <option value="14:00-14:30">14:00-14:30</option>
            <option value="15:00-15:30">15:00-15:30</option>
            <option value="16:00-16:30">16:00-16:00</option>
            <option value="17:00-17:30">17:00-17:30</option>
           `
            $('.tipebayar').html(el)

            if (response.code == 0) {
                arrtime = response.data
                for (let index = 0; index < arrtime.length; index++) {
                    datetimeString = arrtime[index].transaction_start_date;
                    var timeWithoutSeconds = datetimeString.split(' ')[1].split(':').slice(0, 2).join(':');
                    if (timeWithoutSeconds === '09:00') {
                        $('.tipebayar option[value="09:00-09:30"]').remove();
                    } else if (timeWithoutSeconds === '10:00') {
                        $('.tipebayar option[value="10:00-10:30"]').remove();
                    } else if (timeWithoutSeconds === '11:00') {
                        $('.tipebayar option[value="11:00-11:30"]').remove();
                    } else if (timeWithoutSeconds === '12:00') {
                        $('.tipebayar option[value="12:00-12:30"]').remove();
                    } else if (timeWithoutSeconds === '13:00') {
                        $('.tipebayar option[value="13:00-13:30"]').remove();
                    } else if (timeWithoutSeconds === '14:00') {
                        $('.tipebayar option[value="14:00-14:30"]').remove();
                    } else if (timeWithoutSeconds === '15:00') {
                        $('.tipebayar option[value="15:00-15:30"]').remove();
                    } else if (timeWithoutSeconds === '16:00') {
                        $('.tipebayar option[value="16:00-16:30"]').remove();
                    } else if (timeWithoutSeconds === '17:00') {
                        $('.tipebayar option[value="17:00-17:30"]').remove();
                    }
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
