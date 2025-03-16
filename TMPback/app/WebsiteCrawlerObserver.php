<?php

namespace App;

use Spatie\Crawler\Crawler;
use Psr\Http\Message\UriInterface;
use Psr\Http\Message\ResponseInterface;
use Spatie\Crawler\CrawlObservers\CrawlObserver;

class WebsiteCrawlerObserver extends CrawlObserver
{
    /**
     * Create a new class instance.
     */
    public function crawled(UriInterface $url, ResponseInterface $response, ?UriInterface $foundOnUrl = null, ?string $linkText = null): void
    {
        $html = $response->getBody()->getContents();
        preg_match('/<title>(.*?)<\/title>/',$html,$matches);
    }
}
