<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('uang_kas', function (Blueprint $table) {
            $table->id();
            
            $table->string('nta');
            $table->float('nominal');
            $table->string('file_path');
            $table->timestamps();
            
            
            // $table->foreign('user_id')
            // ->references('id')
            // ->on('users')
            // ->onDelete('cascade'); //

            // $table->foreign('menu_access_id')
            //     ->references('id')
            //     ->on('menus_access')
            //     ->onDelete('cascade'); // Mengatur foreign key ke tabel menus_access
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('uang_kas');
    }
};
