<?php

namespace App\Http\Request\Login\Partner;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
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
            'institution_name'=>'required|string',
            'director_name'=>'required|string',
            'phone'=>'required',
            'email' => ['required', 'string', 'email', 'max:255', 'unique:students','unique:employers','unique:guests','unique:institutions','unique:lecturers','unique:partners'],
            'address'=>'required',
            'type'=>'required',
            'purpose'=>'required',
            'password'=>'required'
        ];
    }
}
