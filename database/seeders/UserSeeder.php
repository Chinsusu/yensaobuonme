<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@yensao.vn',
            'password' => 'Password123!',
            'role' => 'admin',
            'is_active' => true,
        ]);

        User::create([
            'name' => 'Editor',
            'email' => 'editor@yensao.vn',
            'password' => 'Password123!',
            'role' => 'editor',
            'is_active' => true,
        ]);
    }
}
