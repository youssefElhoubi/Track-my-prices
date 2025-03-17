<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Panther\Client;

class scraper extends Controller
{
    public function scrap()
    {
        $client = Client::createChromeClient();

        $crawler = $client->request("GET", "https://phi-rakib.medium.com/how-to-get-the-authentication-token-from-the-request-in-laravel-c577445da296");

        return response()->json(["title" => $crawler->filter("span")->text()]);
    }
}
