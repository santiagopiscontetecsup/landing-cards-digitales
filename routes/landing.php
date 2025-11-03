<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Spa\LandingController;

// Página principal
Route::get('/', [LandingController::class, 'home'])->name('landing.home');
