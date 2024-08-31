<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presensi extends Model
{
    use HasFactory;
    // protected $table = "obat";
    protected $fillable = ['nta','deskripsi_tugas','lokasi','status','checkin','checkout'];
}
