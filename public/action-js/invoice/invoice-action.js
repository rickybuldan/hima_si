
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

loadInvoice();

function loadInvoice() {

    data = { noinvoice: no_invoice }

    $.ajax({
        url: baseURL + "/invoice",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        beforeSend: function () {
            Swal.fire({
                title: "Loading",
                text: "Please wait...",
                showConfirmButton: false, // Menyembunyikan tombol OK
            });
        },
        complete: function () {
            swal.close();
        },
        success: function (response) {
            console.log(response);

            if (response.code == 0) {
                console.log(response);
                data = response.data
                console.log(data);
                $(".customer_name").text(data[0].customer_name)
                $(".customer_address").text(data[0].address)
                $(".customer_phone").text(data[0].phone)
                $(".no_invoice").text("Invoice No. " + data[0].no_transaction)
                $(".date_invoice").text(data[0].formatted_created_at)
                

                if (data[0].transaction_type == "GR") {
                    $datax = `<span class="badge rounded-pill badge-primary">Grooming</span>-`
                }
                if (data[0].transaction_type == "PN") {
                    $datax = `<span class="badge rounded-pill badge-success">Penitipan</span>-`
                }

                if (data[0].status == 10) {
                    $datax += `<span class="badge rounded-pill badge-primary">Selesai</span>`
                }
                if (data[0].status == 20) {
                    $datax += `<span class="badge rounded-pill badge-warning">Booked/Paid</span>`
                }
                if (data[0].status == 30) {
                    $datax += `<span class="badge rounded-pill badge-info">Proses</span>`
                }
                if (data[0].status == 40) {
                    $datax += `<span class="badge rounded-pill badge-danger">Unpaid</span>`
                }
                if (data[0].status == 50) {
                    $datax += `<span class="badge rounded-pill badge-secondary">Cancel</span>`
                }

                $(".invoice_status").html($datax)
                $(".v-total-amount").html("Rp. "+data[0].price_total)
                $("#detail_invoice").empty()
                datexfpr = data[0].formatted_start_date
                typetrans="Tanggal Penitipan"
                if (data[0].category =='GR'){
                    harivalue = '-'
                    typetrans = "Tanggal Grooming"
                }
                
                $("#type_trans").html(typetrans);
                data.forEach(function (item) {
                    subtot = item.price;
                    if(item.category =='PN'){
                        subtot=parseInt(item.price * item.days_difference)
                        datexfpr = data[0].formatted_start_date+ ' - ' +data[0].formatted_end_date
                        harivalue = item.days_difference +' Hari'
                    }
                    

                    el = `<tr>
                    <td style="padding: 18px 15px; width: 30%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">${datexfpr}</span></td>
                    <td style="padding: 18px 15px 18px 0;display:flex;align-items: center;gap: 10px; border-bottom:1px solid #52526C4D;"><span style="width: 3px; height: 37px; background-color:#7366FF;"></span>
                      <ul style="padding: 0;margin: 0;list-style: none;">
                        <li> 
                          <h4 style="font-weight:600; margin:4px 0px; font-size: 18px; color: #000248;">${item.pet_name}-${item.pet_type}</h4><span style="color: #52526C;opacity: 0.8; font-size: 16px;">${item.package_name}</span>
                        </li>
                      </ul>
                    </td>
                    <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">${harivalue}</span></td>
                    <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">${item.price}</span></td>
                    <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">${subtot}</span></td>
                  </tr>
                  `
                  $("#detail_invoice").append(el)
                });
                
            } else {
                sweetAlert("Oops...", response.info, "error");
                console.log(response.info);
            }
        },
        error: function (xhr, status, error) {
            // Handle error response
            // console.log(xhr.responseText);
            sweetAlert("Oops...", xhr.responseText, "error");
        },
    });
}