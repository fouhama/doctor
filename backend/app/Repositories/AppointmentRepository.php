<?php
namespace App\Repositories;

use App\Models\Appointment;

class AppointmentRepository {
    
    function  create($request): Appointment{
       $appoitment = Appointment::create([
            'first_name' => $request['firstName'],
            'last_name' => $request['lastName'],
            'phone' => $request['phone'],
            'id_card' => $request['idCart'],
            'date' => date("Y-m-d", strtotime($request['date'])),
            'time' => $request['time'],
        ]);
        return $appoitment;
    }

    function getAll(){

        $appoitments = Appointment::all();

        return $appoitments;
    }

}