<?php

use App\Http\Controllers\BookingController;
use App\Models\Booking;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    Auth::loginUsingId(rand(1, User::count()));
    $services = App\Models\Service::query()->take(6)->get();
    return inertia('Welcome', ['services' => $services]);
});

Route::get('/booking', function () {
    return inertia('Booking');
})->name('booking');

Route::get('/account', function () {
    $user = auth()->user();
    $bookings = $user->bookings;
    $bookings = Booking::with('services')->find($bookings->pluck('id'));

    return inertia('Account', ['user' => $user, 'bookings' => $bookings]);
})->middleware('auth');

Route::get('/login', function () {
    return redirect('/');
})->name('login');


Route::post('/availability-check', [BookingController::class, 'availabilityCheck'])->name('booking.availability.check');

Route::prefix('/admin')->group(function () {
    Route::get('/managerbookings', function () {
        $booking = Booking::with('user')->get();
        return inertia('Admin/ManagerBookings', ['bookings' => $booking]);
    })->name('admin.bookings');

    Route::get('/dashboard', function () {
        return inertia('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::get('/profile', function () {
        return inertia('Admin/Profile');
    })->name('admin.profile');
    Route::delete('/booking-destroy/{id}', [BookingController::class, 'destroy'])->name('booking.destroy');
    Route::put('/booking-update/{id}', [BookingController::class, 'update'])->name('booking.update');
});

