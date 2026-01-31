<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $todayRevenue = Order::whereDate('created_at', today())
            ->where('payment_status', 'paid')
            ->sum('total');

        $monthRevenue = Order::whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->where('payment_status', 'paid')
            ->sum('total');

        $pendingOrders = Order::where('status', 'pending')->count();

        $lowStockProducts = Product::where('is_active', true)
            ->whereColumn('stock_quantity', '<=', 'low_stock_threshold')
            ->count();

        return [
            Stat::make('Doanh thu hôm nay', number_format($todayRevenue) . ' đ')
                ->description('Đơn hàng đã thanh toán')
                ->descriptionIcon('heroicon-m-currency-dollar')
                ->color('success'),

            Stat::make('Doanh thu tháng này', number_format($monthRevenue) . ' đ')
                ->description('Tháng ' . now()->month . '/' . now()->year)
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('primary'),

            Stat::make('Đơn hàng chờ xử lý', $pendingOrders)
                ->description('Cần xác nhận')
                ->descriptionIcon('heroicon-m-clock')
                ->color($pendingOrders > 0 ? 'warning' : 'success'),

            Stat::make('Sản phẩm sắp hết hàng', $lowStockProducts)
                ->description('Cần nhập thêm')
                ->descriptionIcon('heroicon-m-exclamation-triangle')
                ->color($lowStockProducts > 0 ? 'danger' : 'success'),
        ];
    }
}
