<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\products;
use App\Models\products_history;
use Symfony\Component\Process\Process;

class updatePrice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update-price';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'command that change the prise of the products each day';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $products = products::all();
        foreach ($products as $product) {
            $url = $product->url;
            $process = new Process(["node", base_path("nodeScrapers/nodeScraper.js"), $url]);
            $process->run();
            $newInfo = json_decode($process->getOutput());
            $priceDiff =  (($newInfo->data->productPrice - $product->curentPrice) / $product->curentPrice) * 100 ;
            $product->update(["curentPrice" => $newInfo->data->productPrice]);
            products_history::created([
                "product_id" => $product->id,
                "CurrentPrice"=>$newInfo->data->productPrice,
                "priceDiff" => $priceDiff
            ]);
        }
    }
}
