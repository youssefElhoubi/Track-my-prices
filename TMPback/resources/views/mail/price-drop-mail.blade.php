<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Price Drop Alert</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 font-sans">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-8">
      <!-- Header -->
      <div class="bg-blue-600 text-white px-6 py-4 text-center">
        <h1 class="text-2xl font-bold">📉 Price Drop Alert!</h1>
      </div>

      <!-- Body -->
      <div class="p-6">
        <p class="text-lg text-gray-800 mb-4">Hello {{ $detailes["userName"] }},</p>
        <p class="text-gray-700 mb-4">
          The product you’re tracking has dropped in price! 🎉 Here are the details:
        </p>

        <div class="bg-gray-100 p-4 rounded-lg mb-6">
          <p class="text-gray-800"><span class="font-semibold">📦 Product:</span> {{ $detailes["productName"] }}</p>
          <p class="text-gray-800"><span class="font-semibold">🛍️ Platform:</span> {{ $detailes["platformName"] }}</p>
          <p class="text-green-600 font-semibold"><span class="font-semibold">💸 New Price:</span> ${{ $detailes["newPrice"] }}</p>
          <p class="text-red-500"><span class="font-semibold">📉 Dropped By:</span> ${{$detailes["priceDiff"] }}</p>
        </div>

        <a href="{{$detailes["url"] }}" class="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          View Product
        </a>
      </div>

      <!-- Footer -->
      <div class="bg-gray-50 text-center text-sm text-gray-500 py-4 px-6">
        You're receiving this email because you subscribed to price alerts.<br />
        © {{ date('Y') }} Track My Prices. All rights reserved.
      </div>
    </div>
  </body>
</html>
