<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Repositories\AppointmentRepository;
use App\Repositories\TimeAppointment;
use App\Repositories\TimeAppointmentRep;
use Dflydev\DotAccessData\Data;
use Exception;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
use Symfony\Component\HttpFoundation\JsonResponse;

class AppointmentController extends Controller
{
    private $appointmentRep;
    private $timeAppoint ;
    public function __construct(AppointmentRepository $appointmentRep, TimeAppointmentRep $timeAppointment)
    {
        $this->appointmentRep = $appointmentRep;
        $this->timeAppoint = $timeAppointment;

    }
    public function store(AppointmentRequest $request)
    {
        try {
            $appointment = $this->appointmentRep->create($request->all());
            return response()->json([
            'success' => true,
            'message' => 'Rendez-vous créé avec succès',
            'data' => $appointment,
            ], 201);
        } catch (Exception $e) {
            return response()->json([
            'success' => false,
            'message' => 'Échec de la création du rendez-vous',
            'error' => $e->getMessage(),
            ], 400);
        }
    }

    function storeTime(Request $request){
        $request->validate([
            'time' => "required|string|unique:time_appointments,time",
            "person" => "required|integer"
        ]);

        try {
            $time = $this->timeAppoint->addTime($request);
            return response()->json($time, 201);

        } catch (Exception $th) {
            return  response()->json(["message"=> $th],500);
        }

    }

    function getTime (Request $request){
        return response()->json($request->date);
    }


    function  getAppointments(Request $request) :JsonResponse{
        $page = $request->query('page') ?? 1;
        $limit = $request->query('size') ?? 10;
        $search = $request->query('search') ?? "";
        $dateAppointment = $request->query('dateAppointment') ?? "1";
        $appointments =   $this->appointmentRep->getAll($limit, $page, $search, $dateAppointment);
        return response()->json($appointments);
      
    }
    function addTimeAppoitment(Request $request){
        $request->validate([
            'time' => 'time|required',
            'countPerson' => 'required|intger'
        ]);
        try{
            $time = $this->timeAppoint->addTime($request);
            return response()->json(['success' => true, 'message' => "l'heure a été ajoutée avec succès", 'data'=> $time], 201);
        }catch(Exception $e){
            return  response()->json(['success' => false, 'message'=> "Échec de l'ajout de temps"],500);
        }

    }


    function getTimesDoctor(){
        try{
            $times = $this->timeAppoint->getTimes();
            return response()->json($times);
        }catch(Exception $e){
            return response()->json(["message" => $e->getMessage()], 500);
        }
    }
}
