<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Crawler\Crawler;
use App\WebsiteCrawlerObserver;


class scrapWebside extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrap:webside {url}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scrapes a given website URL and extracts information';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $url = $this->argument('url');

        $this->info("Starting to scrape: $url");

        Crawler::create()
            ->setCrawlObserver(new WebsiteCrawlerObserver())
            ->setMaximumDepth(1) // Only scrape the given page, not deeper links
            ->startCrawling($url);

        $this->info("Scraping completed!");
    }
}
