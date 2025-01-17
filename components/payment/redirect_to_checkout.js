import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const RedirectToCheckout = ({ sessionId }) => {
    useEffect(() => {
        const handleCheckout = async () => {
            const stripe = await stripePromise;
            if (stripe && sessionId) {
                await stripe.redirectToCheckout({ sessionId });
            }
        };

        handleCheckout();
    }, [sessionId]);

    return <div>Redirecting to Stripe...</div>;
};

export default RedirectToCheckout;
