<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BerkasProgram extends Model
{
    use HasFactory;
    // protected $table = "obat";
    protected $fillable = ['nta','judul','s_text','nta_tujuan','file_path','type_doc','status'];
}
