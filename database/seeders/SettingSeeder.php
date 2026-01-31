<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General
            ['key' => 'site_name', 'value' => 'Yến Sào Hòn Nội', 'type' => 'string', 'group_name' => 'general'],
            ['key' => 'site_description', 'value' => 'Chuyên cung cấp yến sào cao cấp từ Khánh Hòa', 'type' => 'string', 'group_name' => 'general'],
            ['key' => 'site_logo', 'value' => null, 'type' => 'string', 'group_name' => 'general'],
            
            // Contact
            ['key' => 'contact_email', 'value' => 'contact@yensao.vn', 'type' => 'string', 'group_name' => 'contact'],
            ['key' => 'contact_phone', 'value' => '0901234567', 'type' => 'string', 'group_name' => 'contact'],
            ['key' => 'contact_address', 'value' => 'Khánh Hòa, Việt Nam', 'type' => 'string', 'group_name' => 'contact'],
            
            // Social
            ['key' => 'facebook_url', 'value' => 'https://facebook.com/', 'type' => 'string', 'group_name' => 'social'],
            ['key' => 'instagram_url', 'value' => 'https://instagram.com/', 'type' => 'string', 'group_name' => 'social'],
            ['key' => 'zalo_phone', 'value' => '0901234567', 'type' => 'string', 'group_name' => 'social'],
            
            // Shipping
            ['key' => 'shipping_fee', 'value' => '30000', 'type' => 'number', 'group_name' => 'shipping'],
            ['key' => 'free_shipping_threshold', 'value' => '500000', 'type' => 'number', 'group_name' => 'shipping'],
            
            // Payment
            ['key' => 'bank_account_name', 'value' => 'NGUYEN VAN A', 'type' => 'string', 'group_name' => 'payment'],
            ['key' => 'bank_account_number', 'value' => '1234567890', 'type' => 'string', 'group_name' => 'payment'],
            ['key' => 'bank_name', 'value' => 'Vietcombank', 'type' => 'string', 'group_name' => 'payment'],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
}
