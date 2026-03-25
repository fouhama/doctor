<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/add-appointment', [AppointmentController::class, 'store']);
Route::post('/get-time-exist', [AppointmentController::class, 'getTime']);

Route::post('/login', [AuthenticatedSessionController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);
    Route::get('get-apointments', [AppointmentController::class, 'getAppointments']);
    Route::post('store-time', [AppointmentController::class, 'storeTime']);
    Route::get('get-time-doctor', [AppointmentController::class, 'getTimesDoctor']);

});