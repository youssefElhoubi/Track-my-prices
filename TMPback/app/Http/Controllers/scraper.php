<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Panther\Client;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;


class scraper extends Controller
{
    public function scrap(Request $request)
    {
            $validation = $request->validate([
                "url" => "required|url"
            ]);
            $process = new Process(["node", base_path("nodeScrapers/nodeScraper.js"), $request->url]);
            $process->run();
            if (!$process->isSuccessful()) {
                throw new ProcessFailedException($process);
            }
            $scrapedData = $process->getOutput();
            return response()->json(json_decode($scrapedData));
    }
}
