<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriBerkas extends Model
{
    use HasFactory;
    protected $table = "kategori_berkas";
    protected $fillable = ['nm_kategori'];
}
