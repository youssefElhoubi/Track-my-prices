<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use App\Models\User as UserModel;
use carbon\Carbon;

class user extends Controller
{
    public function becomePremium(Request $request)
    {
        try {
            $stripeKey = env("STRIPE_SECRET");
            $request->validate([
                'amount' => 'required|numeric|min:1',
                'payment_method_id' => 'required|string',
            ]);
            stripe::setApiKey($stripeKey);
            $amount = $request->amount * 100;
            $payment = PaymentIntent::create([
                "amount" => $amount * 100,
                "currency" => "usd",
                "payment_method" => $request->payment_method_id,
                'confirmation_method' => 'manual',
                'confirm' => true,
            ]);
            $user = UserModel::find($request->user_id);
            $nextmount = Carbon::now()->addMonth();
            $exparation_date = "$nextmount->year-$nextmount->month-$nextmount->day ";
            $user->update([
                "exparation_date"=>$exparation_date
            ]);
            return response()->json([
                'success' => true,
                'paymentIntent' => $payment
            ]);
    
        } catch (\Stripe\Exception\CardException $e) {
            // Handle card error
            return response()->json([
                'success' => false,
                'message' => $e->getError()->message
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' =>  $e->getMessage()
            ], 500);
        }
    }
}
