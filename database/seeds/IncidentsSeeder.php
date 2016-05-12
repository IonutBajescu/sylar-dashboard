<?php

use App\Incident;
use Illuminate\Database\Seeder;

class IncidentsSeeder extends Seeder
{
    public function run()
    {
        factory(Incident::class, 5)->create();
    }
}