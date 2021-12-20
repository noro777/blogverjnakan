<?php

namespace Database\Seeders;

use App\Models\Login\Employer;
use App\Models\Login\Guest;
use App\Models\Login\Institution;
use App\Models\Login\Lecturer;
use App\Models\Login\Partner;
use App\Models\Login\Student;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create('App\Article');
        for($i = 0; $i < 500; $i++) {
            Partner::create([
                'name' => $faker->sentence(),
                'email' => $faker->unique()->safeEmail(),
                'password' => Hash::make('123123123'), // password
            ]);
        }
        // \App\Models\User::factory(10)->create();
    }
}
