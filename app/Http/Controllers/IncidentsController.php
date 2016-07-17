<?php

namespace App\Http\Controllers;

use App\Incident;
use Illuminate\Http\Request;

class IncidentsController extends Controller
{
    /**
     * @var Incident
     */
    protected $repo;

    public function __construct(Incident $repo)
    {
        $this->repo = $repo;
    }

    public function index(Request $request)
    {
        return $this->repo->take($request->get('take', 3))->get();
    }

    public function show($id)
    {
        return $this->repo->find($id);
    }

    public function store(Request $request)
    {
        return $this->repo->create($request->only('impact', 'ip', 'url', 'attempted_at'));
    }
}