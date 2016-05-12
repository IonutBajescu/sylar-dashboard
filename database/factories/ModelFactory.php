<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use Carbon\Carbon;

$factory->define(App\User::class, function ($faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
    ];
});

$factory->define(App\Incident::class, function ($faker) {
   return [
       'impact' => rand(1, 9),
       'url' => $faker->url,
       'ip' => $faker->ipv4,
       'attempted_at' => Carbon::instance($faker->dateTime)->year(2016)
   ];
});