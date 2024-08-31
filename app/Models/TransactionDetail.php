<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class TransactionDetail extends Model
{
    use HasFactory;
    // protected $table = "pengadaan";
    protected $fillable = ['transaction_id','package_id','karyawan_id','pet_name','pet_type','house_id'];

}


