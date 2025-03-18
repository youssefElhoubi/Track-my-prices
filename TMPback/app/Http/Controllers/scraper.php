<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use App\Models\products;

class scraper extends Controller
{
    public function scrap(Request $request)
    {
        try {
                $validation = $request->validate([
                    "url" => "required|url"
                ]);
                $process = new Process(["node", base_path("nodeScrapers/nodeScraper.js"), $request->url]);
                $process->run();
                $scrapedData = json_decode($process->getOutput());
                if ($scrapedData->code ==200) {
                }
                return response()->json($scrapedData);
            } catch (ValidationException $th) {
                return response()->json(['error' => $th->errors()], Response::HTTP_BAD_REQUEST);
            }
    }
}
