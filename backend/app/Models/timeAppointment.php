<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class timeAppointment extends Model
{
    protected $fillable = [
        'time',
        'number_person_in_time',
        'status'
    ];
}
