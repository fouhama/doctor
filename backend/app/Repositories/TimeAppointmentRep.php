<?php

namespace App\Repositories;

use App\Models\timeAppointment as ModelsTimeAppointment;

class TimeAppointmentRep
{

    public function addTime($request)
    {
        $time =  ModelsTimeAppointment::create([
            'time' => $request->time,
            'number_person_in_time' => $request->countPerson,
        ]);

        return $time;
    }
}
