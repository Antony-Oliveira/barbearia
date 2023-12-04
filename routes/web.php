<?php

use App\Models\Booking;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



Route::get('/', function(){
    Auth::loginUsingId(3);
    $services = App\Models\Service::query()->take(6)->get();
    return inertia('Welcome', ['services' => $services]);
});

Route::get('/booking', function(){
    return inertia('Booking');
})->name('booking');

Route::get('/account', function(){
    $user = auth()->user();
    $bookings = $user->bookings;
    $bookings = Booking::with('services')->find($bookings->pluck('id'));

    return inertia('Account', ['user' => $user, 'bookings' => $bookings]);
})->middleware('auth');


Route::get('/login', function(){
    return redirect('/');
})->name('login');
