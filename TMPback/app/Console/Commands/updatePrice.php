<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\products;

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
        
    }
}
