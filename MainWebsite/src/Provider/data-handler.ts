interface SubscribeResponse {
  message?: string;
  error?: string;
}

export async function SubscribeNewsLetter(email: string): Promise<SubscribeResponse> {
  try {
    const response = await fetch("https://reco-labs-backend.vercel.app/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    return {
      message: response.ok ? data.message : undefined,
      error: !response.ok ? data.error || "Subscription failed" : undefined
    };
  } catch (error) {
    return { error: "An error occurred while subscribing" };
  }
}
