<?php

namespace App\Helpers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
class Master
{
    const INFO_SUCCESS = 'Success';
    const INFO_FAILED = 'Failed';
    const CODE_SUCCESS = '0';
    const CODE_FAILED = '0';
    public function Results($data, $asJson = false)
    {
        $defaultData = [
            'guid' => 0,
            'code' => self::CODE_SUCCESS,
            'info' => self::INFO_SUCCESS,
            'data' => null,
        ];
        

        if ($data !== null) {
            $data = Master::checkArray($data);
            $setArr = array_merge($defaultData, $data);
        } else {
            $setArr = $defaultData;
        }

        if ($asJson) {
            return response()->json($setArr);
        } else {
            return $setArr; // Jika Anda ingin mengembalikan dalam bentuk array
        }
    }

    public function Authenticated($user_id)
    {

        $saved = DB::select("SELECT * FROM users WHERE id={$user_id}");

        if (count($saved) > 0 && Auth::check()) {
            $status=[
                'code'=> self::CODE_SUCCESS,
                'info'=> self::INFO_SUCCESS,
            ];
        }else{
            $status=[
                'code'=>  '1',
                'info'=> self::INFO_FAILED,
            ];
        }

        return $status;
    }

    public function AuthenticatedView($route)
    {
        $role_id =$this->getSession('role_id');
        
        $route   ='/'.$route;
        
        if(Auth::check()){
            $route = str_replace('//', '/', $route);
            
            if($route == "/"){
                
                $status=[
                    'code'=> self::CODE_SUCCESS,
                    'info'=> self::INFO_SUCCESS,
                ];
                
                return $status;
            }
            
            $saved = DB::select("SELECT * FROM menus_access ma LEFT JOIN users_access ua ON ma.id = ua.menu_access_id WHERE ua.role_id =".$role_id. " AND ma.url ='".$route."'");
          
            
            if (!empty($saved)) {
                if ($saved[0]->i_view == 1) {
                    $status = [
                        'code' => self::CODE_SUCCESS,
                        'info' => self::INFO_SUCCESS,
                        'data' => $saved
                    ];
                } else if ($saved[0]->i_view == 0) {
                    return abort(403);
                } else {
                    $status = [
                        'code' => '1',
                        'info' => self::INFO_FAILED,
                    ];
                }
            } else {
                if(empty($saved)){
                    return abort(403);
                }
                // Handle the case when no results are found
                $status = [
                    'code' => '1',
                    'info' => self::INFO_FAILED,
                ];
            }
        }else{

            $status=[
                'code'=>  '1',
                'info'=> self::INFO_FAILED,
            ];
        }
        return $status;
    }



    public function checkErrorModel($model){
       
        // $results=[
        //     'code'=> $model ? self::CODE_SUCCESS : self::CODE_FAILED,
        //     'info'=> $model ? self::INFO_SUCCESS : $model->getErrors(),
        //     'data' => $model->toArray(),
        // ];
            
        if (is_array($model)) {
            $code = empty($model) ? self::CODE_FAILED : self::CODE_SUCCESS;
            $info = $code === self::CODE_FAILED ? self::INFO_SUCCESS : null;
            $data = $model;
        }
        else {
            $code = $model ? self::CODE_SUCCESS : self::CODE_FAILED;
            $info = $model ? self::INFO_SUCCESS : $model->getErrors();
            $data = $model->toArray();
        }
        
        $results = [
            'code' => $code,
            'info' => $info,
            'data' => $data,
        ];

        return $results;
    }

    public function checkerrorModelUpdate($model){
       
        // $results=[
        //     'code'=> $model ? self::CODE_SUCCESS : self::CODE_FAILED,
        //     'info'=> $model ? self::INFO_SUCCESS : $model->getErrors(),
        //     'data' => $model->toArray(),
        // ];
            
        if ($model > 0) {
            $code = self::CODE_SUCCESS;
            $info = self::INFO_SUCCESS;
            $data = $model;
        }
        else {
            $code = self::CODE_FAILED;
            $info = $model->getErrors();
            $data = null;
        }

        $results = [
            'code' => $code,
            'info' => $info,
            'data' => $data,
        ];

        return $results;
    }

    public function getSession($param)
    {
        $seskey = "No Auth";

        if (Auth::check()) {
            // Jika otentikasi berhasil, simpan data sesi
            if($param == "user_id"){
                $seskey = Session::get('user_id');
            }else if($param == "name"){
                $seskey = Session::get('name');
            }else if($param == "role_id"){
                $seskey = Session::get('role_id');
            }else if($param == "menu"){
                $seskey = Session::get('menu');
            } 
            else if($param == "nta"){
                $seskey = Session::get('nta');
            } 
        }


        return $seskey;
    }

    protected function checkArray($isData)
    {
        
        if (!isset($isData['guid'])) {
            $isData['guid'] = 0;
        }
        if (!isset($isData['info'])) {
            $isData['info'] = self::INFO_SUCCESS;
        }
        if (!isset($isData['code'])) {
            $isData['code'] = self::CODE_SUCCESS;
        }
        if (!isset($isData['data'])) {
            $isData['data'] = null;
        }
        return $isData;
    }

}

