import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismaDB from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("UNAUTHORIZED", { status: 401 });
    }

    // creating a subscription record by finding our user based on his id from clerk id
    const userSubscription = await prismaDB.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    // if user is already subscribed and is a valid user with valid stripecustomerid then we shall redirect him to stripe billing page.
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    // if user is subscribing to our app for first time then we shall redirect them to checkout page.
    // metadata is veryimportant for webhook to capture data according to users details.
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD" || "INR",
            product_data: {
              name: "Media.Ai Pro",
              description: "Unlimited Genarations",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("STRIPE_ERROR", error);
    return new NextResponse("INTERNAL_SERVER_ERROR", { status: 500 });
  }
}
