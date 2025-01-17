import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
});

export async function POST(req) {
    const { data } = await req.json();
    const { amount } = data;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: "BRL",
        });

        return new NextResponse(paymentIntent.client_secret, { status: 200 });
    } catch (error) {
        return new NextResponse(error.message || "An error occurred", {
            status: 400,
        });
    }
}
