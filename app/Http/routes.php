<?php

use App\Http\Middleware\Api;

$app->routeMiddleware([
    'api' => Api::class
]);

$app->group(['prefix' => 'api/incidents', 'namespace' => 'App\Http\Controllers', 'middleware' => 'api'], function() use($app) {
    $app->get('/', 'IncidentsController@index');
    $app->get('/{incident}', 'IncidentsController@show');
    $app->post('/', 'IncidentsController@store');
});

