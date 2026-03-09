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

    public function getAll($limit, $page = 1){
        $total = Appointment::count();
        $pages = ceil($total / $limit);
        $skip = ($page - 1) * $limit;
        
        $appointments = Appointment::latest()->skip($skip)->take($limit)->get();

        return [
            'data' => $appointments,
            'total' => $total,
            'pages' => $pages,
            'current_page' => $page
        ];
    }


}