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
        Schema::create('time_appointments', function (Blueprint $table) {
            $table->id();
            $table->time('time');
            $table->unsignedInteger('number_person_in_time');
            $table->tinyInteger('status')->default(1)->comment('0 => suspended , 1 => active ');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('time_appointments');
    }
};
