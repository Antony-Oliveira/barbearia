<?php
namespace Database\Factories;

use App\Models\Booking;
use App\Models\User;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::find(1);

        // Crie entre 1 e 3 serviços para esta reserva
        $services = Service::factory(rand(1, 3))->create();

        return [
            'user_id' => $user->id,
            'date' => $this->faker->dateTimeBetween()->format('d/m/Y'),
            'time' => $this->faker->time('H:i'),
            'note' => $this->faker->sentence,
            'total_price' => 0.0, // Você pode ajustar isso dependendo da sua lógica
        ];
    }

    /**
     * Indique que a reserva deve ter serviços associados.
     *
     */
    public function configure()
    {
        return $this->afterCreating(function (Booking $booking) {
            // Vincule os serviços criados anteriormente à reserva
            $booking->services()->attach(Service::pluck('id')->random());

        });
    }
}

?>
