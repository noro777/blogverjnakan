<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class SearchController extends Controller
{
    public function __invoke(Request $req){
        $s = $req->validate([
            's' => 'required',
        ]);
        $tables = array(
            'students',
            'employers',
            'guests',
            'institutions',
            'lecturers',
            'partners'
        );
        $x = [];
        foreach($tables as $table){
            array_push($x,DB::table($table)->where('name', 'LIKE', '%' .$s['s']. '%')->get());
        }
        // dd($x);
        return view('leyout.app',compact('x'));
    }
}
