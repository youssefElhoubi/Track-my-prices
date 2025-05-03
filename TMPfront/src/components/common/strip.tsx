import React, { useState } from 'react';
import axios from 'axios';
import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';


const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            fontFamily: 'Inter, sans-serif',
            '::placeholder': {
                color: '#a0aec0'
            }
        },
        invalid: {
            color: '#e53e3e'
        }
    }
};

const PremiumPaymentForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setMessage('');

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            setMessage('Card element not found.');
            setLoading(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        if (error) {
            setMessage(error.message || 'Failed to create payment method.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/becomePremium', {
                amount: 10,
                payment_method_id: paymentMethod.id,
                user_id: 1 // Replace this with dynamic user ID
            });

            if (response.data.success) {
                setMessage('🎉 Payment successful! You are now premium.');
            } else {
                setMessage(`❌ ${response.data.message}`);
            }
        } catch (err: any) {
            setMessage(err.response?.data?.message || '❌ Server error during payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Become Premium - $10</h2>

                <div className="border border-gray-300 p-4 rounded-md mb-4">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>

                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>

                {message && (
                    <div className={`mt-4 text-sm ${message.includes('❌') ? 'text-red-600' : 'text-green-600'}`}>
                        {message}
                    </div>
                )}
            </form>
    );
};
export default PremiumPaymentForm
