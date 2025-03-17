<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Panther\Client;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class scraper extends Controller
{
    public function scrap()
    {
        $process = new Process(["node", base_path("nodeScrapers/nodeScraper.js"), "https://example.com"]);
        $process->run();
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        return response()->json(json_decode($process->getOutput()));
    }
}
