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

    public function destroy(int $id)
    {
        try {
            $booking = Booking::findOrFail($id);

            $booking->delete();

            return response()->json(['message' => 'Agendamento excluído com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting booking', 'message' => $e->getMessage()], 500);
        }
    }
}
