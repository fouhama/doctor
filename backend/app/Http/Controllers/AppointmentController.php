<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppiontmentRequest;
use App\Repositories\AppointmentRepository;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    private $appointmentRep;
    public function __construct(AppointmentRepository $appointmentRep)
    {
        $this->appointmentRep = $appointmentRep;
    }
    public function store(AppiontmentRequest $request)
    {
        try {
            $appointment = $this->appointmentRep->create($request->all());
            return response()->json([
            'success' => true,
            'message' => 'Appointment created successfully',
            'data' => $appointment,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
            'success' => false,
            'message' => 'Failed to create appointment',
            'error' => $e->getMessage(),
            ], 400);
        }
    }
}
