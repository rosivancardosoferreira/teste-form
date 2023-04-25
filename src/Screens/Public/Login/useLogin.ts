import React from "react";

export function useLogin(): any {
  const [isSending, setIsSending] = React.useState(false);

  async function onSubmitContact(values: any): Promise<any> {
    try {
      setIsSending(true);
      const payload = {
        "form-name": "contato",
        ...values
      };

      const body = Object.entries(payload)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              String(value ?? "sem valor")
            )}`
        )
        .join("&");

      console.log(JSON.stringify(body, null, 2));

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });
    } catch (error) {
    } finally {
      setIsSending(false);
    }
  }
  return {
    onSubmitContact
  };
}
