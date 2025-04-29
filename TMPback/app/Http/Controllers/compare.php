<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;

class compare extends Controller
{
    public static function compaire(string $title, string $platform)
    {
        // this line was added bouse the process was taking too long and did not complait in time 
        ini_set('max_execution_time', 120);
        $process = new process(["node", base_path("nodeScrapers/nodeCompairer.js"), $title, $platform]);
        // $process->setTimeout(120);
        $process->run();
        $conpairedData = json_decode($process->getOutput());
        return $conpairedData;
    }
}
