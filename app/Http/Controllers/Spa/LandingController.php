<?php

namespace App\Http\Controllers\Spa;

use App\Http\Controllers\Controller;
use Inertia\Inertia;


class LandingController extends Controller
{

    // Página principal
    public function home()
    {
        return Inertia::render('landing/index');
    }
}
