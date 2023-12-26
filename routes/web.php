<?php

use App\Http\Controllers\BookingController;
use App\Models\Booking;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    Auth::loginUsingId(rand(1, User::count()));
    $services = App\Models\Service::query()->take(6)->get();
    return inertia('Welcome', ['services' => $services]);
});

Route::get('/booking', function () {
    $services = Service::all();
    return inertia('Booking', ['services' => $services]);
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
        $bookings = Booking::with('user')
            ->orderBy('date')
            ->orderBy('time')
            ->get();
        return inertia('Admin/ManagerBookings', ['bookings' => $bookings]);
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


Route::post('/revenue/day', function (Request $req) {

    $booking = App\Models\Booking::where('date', $req->input('day'));
    $revenue = $booking->sum('total_price');
    return response()->json(['revenue' => $revenue, 'clientCount' => $booking->count()]);
})->name('revenue.day');

Route::post('/revenue/month', function (Request $request) {
    try {
        $month = $request->input('date');

        $bookings = Booking::whereYear('date', '=', substr($month, 0, 4))
            ->whereMonth('date', '=', substr($month, 5, 2))
            ->get();

        $totalRevenue = $bookings->sum('total_price');
        $clientsCounter = $bookings->count();

        return response()->json(['revenue' => $totalRevenue, 'clientCount' => $clientsCounter]);
    } catch (Exception $e) {
        return response()->json(['erro' => $e->getMessage()]);
    }
})->name('revenue.month');
