<?php

namespace App\Http\Controllers;

use App\Helpers\Master;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{

    public function invoice(Request $request)
    {
        $MasterClass = new Master();
        try {
            if ($request->isMethod('post')) {

                $noinvoice = $request->get('noinvoice');

                DB::beginTransaction();
                // dd($mid);

                $status = [];
                $sql = "SELECT
                            t.*,
                            p.package_name,
                            p.price,
                            p.category,
                            p.`desc`,
                            td.pet_name,
                            td.pet_type,
                            COALESCE ( TIMESTAMPDIFF( DAY, t.transaction_start_date, t.transaction_end_date ), 0 ) AS days_difference,
                            COALESCE (DATE_FORMAT(t.created_at, '%d-%m-%Y %H:%i:%s'),'-') AS formatted_created_at,
                            COALESCE (DATE_FORMAT(t.transaction_start_date, '%d-%m-%Y %H:%i:%s'),'-') AS formatted_start_date,
                            COALESCE (DATE_FORMAT(t.transaction_end_date, '%d-%m-%Y %H:%i:%s'),'-') AS formatted_end_date
                        FROM
                            transactions t
                            LEFT JOIN transaction_details td ON td.transaction_id = t.id
                            LEFT JOIN packages p ON p.id = td.package_id 
                        WHERE
                            t.no_transaction ='" . $noinvoice . "'";

                $saved = DB::select($sql);
                $saved = $MasterClass->checkErrorModel($saved);

                $status = $saved;

                $results = [
                    'code' => $status['code'],
                    'info' => $status['info'],
                    'data' => $status['data'],
                ];

                return $MasterClass->Results($results);

            } else {
                $noinvoice = $request->query('noinvoice');

                $javascriptFiles = [
                    // asset('action-js/global/global-action.js'),
                    // asset('action-js/generate/generate-action.js'),
                    asset('action-js/invoice/invoice-action.js'),
                ];

                $cssFiles = [
                    // asset('css/main.css'),
                    // asset('css/custom.css'),
                ];
                $baseURL = url('/');
                $varJs = [
                    'const baseURL = "' . $baseURL . '"',
                    'const no_invoice = "' . $noinvoice . '"',
                ];


                $data = [
                    'javascriptFiles' => $javascriptFiles,
                    'cssFiles' => $cssFiles,
                    'varJs' => $varJs,
                    'title' => "Invoice",
                    'subtitle' => "Detail Invoice",
                    // Menambahkan base URL ke dalam array
                ];

                return view('pages.admin.invoice.invoice')
                    ->with($data);
            }
        } catch (\Exception $e) {
            // Roll back the transaction in case of an exception
            $results = [
                'code' => '102',
                'info' => $e->getMessage(),
            ];

        }




    }

}
