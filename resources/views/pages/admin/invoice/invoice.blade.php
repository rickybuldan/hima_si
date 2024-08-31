<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cuba admin is super flexible, powerful, clean &amp; modern responsive bootstrap 5 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Cuba admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{asset('template/admin2/assets/images/favicon.png')}}" type="image/x-icon">
    <link rel="shortcut icon" href="{{asset('template/admin2/assets/images/favicon.png')}}" type="image/x-icon">
    <title>Invoice</title>
    <!-- Themify icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('template/admin2/assets/css/vendors/themify.css')}}">
    <!-- Google font-->
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap" rel="stylesheet">
    <style type="text/css">
      body{
        font-family: Rubik, sans-serif;
        display: block;
        color: #000248;
      }
    </style>
    <link rel="stylesheet" type="text/css" href="{{ asset('template/admin2/assets/css/vendors/sweetalert2.css') }}">
     @foreach ($cssFiles as $file)
        <link rel="stylesheet" href="{{ $file }}">
    @endforeach
  </head>
  <body>
    <table style="width:1160px;margin:0 auto;">
      <tbody> 
        <tr> 
          <td> 
            <table style="width: 100%;background-image: url({{asset('template/admin2/assets/images/email-template/invoice-3/bg-0.png')}});background-position: center;background-size: cover;background-repeat: no-repeat; border-radius: 10px;">
              <tbody>
                <tr>
                  <td style="padding: 30px 0;">
                  KIMI SHOP
                  {{-- <img src="{{asset('template/admin2/assets/images/logo/logo.png')}}" alt="logo"> --}}
                    <address style="color: #52526C;opacity: 0.8; width: 36%; margin-top: 10px; font-style:normal;"><span style="font-size: 18px; line-height: 1.5; font-weight: 500;">
                        Bandung,
                        Indonesia</span></address>
                  </td>
                  <td style="text-align:end; padding:30px 30px 30px 0;"><span class="invoice_status" style="display:block; line-height: 1.5; font-size:18px; color: #fff; font-weight:700;">Invoice</span><span class="no_invoice" style="display:block; line-height: 1.5; font-size:18px; color: #fff; font-weight:500;">Receipt #1923195</span><span class="date_invoice" style="display:block; line-height: 1.5; font-size:18px; color: #fff; font-weight:500;">May 02, 2023</span></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr> 
          <td> 
            <table style="width: 100%;">
              <tbody> 
                <tr style="padding: 28px 0; display: flex; justify-content: space-between;"> 
                  <td><span style="color: #52526C; font-size: 16px; font-weight: 500; opacity: 0.8;">DETAIL CUSTOMER</span>
                    <h4 class="customer_name" style="font-weight:600; margin: 12px 0 5px 0; font-size: 18px; color: rgba(115, 102, 255, 1);">Brooklyn Simmons</h4><span class="customer_address" style="width: 100%; display:block; line-height: 1.5; color: #52526C; font-size: 18px; font-weight: 400;opacity: 0.8;">2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span><span class="customer_phone" style="line-height:2; color: #52526C; font-size: 18px; font-weight: 400;opacity: 0.8;">Phone : (239) 555-0108</span>
                  </td>
                  {{-- <td><span style="color: #52526C;font-size: 16px; font-weight: 500;opacity: 0.8;">SHIPPING ADDRESS</span>
                    <h4 style="font-weight:600; margin: 12px 0 5px 0; font-size: 18px; color: rgba(115, 102, 255, 1);">Brooklyn Simmons</h4><span style="display:block; line-height: 1.5; color: #52526C; font-size: 18px; font-weight: 400;opacity: 0.8;">2972 Westheimer Rd. Santa Ana, Illinois 85486 </span><span style="line-height:2; color: #52526C; font-size: 18px; font-weight: 400;opacity: 0.8;">Phone : (219) 555-0114</span>
                  </td> --}}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr> 
          <td> <span style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 100%;margin-bottom:20px;">         </span></td>
        </tr>
        <tr> 
          <td> 
            <table style="width: 100%;border-spacing:0;">
              <thead> 
                <tr style="background: #7366FF;"> 
                  <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 18px; font-weight: 600;" id="type_trans">Tanggal</span></th>
                  <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 18px; font-weight: 600;">Pets</span></th>
                  <th style="padding: 18px 15px;text-align: center;border-inline: 3px solid #fff;"><span style="color: #fff; font-size: 18px; font-weight: 600;">Jumlah Hari</span></th>
                  <th style="padding: 18px 15px;text-align: center;border-right: 3px solid #fff;"><span style="color: #fff; font-size: 18px; font-weight: 600;">Harga</span></th>
                  <th style="padding: 18px 15px;text-align: center"><span style="color: #fff; font-size: 18px; font-weight: 600;">Subtotal</span></th>
                </tr>
              </thead>
              <tbody id="detail_invoice">
                <tr>
                  <td style="padding: 18px 15px 18px 0;display:flex;align-items: center;gap: 10px; border-bottom:1px solid #52526C4D;"><span style="width: 3px; height: 37px; background-color:#7366FF;"></span>
                    <ul style="padding: 0;margin: 0;list-style: none;">
                      <li> 
                        <h4 style="font-weight:600; margin:4px 0px; font-size: 18px; color: #000248;">HTML Admin template</h4><span style="color: #52526C;opacity: 0.8; font-size: 16px;">Regular License</span>
                      </li>
                    </ul>
                  </td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">2</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$35</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$70</span></td>
                </tr>
                <tr>
                  <td style="padding: 18px 15px 18px 0;display:flex;align-items: center;gap: 10px; border-bottom:1px solid #52526C4D;"><span style="width: 3px; height: 37px; background-color:#FFAE46;"></span>
                    <ul style="padding: 0;margin: 0;list-style: none;">
                      <li> 
                        <h4 style="font-weight:600; margin:4px 0px; font-size: 18px; color: #000248;">React Admin template</h4><span style="color: #52526C;opacity: 0.8; font-size: 16px;">Regular License</span>
                      </li>
                    </ul>
                  </td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">1</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$25</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$50</span></td>
                </tr>
                <tr>
                  <td style="padding: 18px 15px 18px 0;display:flex;align-items: center;gap: 10px; border-bottom:1px solid #52526C4D;"><span style="width: 3px; height: 37px; background-color:#54BA4A;"></span>
                    <ul style="padding: 0;margin: 0;list-style: none;">
                      <li> 
                        <h4 style="font-weight:600; margin:4px 0px; font-size: 18px; color: #000248;">Laravel Admin template</h4><span style="color: #52526C;opacity: 0.8; font-size: 16px;">Regular License</span>
                      </li>
                    </ul>
                  </td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">2</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$30</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$60</span></td>
                </tr>
                <tr>
                  <td style="padding: 18px 15px 18px 0;display:flex;align-items: center;gap: 10px;border-bottom:1px solid #52526C4D;"><span style="width: 3px; height: 37px; background-color:#FF3364;"></span>
                    <ul style="padding: 0;margin: 0;list-style: none;">
                      <li> 
                        <h4 style="font-weight:600; margin:4px 0px; font-size: 18px; color: #000248;">Vuejs Admin template</h4><span style="color: #52526C;opacity: 0.8; font-size: 16px;">Regular License</span>
                      </li>
                    </ul>
                  </td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"><span style="color: #52526C;opacity: 0.8;">3</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$20</span></td>
                  <td style="padding: 18px 15px; width: 12%; text-align: center; border-bottom:1px solid #52526C4D;"> <span style="color: #52526C;opacity: 0.8;">$60</span></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr> 
          <td>
            <table style="width:100%;">
              <tbody>
                <tr style="display:flex; justify-content: space-between; margin:28px 0; align-items: center;">
                  <td > <span style="color: #52526C; font-size: 16px; font-weight: 500;opacity: 0.8; font-weight: 600;">KIMI SHOP</span>
                    <h4 style="font-weight:600; margin: 12px 0 5px 0; font-size: 18px; color:#7366FF;">Grooming & Penitipan</h4><span style=" display:block; line-height: 1.5; color: #52526C; font-size: 18px; font-weight: 400;">Terimakasih telah melakukan pemesanan di KIMI SHOP.</span><span class="no_invoice" style="line-height:1.6; color: #52526C; font-size: 18px; font-weight: 400;">Code : LEF098756</span>
                  </td>
                  <td><span style="color: #52526C;font-size: 16px; font-weight: 500;opacity: 0.8; font-weight: 600;">TOTAL HARGA</span>
                    <h4 class="v-total-amount" style="font-weight:600; margin: 12px 0 5px 0; font-size: 26px;color:#7366FF;">$175.00</h4><span style="color: #52526C; font-size: 16px; font-weight: 400; line-height: 1.5;">      </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr> 
          <td> <span style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 100%;margin-bottom:24px;"></span></td>
        </tr>
        <tr>
          <td> <span style="display: flex; justify-content: end; gap: 15px;"><a style="background: rgba(115, 102, 255, 1); color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;" href="#!" onclick="window.print();">Print Invoice<i class="icon-arrow-right" style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><a style="background: rgba(115, 102, 255, 0.1);color: rgba(115, 102, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;" href="../template/invoice-3.html" download="">Download<i class="icon-arrow-right" style="font-size:13px;font-weight:bold; margin-left: 10px;">             </i></a></span></td>
        </tr>
      </tbody>
    </table>

    <script>
        @foreach ($varJs as $varjsi)
            {!! $varjsi !!}
        @endforeach
    </script>
    <script src="{{ asset('template/admin/vendor/sweetalert2/dist/sweetalert2.min.js') }}" aria-hidden="true"></script>
    <script src="{{asset('template/admin2/assets/js/jquery.min.js')}}"></script>
    @foreach ($javascriptFiles as $file)
        <script src="{{ $file }}"></script>
    @endforeach
  </body>
</html>