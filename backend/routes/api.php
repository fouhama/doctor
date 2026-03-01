<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\auth\loginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login',  [loginController::class, 'login']);

Route::post('/add-appointment', [AppointmentController::class , 'store']);
Route::post('/get-time-exist', [AppointmentController::class , 'getTime']);