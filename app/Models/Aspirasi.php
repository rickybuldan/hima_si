<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aspirasi extends Model
{
    use HasFactory;
    // protected $table = "obat";
    protected $fillable = ['nta','nama','judul','s_text','status','email'];
}
