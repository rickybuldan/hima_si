<?php

namespace App\Http\Controllers;

use App\Helpers\Master;
use App\Models\Aspirasi;
use App\Models\Pengadaan;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{

    public function home(Request $request)
    {

        $javascriptFiles = [
            asset('action-js/global/global2-action.js'),
            // asset('action-js/generate/generate-action.js'),
            // asset('action-js/masterdata/house-action.js'),
        ];

        $cssFiles = [
            // asset('css/main.css'),
            // asset('css/custom.css'),
        ];
        $userId = Auth::id();
        $baseURL = url('/');
        $varJs = [
            'const baseURL = "' . $baseURL . '"',
            'const uid = "' . $userId . '"',
        ];


        $data = [
            'javascriptFiles' => $javascriptFiles,
            'cssFiles' => $cssFiles,
            'varJs' => $varJs,
            'title' => "Home",
            'subtitle' => "Index",
            // Menambahkan base URL ke dalam array
        ];

        return view('home')
            ->with($data);

    }
    public function loadGlobal(Request $request)
    {

        $MasterClass = new Master();


        try {
            if ($request->isMethod('post')) {

                DB::beginTransaction();


                $status = [];

                $data = json_decode($request->getContent());

                $query = "
                        SELECT
                            *
                        FROM

                    " . $data->tableName;

                $whereClause = isset($data->where) ? " WHERE " . $data->where : "";

                if ($whereClause) {
                    $query = $query . " WHERE " . $data->where;
                }

                $saved = DB::select($query);
                $saved = $MasterClass->checkErrorModel($saved);

                $status = $saved;

                // if($status['code'] == $MasterClass::CODE_SUCCESS){
                //     DB::commit();
                // }else{
                //     DB::rollBack();
                // }

                $results = [
                    'code' => $status['code'],
                    'info' => $status['info'],
                    'data' => $status['data'],
                ];



            } else {
                $results = [
                    'code' => '103',
                    'info' => "Method Failed",
                ];
            }
        } catch (\Exception $e) {
            // Roll back the transaction in case of an exception
            $results = [
                'code' => '102',
                'info' => $e->getMessage(),
            ];

        }



        return $MasterClass->Results($results);

    }

    public function saveTransaction(Request $request)
    {

        $MasterClass = new Master();


        try {
            if ($request->isMethod('post')) {

                DB::beginTransaction();

                $data = json_decode($request->input('data'));

                $status = [];


                $saved = Aspirasi::updateOrCreate(
                    [
                        'id' => $data->id,
                    ],
                    [
                        'nama' => $data->nama,
                        'judul' => $data->judul,
                        'nta' => $data->nta,
                        's_text' => $data->isi,
                        'status' => $data->status,

                    ] // Kolom yang akan diisi
                );


                $saved = $MasterClass->checkErrorModel($saved);

                $status = $saved;

                if ($status['code'] == $MasterClass::CODE_SUCCESS) {
                    DB::commit();
                } else {
                    DB::rollBack();
                }

                $results = [
                    'code' => $status['code'],
                    'info' => $status['info'],
                    'data' => $status['data'],
                ];
            } else {
                $results = [
                    'code' => '103',
                    'info' => "Method Failed",
                ];
            }
        } catch (\Exception $e) {
            // Roll back the transaction in case of an exception
            $results = [
                'code' => '102',
                'info' => $e->getMessage(),
            ];

        }



        return $MasterClass->Results($results);

    }



}



