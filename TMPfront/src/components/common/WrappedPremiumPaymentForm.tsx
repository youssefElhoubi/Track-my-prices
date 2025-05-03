import React from 'react';
import PremiumPaymentForm from './strip';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key);


const WrappedPremiumPaymentForm: React.FC = () => {
    return (
        <>
            <Elements stripe={stripePromise}>
                <PremiumPaymentForm />
            </Elements>
        </>
    );
};

export default WrappedPremiumPaymentForm;