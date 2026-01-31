<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('order_number')
                    ->required()
                    ->maxLength(50),
                Forms\Components\TextInput::make('customer_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('customer_email')
                    ->email()
                    ->maxLength(255),
                Forms\Components\TextInput::make('customer_phone')
                    ->tel()
                    ->required()
                    ->maxLength(20),
                Forms\Components\Textarea::make('shipping_address')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('shipping_ward')
                    ->maxLength(100),
                Forms\Components\TextInput::make('shipping_district')
                    ->maxLength(100),
                Forms\Components\TextInput::make('shipping_city')
                    ->required()
                    ->maxLength(100),
                Forms\Components\TextInput::make('shipping_postcode')
                    ->maxLength(20),
                Forms\Components\Textarea::make('billing_address')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('billing_ward')
                    ->maxLength(100),
                Forms\Components\TextInput::make('billing_district')
                    ->maxLength(100),
                Forms\Components\TextInput::make('billing_city')
                    ->maxLength(100),
                Forms\Components\TextInput::make('billing_postcode')
                    ->maxLength(20),
                Forms\Components\TextInput::make('subtotal')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('shipping_fee')
                    ->required()
                    ->numeric()
                    ->default(0.00),
                Forms\Components\TextInput::make('tax')
                    ->required()
                    ->numeric()
                    ->default(0.00),
                Forms\Components\TextInput::make('discount')
                    ->required()
                    ->numeric()
                    ->default(0.00),
                Forms\Components\TextInput::make('total')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('status')
                    ->required(),
                Forms\Components\TextInput::make('payment_status')
                    ->required(),
                Forms\Components\TextInput::make('payment_method')
                    ->required(),
                Forms\Components\Textarea::make('notes')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('admin_notes')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('tracking_number')
                    ->maxLength(100),
                Forms\Components\DateTimePicker::make('shipped_at'),
                Forms\Components\DateTimePicker::make('delivered_at'),
                Forms\Components\DateTimePicker::make('cancelled_at'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('order_number')
                    ->searchable(),
                Tables\Columns\TextColumn::make('customer_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('customer_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('customer_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('shipping_ward')
                    ->searchable(),
                Tables\Columns\TextColumn::make('shipping_district')
                    ->searchable(),
                Tables\Columns\TextColumn::make('shipping_city')
                    ->searchable(),
                Tables\Columns\TextColumn::make('shipping_postcode')
                    ->searchable(),
                Tables\Columns\TextColumn::make('billing_ward')
                    ->searchable(),
                Tables\Columns\TextColumn::make('billing_district')
                    ->searchable(),
                Tables\Columns\TextColumn::make('billing_city')
                    ->searchable(),
                Tables\Columns\TextColumn::make('billing_postcode')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subtotal')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('shipping_fee')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('tax')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('discount')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('payment_status'),
                Tables\Columns\TextColumn::make('payment_method'),
                Tables\Columns\TextColumn::make('tracking_number')
                    ->searchable(),
                Tables\Columns\TextColumn::make('shipped_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('delivered_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('cancelled_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
