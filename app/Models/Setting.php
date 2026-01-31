<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
        'type',
        'group_name',
    ];

    public static function get(string $key, $default = null)
    {
        $setting = static::where('key', $key)->first();
        
        if (!$setting) {
            return $default;
        }

        return match ($setting->type) {
            'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
            'number' => is_numeric($setting->value) ? (float) $setting->value : $default,
            'json' => json_decode($setting->value, true) ?? $default,
            default => $setting->value,
        };
    }

    public static function set(string $key, $value, string $type = 'string', ?string $group = null): static
    {
        $setting = static::firstOrNew(['key' => $key]);
        $setting->value = $type === 'json' ? json_encode($value) : (string) $value;
        $setting->type = $type;
        if ($group) {
            $setting->group_name = $group;
        }
        $setting->save();
        
        return $setting;
    }

    public function scopeGroup($query, string $group)
    {
        return $query->where('group_name', $group);
    }
}
