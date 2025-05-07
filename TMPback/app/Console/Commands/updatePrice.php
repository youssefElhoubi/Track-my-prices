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
            $price = floatval(str_replace(",","",$newInfo->data->holePrice));
            $curentPrice = floatval(str_replace(",","",$product->curentPrice));
            // dd($curentPrice);
            $priceDiff =  (($price - $curentPrice) / $curentPrice) * 100 ;
            $product->update(["curentPrice" => $price]);
            products_history::create([
                "product_id" => $product->id,
                "CurrentPrice"=>$newInfo->data->holePrice,
                "priceDiff" => $priceDiff
            ]);
            echo "done \n";
        }
    }
}
