<?php

use App\Http\Controllers\GeneralController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\JsonDataController;
use App\Models\MenusAccess;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GenerateController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/link', function(){
    \Illuminate\Support\Facades\Artisan::call('storage:link');
    echo 'ok';
 });
Route::get('/login', [AuthController::class, 'index'])->name('login');
// Rute untuk melakukan proses login
Route::post('/login', [AuthController::class, 'login']);

Route::get('/sign-up', [AuthController::class, 'signup']);
Route::post('/sign-up', [AuthController::class, 'signup']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/verifyemail', [AuthController::class, 'verifyemail']);

if (config('app.env') == 'local') {
    Route::get('/generateview', [GenerateController::class, 'generateview']);
    Route::get('/gendataview', [GenerateController::class, 'gendataview']);
}

Route::get('/invoice', [InvoiceController::class, 'invoice']);
Route::post('/invoice', [InvoiceController::class, 'invoice']);

Route::get('/home', [HomeController::class, 'home'])->name('home');
Route::post('/home/saveTransaction', [HomeController::class, 'saveTransaction']);
Route::post('/home/loadGlobal', [HomeController::class, 'loadGlobal']);

Route::get('/', [GeneralController::class, 'based']);


Route::get('/done', [JobController::class, 'setStatusDone']);

Route::get('/cancel', [JobController::class, 'setStatusCancel']);

Route::middleware(['auth','auth.session'])->group(function () {
 

    Route::middleware(['role:Superadmin'])->group(function () {
        Route::post('/generate', [GenerateController::class, 'generate'])->name('generate');
    });


    try {
        $allowedRoutes  = MenusAccess::all();
        foreach ($allowedRoutes as $routeData) {
            // Route::middleware(['role:' . $routeData->role])->group(function () use ($routeData) {
                // Anda dapat menggunakan $routeData->id untuk mengidentifikasi setiap entri secara unik
                if ($routeData->param_type == "VIEW"){
                    Route::get($routeData->url, [GeneralController::class, $routeData->method])->name($routeData->name);
                }else{
                    Route::post($routeData->url, [JsonDataController::class, $routeData->method])->name($routeData->name);
                }
            // });
        }
    } catch (Exception $e) {
        echo '*************************************' . PHP_EOL;
        echo 'Error fetching database pages: ' . PHP_EOL;
        echo $e->getMessage() . PHP_EOL;
        echo '*************************************' . PHP_EOL;
    }
});

