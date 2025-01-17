import { db } from "@/firebase";
import initializeStripe from "@/components/payment/init_stripe";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

export async function createCheckoutSession(uid) {
    // Cria uma referência para a coleção "checkout_sessions" dentro do documento do usuário
    const checkoutSessionRef = await addDoc(
        collection(doc(collection(db, "users"), uid), "checkout_sessions"),
        {
            // Substitua o valor "price_XXX" pelo valor correto do seu produto no Stripe
            price: "price_1QI93cKaJ4wjApaF4wNchhoN",
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        }
    );


    onSnapshot(checkoutSessionRef, async (snap) => {
        const { sessionId } = snap.data();
        if (sessionId) {

            const stripe = await initializeStripe();
            stripe.redirectToCheckout({ sessionId });
        }
    });
}
