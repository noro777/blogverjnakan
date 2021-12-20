<?php

namespace App\Http\Request\Login\Guest;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:students','unique:employers','unique:guests','unique:institutions','unique:lecturers','unique:partners'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
