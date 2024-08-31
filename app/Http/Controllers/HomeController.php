<?php

namespace App\Http\Controllers;

use App\Helpers\Master;
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

                $image = $request->file('image');
                $imagePath = null;
                
                if($image){
                    $imagePath = $image->store('images', 'public');
                }

                $nowdate = now();
                $notrx = Transaction::generateNoTransaction($nowdate);
                $createdBy = !empty($data->uid) ? $data->uid : null;
                $transaction = Transaction::create([
                    'customer_name' => $data->name,
                    'transaction_start_date' => $data->date,
                    'transaction_type' => $data->transaction_type,
                    'no_transaction' => $notrx,
                    'address' => $data->address,
                    'created_by' => $createdBy,
                    'phone' => $data->phone,
                    'price_total' => $data->price_total,
                    'bukti' => $imagePath,
                    'status' => 40,
                ]);

                $saved1 = $MasterClass->checkErrorModel($transaction);

                foreach ($data->data_pet as $pet) {
                    $detailTransac = TransactionDetail::create([
                        'transaction_id' => $transaction->id,
                        'package_id' => $pet->package,
                        'pet_name' => $pet->name,
                        'karyawan_id' => $pet->karyawan_id,
                        'pet_type' => $pet->type,
                    ]);

                    $saved2 = $MasterClass->checkErrorModel($detailTransac);
                }

                $status = $saved2;
                

                if ($status['code'] == $MasterClass::CODE_SUCCESS) {
                    DB::commit();
                    
                } else {
                    DB::rollBack();
                }
                $status = $saved1;
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



