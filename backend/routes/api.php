<?php

use App\Http\Controllers\AppointmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/add-appointment', [AppointmentController::class , 'store']);