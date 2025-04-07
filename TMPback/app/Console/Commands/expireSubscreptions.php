<?php

namespace App\Console\Commands;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class expireSubscreptions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'expire-subscreptions';

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
        $currentDate = Carbon::now();
        $year = $currentDate->year;
        $month = $currentDate->month;
        $day = $currentDate->day;
        $fulldate= "$year-$month-$day" ; 
        $users = User::where("exparation_date","=",$fulldate)->get();
        foreach ($users as $user) {
            $user->exparation_date = "free";
            $user->save();
        }
    }
}
