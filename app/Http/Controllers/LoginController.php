<?php

namespace App\Http\Controllers;

use App\Models\All;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    public function __invoke(Request $req){

        $tables = array(
            'students',
            'employers',
            'guests',
            'institutions',
            'lecturers',
            'partners'
        );

        $user = $req->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        foreach($tables as $table){
            $u = DB::table($table)->where('email',$user['email'])->first();
            if($u != null){
                // dd($u);
                $u = (array)$u;
                break;
            };
        }

        if(!$u || !Hash::check($user['password'],$u['password'])){
            echo "sxal login kam parol";
            return;
        }

        return $u['category'];


    }
}
