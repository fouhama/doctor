<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login',  [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout',  [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/check-token', [AuthController::class,  'checkToken']);
Route::post('/add-appointment', [AppointmentController::class , 'store']);
Route::post('/get-time-exist', [AppointmentController::class , 'getTime']);