<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UangKas extends Model
{
    use HasFactory;
    // protected $table = "obat";
    protected $fillable = ['nta','nominal','file_path','status'];
}
