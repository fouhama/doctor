<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use App\Repositories\AppointmentRepository;
use Illuminate\Http\Request;

class AppointmentContoller extends Controller
{

    private $appoitment;
    function __construct(AppointmentRepository $appointment){

        $this->appoitment = $appointment;

    }
     function showAppintments (){
        $appointments = $this->appoitment->getAll();
        return response()->json($appointments);
     }
}
