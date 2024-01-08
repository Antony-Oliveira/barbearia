<?php

namespace App\Http\Controllers;
use App\Models\Booking;
use App\Models\Service;
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
    public function update(int $id){
        try{
            $booking = Booking::findOrFail($id);
            $booking->isConfirmed = true;
            $booking->save();
            return response()->json(["message" => 'Agendamento Confirmado com Sucesso!']);
        }catch(\Exception $e){
            return response()->json(["error" => 'Erro update booking!', 'message' => $e->getMessage()], 500);
        }

    }

    public function create(Request $req) {
        try {
            $user = auth()->user();
            $services = Service::whereIn('name', $req->input('services'))->get();
            $totalPrice = $services->sum('price');
            $booking = Booking::create([
                'user_id' => $user->id,
                'date' => $req->input('date'),
                'time' => $req->input('time'),
                'total_price' => $totalPrice,
            ]);

            $booking->services()->attach($services);
            return response()->json(['r' => 'ok']);
        } catch (\Exception $e) {
            return response()->json(['N' => $e->getMessage()]);

        }
    }
}
