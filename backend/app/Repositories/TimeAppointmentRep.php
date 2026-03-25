<?php

namespace App\Repositories;

use App\Models\timeAppointment as ModelsTimeAppointment;

class TimeAppointmentRep
{

    public function addTime($request)
    {
        $time =  ModelsTimeAppointment::create([
            'time' => $request->time,
            'number_person_in_time' => $request->person,
        ]);

        return $time;
    }

    public function getTimes(){
        $times = ModelsTimeAppointment::orderBy("time")->get(["id", "time", 'number_person_in_time' , "status" ]);
        return $times;
    }
}
