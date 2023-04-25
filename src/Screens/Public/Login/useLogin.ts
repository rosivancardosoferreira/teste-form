import querystring from "qs";
import React from "react";

export function useLogin(): any {
  const [isSending, setIsSending] = React.useState(false);
  const refForm = React.useRef<HTMLFormElement>();

  async function onSubmitContact(values: any): Promise<any> {
    try {
      setIsSending(true);
      const { subject, ...dataForm } = values;
      // const payload = {
      //   ...dataForm
      // };

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      // Object.entries(payload).forEach(([key, value]): void => {
      //   formData.append(key, String(value));
      // });

      const body = { "form-name": "Contato", ...values };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: querystring.stringify(body)
      });
      console.log(JSON.stringify(response, null, 2));
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setIsSending(false);
    }
  }
  return {
    onSubmitContact,
    refForm
  };
}
