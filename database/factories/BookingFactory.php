<?php

namespace Database\Factories;

use App\Models\Booking;
use App\Models\User;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::find(rand(1, User::count()));

        // Crie entre 1 e 3 serviços para esta reserva
        $services = Service::factory(rand(1, 3))->create();

        $times = ['09:00', '09:30', '10:00', '10:30', '13:00', '13:30', '14:00', '14:30'];
        $time = $this->faker->randomElement($times);


        return [
            'user_id' => $user->id,
            'date' => Carbon::create(2023, 12, rand(1, 31)),
            'time' => $time,
            'note' => $this->faker->sentence,
            'total_price' => fake()->randomFloat(2, 10, 200),
        ];
    }

    /**
     * Indique que a reserva deve ter serviços associados.
     *
     */
    public function configure()
    {
        return $this->afterCreating(function (Booking $booking) {
            $user = User::find(1);
            $booking->services()->attach(Service::pluck('id')->random());

        });
    }
}
