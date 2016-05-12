<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

class Api
{

    /**
     * @var Auth
     */
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle(Request $request, callable $next)
    {
//        if ($this->auth->guard('authenticate')->guest()) {
//            // don't need auth right now
//        }

        return $next($request);
    }

    public function getApiKeys()
    {
        return [
            env('EXTERNAL_API_KEY') => [
                'allowed' => [
                    'incidents' => ['post']
                ]
            ]
        ];
    }
}