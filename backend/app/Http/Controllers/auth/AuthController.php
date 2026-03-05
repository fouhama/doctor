<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
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

    public  function logout (Request $request){
        $user = $request->user();

        // Delete all tokens for this user
        if ($user) {
            $user->tokens()->delete();
        }

        // Logout from session guard as well
        Auth::guard('web')->logout();
        
        // Invalidate and regenerate session
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logout success'
        ])->cookie('auth_token', '', -1, '/', null, false, true)
            ->cookie('laravel-session', '', -1, '/', null, false, true);
    }

    public  function checkToken(Request $request){
        $user = $request->user();
        
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        
        return response()->json($user);
    }

}
