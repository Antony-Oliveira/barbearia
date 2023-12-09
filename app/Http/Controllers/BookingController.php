<?php

namespace App\Http\Controllers;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{

    public function availabilityCheck(Request $req){
        $booking = Booking::where('date', $req->input('date') )->pluck('time')->toArray();
        return response()->json(['unavaiableTimes' => $booking]);
    }
}
