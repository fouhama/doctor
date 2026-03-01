<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function login(Request $request){
        $validation = $request->validate([
            "email" => "required|email",
            "password" => "required|string"
        ], [
            "email.required" => "L'email est requis",
            "email.email" => "L'email doit être valide",
            "password.required" => "Le mot de passe est requis",
            "password.string" => "Le mot de passe doit être une chaîne de caractères"
        ]);
 
        if(!Auth::attempt(['email' => $validation['email'], 'password' => $validation['password']])){
            return response()->json([
                "message" => "Identifiants invalides" 
            ], 401);
        }

        $user = User::where('email', $validation['email'])->first();

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json(
            ['message' => "Login success"]
        )->cookie('auth_token', $token, 60 *24 , '/', null,false, true);
    }
}
