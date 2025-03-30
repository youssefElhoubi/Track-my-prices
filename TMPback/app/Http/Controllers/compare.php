<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;

class compare extends Controller
{
    public static function compaire(string $title , string $platform){
        $process = new process(["node",base_path("nodeScrapers/nodeScraper.js"),$title,$platform]);
        $process->run();
        $conpairedData = json_decode($process->getOutput());
        return $conpairedData;
    }
}
