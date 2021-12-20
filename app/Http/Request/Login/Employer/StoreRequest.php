<?php

namespace App\Http\Request\Login\Employer;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:students','unique:employers','unique:guests','unique:institutions','unique:lecturers','unique:partners'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
