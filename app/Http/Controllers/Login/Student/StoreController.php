<?php

namespace App\Http\Controllers\Login\Student;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Request\Login\Student\StoreRequest;
use App\Models\Login\Student;
use Illuminate\Support\Facades\App;



class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $data = [
            'name' => $data['name'],
            'email' => $data['email'],
             'password' => Hash::make($data['password']),
         ];
        Student::create($data);

        // $tiken =
        return redirect()->route('main',App::getLocale());
    }
}
