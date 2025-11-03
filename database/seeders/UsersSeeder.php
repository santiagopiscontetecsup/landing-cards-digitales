<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            'moises@example.com',
            'santiago@example.com',
            'alfred@example.com',
            'ribeyro@example.com',
            'patrick@example.com',
        ];

        foreach ($users as $email) {
            User::updateOrCreate(
                ['email' => $email],
                [
                    'name' => ucfirst(explode('@', $email)[0]),
                    'password' => Hash::make('password'), 
                ]
            );
        }
    }
}
