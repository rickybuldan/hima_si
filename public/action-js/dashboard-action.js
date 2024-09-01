

// let dtpr;

$(document).ready(function () {
  getProfit();
  getThisMonth();
});

function getThisMonth() {
  var namaBulan = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  // Mendapatkan indeks bulan saat ini (dimulai dari 0)
  var bulanSaatIni = new Date().getMonth();

  // Mendapatkan nama bulan dalam bahasa Indonesia
  var namaBulanSaatIni = namaBulan[bulanSaatIni];
  $("#this-month").html(namaBulanSaatIni)
}

function updateChartProfit(data) {

  let pemasukanData = data.filter(item => item.transaction_category === 'Pemasukan');
  let pengeluaranData = data.filter(item => item.transaction_category === 'Pengeluaran');
  let saldoData = data.filter(item => item.transaction_category === 'Saldo');

  // Ambil nilai total_price untuk setiap kategori
  let totalPemasukan = pemasukanData.length > 0 ? pemasukanData[0]['total_price'] : 0;
  let totalPengeluaran = pengeluaranData.length > 0 ? pengeluaranData[0]['total_price'] : 0;
  let totalSaldo = saldoData.length > 0 ? saldoData[0]['total_price'] : 0;

  // Hitung total profit
  let TotalProfit = totalPemasukan - totalPengeluaran;

  // Siapkan data untuk chart
  let chartData = {
    labels: ["Pemasukan", "Pengeluaran", "Saldo"],
    series: [totalPemasukan, totalPengeluaran, totalSaldo]
  };

  // Format harga
  let formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(TotalProfit);

  // Opsi untuk chart
  var optionsprofit = {
    labels: chartData.labels,
    series: chartData.series,
    chart: {
      type: "donut",
      height: 300,
    },
    dataLabels: {
      enabled: false, // Aktifkan dataLabels untuk format
      // formatter: function (val) {
      //   return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val);
      // }
    },
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Rubik, sans-serif",
      fontWeight: 500,
      labels: {
        colors: ["var(--chart-text-color)"],
      },
      markers: {
        width: 6,
        height: 6,
      },
      itemMargin: {
        horizontal: 7,
        vertical: 0,
      },
    },
    stroke: {
      width: 10,
      colors: ["var(--light2)"],
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "83%",
          labels: {
            show: true,
            name: {
              offsetY: 4,
            },
            total: {
              show: true,
              fontSize: "20px",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 500,
              label: formattedPrice,
              formatter: () => "Total Saldo",
            },
          },
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
    colors: ["#54BA4A", "#FF5733", "#FFA941"], // Warna untuk donut
    responsive: [
      {
        breakpoint: 1630,
        options: {
          chart: {
            height: 360,
          },
        },
      },
      {
        breakpoint: 1584,
        options: {
          chart: {
            height: 400,
          },
        },
      },
      {
        breakpoint: 1473,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 1425,
        options: {
          chart: {
            height: 270,
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 320,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };

  // Render chart
  var chartprofit = new ApexCharts(document.querySelector("#profitmonthly"), optionsprofit);
  chartprofit.render();
}


function updateChartTransaction(data) {

  // let Monday = data.filter(item => item.day_of_week === 'Monday');
  // let Tuesday = data.filter(item => item.day_of_week === 'Tuesday');
  // let Wednesday = data.filter(item => item.day_of_week === 'Wednesday');
  // let Thursday = data.filter(item => item.day_of_week === 'Thursday');
  // let Friday = data.filter(item => item.day_of_week === 'Friday');
  // let Saturday = data.filter(item => item.day_of_week === 'Saturday');
  // let Sunday = data.filter(item => item.day_of_week === 'Sunday');


  var resultSuccess = data.map(function (item) {
    return item.total_checkin;
  });

  var resultFailed = data.map(function (item) {
    return item.total_checkout;
  });

  var maxTransactionCount = 0;
  $.each(data, function (index, item) {
    if (item.transaction_count > maxTransactionCount) {
      maxTransactionCount = item.transaction_count;
    }
  });
  if (maxTransactionCount > 10) {
    maxLabel = maxTransactionCount
  } else {
    maxLabel = 25;
  }
  var optionsvisitor = {
    series: [
      {
        name: "Checkin",
        data: resultSuccess,
      },
      {
        name: "Checkout",
        data: resultFailed,
      },
    ],
    chart: {
      type: "bar",
      height: 270,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#1FD1B6", "#F73164"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        style: {
          fontFamily: "Rubik, sans-serif",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: maxLabel,
      tickAmount: 5,
      tickPlacement: "between",
      labels: {
        style: {
          fontFamily: "Rubik, sans-serif",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Rubik, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      labels: {
        colors: "var(--chart-text-color)",
      },
      markers: {
        width: 6,
        height: 6,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1366,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "80%",
            },
          },
          grid: {
            padding: {
              right: 0,
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
            },
          },
          grid: {
            padding: {
              right: 5,
            },
          },
        },
      },
    ],
  };

  var chartvisitor = new ApexCharts(
    document.querySelector("#visitor-chart"),
    optionsvisitor
  );
  chartvisitor.render();

  // chartprofit.updateOptions(optionsprofit);
  // chartprofit.updateSeries(chartData.series);
}



function getProfit() {
  $.ajax({
    url: baseURL + "/getOverviewProfit",
    type: "POST",
    data: JSON.stringify({ tableName: 'transactions' }),
    dataType: "json",
    contentType: "application/json",
    beforeSend: function () {

    },
    complete: function () { },
    success: function (response) {
      // Handle response sukses
      if (response.code == 0) {
        updateChartProfit(response.data)
        getTransaction();
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

function getTransaction() {
  $.ajax({
    url: baseURL + "/getOverviewTransaction",
    type: "POST",
    data: JSON.stringify({ tableName: 'transactions' }),
    dataType: "json",
    contentType: "application/json",
    beforeSend: function () {

    },
    complete: function () { },
    success: function (response) {
      // Handle response sukses
      if (response.code == 0) {
        updateChartTransaction(response.data)
        getListView();
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


function getListView() {
  dtview = $("#table-list").DataTable({
    ajax: {
      url: baseURL + "/getOverviewLastTransaction",
      type: "POST",
      data: {
        param_type: "VIEW",
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
      { data: "no_transaction" },
      { data: "created_at" },

      { data: "pet_name" },
      { data: "name" },
      { data: "status" },

    ],
    rowGroup: {
      dataSrc: 'no_transaction'
    },

    columnDefs: [

      {
        mRender: function (data, type, row) {

          return row.no_transaction;
        },
        visible: false,
        targets: 1,
        className: "text-center",
      },

      {
        mRender: function (data, type, row) {
          $rowData = ``
          // if (row.transaction_type == "GR"){
          //     $rowData =`<span class="badge rounded-pill badge-primary">Grooming</span>`
          // }
          // if (row.transaction_type == "PN"){
          //     $rowData =`<span class="badge rounded-pill badge-success">Penitipan</span>`
          // }

          if (row.updated_at) {
            $rowData = `<span class="badge rounded-pill badge-primary">${row.updated_at}</span>`
          }

          if (row.status == 10) {
            $rowData += `<span class="badge rounded-pill badge-primary">Selesai</span>`
          }
          if (row.status == 20) {
            $rowData += `<span class="badge rounded-pill badge-warning">Booked/Paid</span>`
          }
          if (row.status == 30) {
            $rowData += `<span class="badge rounded-pill badge-info">Proses</span>`
          }
          if (row.status == 40) {
            $rowData += `<span class="badge rounded-pill badge-danger">Unpaid</span>`
          }
          if (row.status == 50) {
            $rowData += `<span class="badge rounded-pill badge-secondary">Cancel</span>`
          }
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

    },
    initComplete: function () {

    },
  });
}