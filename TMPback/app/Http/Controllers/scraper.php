<?php

namespace App\Http\Controllers;


use Symfony\Component\Process\Process;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class scraper extends Controller
{
    public static function scrap(Request $request)
    {
        $process = new Process(["node", base_path("nodeScrapers/nodeScraper.js"), $request->url]);
        $process->run();
        $scrapedData = json_decode($process->getOutput());
        // return response()->json($scrapedData);
        if ($scrapedData->code === 200) {
            return response()->json([
                "producttitle" => $scrapedData->data->title,
                "productImage" => $scrapedData->data->image,
                "productPrice" => $scrapedData->data->fullPrice,
                "productPlatform" => $scrapedData->data->platformName
            ], $scrapedData->code);
        } else if ($scrapedData->code === 404 || 500) {
            return response()->json(["error" => $scrapedData->error], $scrapedData->code);
        }
    }
}
