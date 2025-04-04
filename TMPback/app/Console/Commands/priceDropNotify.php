<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\products;
use App\Models\products_history;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\priceDropMail;

class priceDropNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'price-drop-notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $products = products::all();
        foreach ($products as $product) {
            $last_product_hestory = $product->hestory()->latest();
            $productOwner = User::find($product->user_id);
            if ($product->curentPrice < $last_product_hestory->CurrentPrice) {
                $detailes = [
                    "userName" => $productOwner->name,
                    "productName" => $product->name,
                    "platformName" => $product->name,
                    "productPlatform" => $product->platformName,
                    "newPrice"=>$product->curentPrice,
                    "priceDiff"=>$last_product_hestory->priceDiff,
                    "url"=>$product->id
                ];
                Mail::to($productOwner->email)->send(new priceDropMail($detailes));
            }
        }
    }
}
