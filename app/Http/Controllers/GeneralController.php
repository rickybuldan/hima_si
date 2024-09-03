<?php

namespace App\Http\Controllers;

use App\Helpers\Master;
use App\Models\Pengadaan;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    //

    public function based(Request $request){
        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());
        
        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){
            $roled = $MasterClass->getSession('role_id');
            if($roled != 6){
                return redirect('/aspirasi');
            }
            return redirect('/dashboard');
        }else{
            return redirect('/home');
        }
    }
    public function dashboard(Request $request){
        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());
        
        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){
           
            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                asset('action-js/dashboard-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
            ];


            $menuData = $checkAuth['data'][0];
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.dashboard')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }
    
    public function userlist(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/user/userlist-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.users.userlist')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function pengurus(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/pengurus/penguruslist-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const ntaid  = '. $MasterClass->getSession('nta'),
                'const roleid  = '. $MasterClass->getSession('role_id'),
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.pengurus.penguruslist')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function userrole(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());
        
        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){
        

            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                asset('action-js/user/userrole-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
            ];

            $menuData = $checkAuth['data'][0];
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                // Menambahkan base URL ke dalam array
            ];

            return view('pages.admin.users.userrole')
            ->with($data);
            
        }else{
            return redirect('/login');
        }
    
        
    }

    public function report(Request $request){
        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());
        
        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){
           
            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                asset('action-js/report/report-action.js'),
                // asset('action-js/generate/generate-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const ntaid  = '. $MasterClass->getSession('nta'),
                'const roleid  = '. $MasterClass->getSession('role_id'),
            ];

            $menuData = $checkAuth['data'][0];
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.report.report')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function aspirasi(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/aspirasi/aspirasilist-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const roleid  = '. $MasterClass->getSession('role_id'),
                'const ntaid  = '. $MasterClass->getSession('nta')
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.aspirasi.aspirasilist')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function uangKas(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/pengurus/uangkaslist-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const roleid  = '. $MasterClass->getSession('role_id'),
                'const ntaid  = '. $MasterClass->getSession('nta')
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.pengurus.uangkaslist')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function presensi(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/pengurus/presensilist-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];

            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const roleid  = '. $MasterClass->getSession('role_id'),
                'const ntaid  = '. $MasterClass->getSession('nta'),
                
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.pengurus.presensilist')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }

    public function berkasProgram(Request $request){

        $MasterClass = new Master();

        $checkAuth = $MasterClass->AuthenticatedView($request->route()->uri());

        if($checkAuth['code'] == $MasterClass::CODE_SUCCESS){


            $javascriptFiles = [
                asset('action-js/global/global-action.js'),
                // asset('action-js/generate/generate-action.js'),
                asset('action-js/pengurus/berkasprogram-action.js'),
            ];
        
            $cssFiles = [
                // asset('css/main.css'),
                // asset('css/custom.css'),
            ];
            $baseURL = url('/');
            $varJs = [
                'const baseURL = "' . $baseURL . '"',
                'const roleid  = '. $MasterClass->getSession('role_id'),
                'const ntaid  = '. $MasterClass->getSession('nta')
            ];

            $menuData = $checkAuth['data'][0];
    
            $data = [
                'javascriptFiles' => $javascriptFiles,
                'cssFiles' => $cssFiles,
                'varJs'=> $varJs,
                'title' => ucwords(strtolower($menuData->header_menu)),
                'subtitle' => $menuData->menu_name,
                 // Menambahkan base URL ke dalam array
            ];
        
            return view('pages.admin.pengurus.berkasprogram')
                ->with($data);
        }else{
            return redirect('/login');
        }
    }
    
}


