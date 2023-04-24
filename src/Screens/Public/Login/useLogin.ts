import React from "react";

export function useLogin(): any {
  const [isSending, setIsSending] = React.useState(false);

  async function onSubmitContact({ values }: any): Promise<any> {
    try {
      setIsSending(true);
      const { subject, ...dataForm } = values;
      const payload = {
        ...dataForm
      };

      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]): void => {
        formData.append(key, String(value));
      });
      const getBody = new URLSearchParams(formData).toString();
      // const response = await fetch("/", {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: getBody
      });
      console.log(JSON.stringify("PYLOAD", null, 2));
      console.log(JSON.stringify(payload, null, 2));
      console.log(JSON.stringify("PYLOAD", null, 2));
      console.log("🔥🔥🔥🔥________________________🚑");
      console.log("🔥🔥🔥🔥________NEW________________🚑");
      console.log(JSON.stringify(response, null, 2));
      console.log("🔥🔥🔥🔥________________________🚑");
    } catch (error) {
      console.log("🔥🔥🔥🔥________________________🚑");
      console.log(JSON.stringify(error, null, 2));
      console.log("🔥🔥🔥🔥________________________🚑");
    } finally {
      setIsSending(false);
    }
  }
  return {
    onSubmitContact
  };
}
