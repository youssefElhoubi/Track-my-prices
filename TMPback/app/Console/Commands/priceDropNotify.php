<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\products;
use App\Models\products_history;
use PhpParser\Node\Stmt\Foreach_;

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
            if ($product->curentPrice < $last_product_hestory->CurrentPrice) {
            }
        }
    }
}
