<?php

namespace App\Http\Controllers;

use App\Models\Aspirasi;
use App\Models\BerkasProgram;
use App\Models\House;
use App\Models\Package;

use App\Models\Pet;
use App\Models\Presensi;
use App\Models\SettingAspirasi;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\UangKas;
use App\Models\UserAccess;
use App\Models\UsersRole;
use Illuminate\Http\Request;
use App\Helpers\Master;
use App\Models\User;
use App\Models\MenusAccess;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class JsonDataController extends Controller
{
    //

    // for list menu side bar
    public function getAccessMenu(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->getContent());
                    $status = [];
                    $role_id = $MasterClass->getSession('role_id');
                    $saved = DB::select("SELECT * FROM menus_access ma LEFT JOIN users_access ua ON ma.id = ua.menu_access_id WHERE ua.role_id =" . $role_id . " AND ua.i_view=1");

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    //USER ROLE
    public function getRoleMenuAccess(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    $data = json_decode($request->getContent());

                    DB::beginTransaction();

                    $status = [];
                    $sql = "SELECT * FROM users_roles ur LEFT JOIN users_access ua ON ur.id = ua.role_id WHERE ua.menu_access_id=" . $data->id;
                    // dd($sql);
                    $saved = DB::select($sql);
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function getRole(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    $data = json_decode($request->getContent());


                    DB::beginTransaction();

                    $status = [];

                    $saved = DB::select('SELECT * FROM users_roles ur');
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function saveRole(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    $dataArray = json_decode($request->getContent());

                    DB::beginTransaction();
                    $status = [];

                    // Simpan informasi metode ke dalam database AccessUser


                    $saved = UsersRole::updateOrCreate(
                        [
                            'id' => $dataArray->rid,
                        ], // Kolom dan nilai kriteria
                        [
                            'role_name' => $dataArray->role,
                        ] // Kolom yang akan diisi
                    );
                    // dd($saved);
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function getAccessRole(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $dataArray = $request->get('param_type');

                    $status = [];
                    $sql = 'SELECT ma.*  FROM menus_access ma WHERE ma.param_type ="' . $dataArray . '"';

                    $saved = DB::select($sql);
                    // $saved = MenusAccess::leftJoin()where('param_type', 'VIEW')->get();

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function saveUserAccessRole(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    $dataArray = json_decode($request->getContent());

                    DB::beginTransaction();
                    $status = [];
                    // Simpan informasi metode ke dalam database AccessUser
                    foreach ($dataArray as $data) {

                        $saved = UserAccess::updateOrCreate(
                            [
                                'menu_access_id' => $data->mid,
                                'role_id' => $data->rid, // Gantilah $roleId dengan nilai yang sesuai
                            ], // Kolom dan nilai kriteria
                            [
                                'i_view' => $data->is_active,
                            ] // Kolom yang akan diisi
                        );
                        $saved = $MasterClass->checkErrorModel($saved);

                        $status = $saved;

                        if ($status['code'] != $MasterClass::CODE_SUCCESS) {
                            break;
                        }

                    }

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function updateMenuAccessName(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    $mid = $request->get('mid');
                    $headmenu = $request->get('nhead');
                    $menuname = $request->get('nmenu');

                    DB::beginTransaction();
                    // dd($mid);

                    $status = [];
                    // Simpan informasi metode ke dalam database AccessUser

                    $saved = MenusAccess::where([
                        'id' => $mid,
                    ])->update([
                                'header_menu' => $headmenu,
                                'menu_name' => $menuname,
                            ]);


                    $saved = $MasterClass->checkerrorModelUpdate($saved);

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

                    // dd($results);

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    //USER LIST
    public function getUserList(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();


                    $status = [];

                    $query = "
                        SELECT
                            us.*,
                            ur.role_name
                        FROM
                            users us
                            LEFT JOIN users_roles ur ON us.role_id = ur.id
                        
                    ";

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function saveUser(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->getContent());


                    $image = $request->file('image');
                    $imagePath = null;

                    if ($image) {
                        $imagePath = $image->store('images', 'public');
                    }

                    $status = [];
                    if ($data->password) {

                        $saved = User::updateOrCreate(
                            [
                                'id' => $data->id,
                            ],
                            [
                                'name' => $data->name,
                                'email' => $data->email,
                                'role_id' => $data->role_id,
                                'password' => Hash::make($data->password),
                                'is_active' => $data->is_active,
                                'nta' => $data->nta ?? null,
                                'file_path' => $imagePath,
                                'tahun_angkatan' => $data->tahun_angkatan ?? null,
                                'kelas' => $data->kelas ?? null,
                            ] // Kolom yang akan diisi
                        );

                    } else {

                        $saved = User::updateOrCreate(
                            [
                                'id' => $data->id,
                            ],
                            [
                                'name' => $data->name,
                                'email' => $data->email,
                                'role_id' => $data->role_id,
                                'is_active' => $data->is_active,
                            ] // Kolom yang akan diisi
                        );

                    }

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function deleteUser(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->getContent());

                    $status = [];

                    $saved = User::where('id', $data->id)->delete();

                    $saved = $MasterClass->checkerrorModelUpdate($saved);

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function deleteGlobal(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->getContent());

                    $status = [];

                    $saved = DB::table($data->tableName)->where('id', $data->id)->delete();

                    $saved = $MasterClass->checkerrorModelUpdate($saved);

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function loadGlobal(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
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
                    
                    if ($data->tableName == 'berkas_programs') {
                        $query = "
                        SELECT
                            uk.*,
                            us.name
                        FROM

                    " . $data->tableName;
                        $query = $query . "  uk";
                        $query = $query . "  LEFT JOIN users us ON us.nta = uk.nta";
                    }
                    if ($data->tableName == 'presensis') {
                        $query = "
                        SELECT
                            uk.*,
                            us.name
                        FROM

                    " . $data->tableName;
                        $query = $query . "  uk";
                        $query = $query . "  LEFT JOIN users us ON us.nta = uk.nta";
                    }
                    if ($data->tableName == 'uang_kas') {
                        $query = "
                        SELECT
                            uk.*,
                            us.name
                        FROM

                    " . $data->tableName;
                        $query = $query . "  uk";
                        $query = $query . "  LEFT JOIN users us ON us.nta = uk.nta";
                    }
                    // dd($query);
                    if ($data->tableName == 'users') {
                        $query = "
                        SELECT
                            us.*,
                            ur.role_name
                        FROM

                    " . $data->tableName;
                        $query = $query . "  us";
                        $query = $query . "  LEFT JOIN users_roles ur ON us.role_id = ur.id";
                    }
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    // dashboard
    public function getOverviewProfit(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();


                    $status = [];


                    $query = "
                        SELECT
                            'Pemasukan' AS transaction_category,
                            COALESCE ( COUNT(*), 0 ) AS transaction_count,
                            COALESCE ( SUM( nominal ), 0 ) AS total_price 
                        FROM
                            uang_kas 
                        WHERE
                            expense = false  UNION ALL
                        SELECT
                            'Pengeluaran' AS transaction_category,
                            COALESCE ( COUNT(*), 0 ) AS transaction_count,
                            COALESCE ( SUM( nominal ), 0 ) AS total_price 
                        FROM
                            uang_kas 
                        WHERE
                            expense = true  UNION ALL
                        SELECT 
                            'Saldo' AS transaction_category,
                                COALESCE ( COUNT(*), 0 ) AS transaction_count,
                            COALESCE(SUM(CASE WHEN expense = false THEN nominal ELSE 0 END), 0) -
                            COALESCE(SUM(CASE WHEN expense = true THEN nominal ELSE 0 END), 0) AS total_price
                        FROM
                            uang_kas;
                    ";




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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function getOverviewTransaction(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();


                    $status = [];


                    // $query = "
                    // SELECT
                    //     all_days.day_of_week,
                    //     COALESCE(COUNT(transactions.id), 0) AS transaction_count,
                    //     COALESCE(SUM(transactions.price_total), 0) AS total_price
                    // FROM
                    //     (
                    //         SELECT 'Monday' AS day_of_week, 1 AS day_order
                    //         UNION SELECT 'Tuesday', 2
                    //         UNION SELECT 'Wednesday', 3
                    //         UNION SELECT 'Thursday', 4
                    //         UNION SELECT 'Friday', 5
                    //         UNION SELECT 'Saturday', 6
                    //         UNION SELECT 'Sunday', 7
                    //     ) AS all_days
                    // LEFT JOIN
                    //     transactions ON DAYNAME(transactions.transaction_start_date) = all_days.day_of_week
                    //     AND MONTH(transactions.transaction_start_date) = MONTH(CURRENT_DATE)
                    //     AND YEAR(transactions.transaction_start_date) = YEAR(CURRENT_DATE)
                    // GROUP BY
                    //     all_days.day_of_week, all_days.day_order
                    // ORDER BY
                    //     all_days.day_order;
                    // ";
                    $query = "
                        SELECT
                            all_days.day_of_week,
                            COALESCE(COUNT(CASE WHEN presensis.status = 10 THEN presensis.id END), 0) AS total_checkin,
                            COALESCE(COUNT(CASE WHEN presensis.status = 20 THEN presensis.id END), 0) AS total_checkout
                        FROM
                            (
                            SELECT
                                'Monday' AS day_of_week,
                                1 AS day_order UNION
                            SELECT
                                'Tuesday',
                                2 UNION
                            SELECT
                                'Wednesday',
                                3 UNION
                            SELECT
                                'Thursday',
                                4 UNION
                            SELECT
                                'Friday',
                                5 UNION
                            SELECT
                                'Saturday',
                                6 UNION
                            SELECT
                                'Sunday',
                                7 
                            ) AS all_days
                        LEFT JOIN presensis ON DAYNAME(presensis.checkin) = all_days.day_of_week
                            AND MONTH(presensis.checkin) = MONTH(CURRENT_DATE)
                            AND YEAR(presensis.checkin) = YEAR(CURRENT_DATE)
                        GROUP BY
                            all_days.day_of_week,
                            all_days.day_order
                        ORDER BY
                            all_days.day_order;

                    ";



                    $saved = DB::select($query);
                    $saved = $MasterClass->checkErrorModel($saved);

                    // $response = [
                    //     [
                    //         'name' => 'Transaksi Success',
                    //         'data' => array_map(function ($item) {
                    //             return [
                    //                 'day_of_week' => $item->day_of_week,
                    //                 'count' => $item->success_count,
                    //                 'total' => $item->success_total,
                    //             ];
                    //         }, $saved['data']),
                    //     ],
                    //     [
                    //         'name' => 'Transaksi Failed',
                    //         'data' => array_map(function ($item) {
                    //             return [
                    //                 'day_of_week' => $item->day_of_week,
                    //                 'count' => $item->failed_count,
                    //                 'total' => $item->failed_total,
                    //             ];
                    //         }, $saved[]),
                    //     ],
                    // ];
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function getOverviewLastTransaction(Request $request)
    {

        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();


                    $status = [];

                    $query = "
                    SELECT
                        t.*,
                        u.name,
                        td.pet_name
                    FROM
                        transactions t
                        LEFT JOIN transaction_details td ON td.transaction_id = t.id
                        LEFT JOIN users u ON u.id = td.karyawan_id
                    WHERE t.`status` = 10 AND t.transaction_type = 'GR'
                    ORDER BY t.updated_at DESC
                    ";

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function savePengurus(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $image = $request->file('image');
                    $imagePath = null;
                    $data = json_decode($request->input('data'));
                    if ($image) {
                        $imagePath = $image->store('images', 'public');
                    }else{
                        if($data->id){
                            $berkasProgram = User::find($data->id);
                      
                            if (!$imagePath && $berkasProgram) {
                                $imagePath = $berkasProgram->file_path ?? null;
                            }
                        }
                    }                   

                    $status = [];
                    if ($data->password) {
                        
                        $saved = User::updateOrCreate(
                            [
                                'id' => $data->id,
                            ],
                            [
                                'name' => $data->name,
                                'email' => $data->email,
                                'role_id' => $data->role_id,
                                // 'password' => Hash::make($data->password),
                                'is_active' => $data->is_active,
                                'nta' => $data->nta,
                                'file_path' => $imagePath,
                                'tahun_angkatan' => $data->tahun_angkatan,
                                'kelas' => $data->kelas,
                            ] // Kolom yang akan diisi
                        );

                    } else {
                        $saved = User::updateOrCreate(
                            [
                                'id' => $data->id,
                            ],
                            [
                                'name' => $data->name,
                                'email' => $data->email,
                                'role_id' => $data->role_id,
                                'is_active' => $data->is_active,
                                'file_path' => $imagePath ?? $data->file_path,
                                'tahun_angkatan' => $data->tahun_angkatan,
                                'kelas' => $data->kelas,
                            ] // Kolom yang akan diisi
                        );

                    }

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function saveAspirasi(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function saveBerkasProgram(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->input('data'));

                    $status = [];
                    $filePath = null;

                    if ($request->hasFile('file')) {
                        $file = $request->file('file');
                        $fileName = time().'_'.$file->getClientOriginalName();
                        $filePath = $file->storeAs('uploads/berkas', $fileName, 'public');
                        $filePath = '/storage/' . $filePath;
                    }else{
                        if($data->id){
                            $berkasProgram = BerkasProgram::find($data->id);
                            if (!$filePath && $berkasProgram) {
                                $filePath = $berkasProgram->file_path;
                            }
                        }
                    }
                    // dd($data);
                    $saved = BerkasProgram::updateOrCreate(
                        [
                            'id' => $data->id,
                        ],
                        [
                            'nta' => $data->nta,
                            'nta_tujuan' => $data->tujuan,
                            'type_doc' => $data->type_doc,
                            'judul' => $data->judul,
                            'file_path' => $filePath,
                            
                            's_text' => $data->isi,
                            'status' => $data->status,
                        ]
                    );

                    $saved = $MasterClass->checkErrorModel($saved);
    
                    // } else {
                    //     $results = [
                    //         'code' => '104',
                    //         'info' => "File upload failed",
                    //     ];
                    //     return $MasterClass->Results($results);
                    // }

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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function saveUangKas(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->input('data'));

                    $status = [];

                    $image = $request->file('image');
                    $imagePath = null;

                    if ($image) {
                        $imagePath = $image->store('images', 'public');
                    }
                    else{
                        if($data->id){
                            $berkasProgram = UangKas::find($data->id);
                            if (!$imagePath && $berkasProgram) {
                                $imagePath = $berkasProgram->file_path;
                            }
                        }
                    }

                    $saved = UangKas::updateOrCreate(
                        [
                            'id' => $data->id,
                        ],
                        [
                            'nominal' => $data->nominal,
                            'nta' => $data->nta,
                            'file_path' => $imagePath,
                            'status' => $data->status,
                            'expense' => $data->expense

                        ] 
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

    public function savePresensi(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->input('data'));

                    $status = [];
                    $currentTime = now();
                
                    $alreadySavedToday = Presensi::whereDate('checkin', '=', $currentTime->toDateString())
                    ->where('nta', $data->nta)
                    ->first();

                    if ($data->status == 10) {
                        if ($alreadySavedToday) {
                            $results = [
                                'code' => 1,
                                'info' => "Kamu sudah checkin hari ini.",
                                'data' => []
                            ];
                            return $MasterClass->Results($results);
                        } else {
                            $createdRecord = Presensi::create([
                                'nta' => $data->nta,
                                'deskripsi_tugas' => $data->deskripsi_tugas,
                                'lokasi' => $data->lokasi,
                                'status' => $data->status,
                                'checkin' => $currentTime,
                                'checkout' => null,
                            ]);
                            $saved = $MasterClass->checkErrorModel($createdRecord);
                        }
                    } else{

                        if ($alreadySavedToday) {

                            $presensi = $alreadySavedToday;
                            if($presensi->status == 10){
                                $checkinTime = new \DateTime($presensi->checkin);
                                $interval = $checkinTime->diff($currentTime);
                               
                                if ($interval->h >= 3) {
                                    $updatedRecord = $presensi->update([
                                        'checkout' => $currentTime,
                                        'status' => $data->status,
                                        'lokasi' => $data->lokasi,
                                    ]);
                                    $saved = $MasterClass->checkerrorModelUpdate($updatedRecord);
                                } else {
                                    $results = [
                                        'code' => 1,
                                        'info' => "Checkout dapat dilakukan minimal 3 jam setelah checkin.",
                                        'data' => []
                                    ];
                                    return $MasterClass->Results($results);
                                }
                            }else{
                                $updatedRecord = $presensi->update([
                                    'checkout' => $currentTime,
                                    'status' => $data->status,
                                    'lokasi' => $data->lokasi,
                                ]);
                                $saved = $MasterClass->checkerrorModelUpdate($updatedRecord);
                            }
                           
                        } else {
                            $results = [
                                'code' => 1,
                                'info' => "Checkin record tidak ditemukan untuk update checkout.",
                                'data' => []
                            ];
                            return $MasterClass->Results($results);
                        }
                    } 


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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }
    public function setAspirasi(Request $request)
    {
        $MasterClass = new Master();

        $checkAuth = $MasterClass->Authenticated($MasterClass->getSession('user_id'));

        if ($checkAuth['code'] == $MasterClass::CODE_SUCCESS) {
            try {
                if ($request->isMethod('post')) {

                    DB::beginTransaction();

                    $data = json_decode($request->input('data'));

                    $status = [];

                    $data->id = 1;
                    $saved = SettingAspirasi::updateOrCreate(
                        [
                            'id' => $data->id,
                        ],
                        [
                            'isopen' => $data->isopen,

                        ] 
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
        } else {

            $results = [
                'code' => '403',
                'info' => "Unauthorized",
            ];

        }

        return $MasterClass->Results($results);

    }

}


