<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppiontmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'date' => 'required|date',
            'firstName' => 'required|string|max:255',
            'idCart' => 'required|string',
            'lastName' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'time' => 'required|date_format:H:i',
        ];
    }

    public function messages(): array
    {
        return [
            'date.required' => 'La date est obligatoire.',
            'date.date' => 'La date doit être une date valide.',
            'firstName.required' => 'Le prénom est obligatoire.',
            'firstName.string' => 'Le prénom doit être une chaîne de caractères.',
            'firstName.max' => 'Le prénom ne doit pas dépasser 255 caractères.',
            'idCart.required' => 'L\'identifiant de carte est obligatoire.',
            'idCart.string' => 'L\'identifiant de carte doit être une chaîne de caractères.',
            'lastName.required' => 'Le nom est obligatoire.',
            'lastName.string' => 'Le nom doit être une chaîne de caractères.',
            'lastName.max' => 'Le nom ne doit pas dépasser 255 caractères.',
            'phone.required' => 'Le téléphone est obligatoire.',
            'phone.string' => 'Le téléphone doit être une chaîne de caractères.',
            'phone.max' => 'Le téléphone ne doit pas dépasser 20 caractères.',
            'time.required' => 'L\'heure est obligatoire.',
            'time.date_format' => 'L\'heure doit être au format HH:mm.',
        ];
    }
}
