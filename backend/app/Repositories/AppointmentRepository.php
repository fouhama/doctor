<?php
namespace App\Repositories;

use App\Models\Appointment;
use Carbon\Carbon;

class AppointmentRepository {

    public function  create($request): Appointment{
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

    public function getAll($limit, $page = 1, $search=null, $dateAppointment){
      
        $query = Appointment::query();

        // search
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('first_name', 'like', "%$search%")
                    ->orWhere('last_name', 'like', "%$search%")
                    ->orWhere('phone', 'like', "%$search%")
                    ->orWhere('id_card', 'like', "%$search%");
            });
        }

        // filter date
        if ($dateAppointment && $dateAppointment != "all") {
            $date = Carbon::now()->subDays($dateAppointment);
            $query->where('date', '>=', $date);
        }
        $total = $query->count();

        $pages = ceil($total / $limit);

        $skip = $total > $limit ? ($page - 1) * $limit : 0;

        $appointments = $query
            ->orderByDesc('date')
            ->orderBy('time')
            ->skip($skip)
            ->take($limit)
            ->get();

        return [
            'data' => $appointments,
            'total' => $total,
            'pages' => $pages,
            'current_page' => $page
        ];
    }


}