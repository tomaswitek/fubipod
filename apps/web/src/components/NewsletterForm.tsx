"use client";
import React, {useState} from "react";
import {Button} from "@/components/Button";
import {client} from "api";
import {Form, FormOnScuccess} from "types/forms";
import {Notification} from "@/components/Notification";

interface Props {
  form: Form;
}

export function NewsletterForm(props: Props) {
  const {form} = props;
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotificaiton] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();
    await client.sendForm({email}, form.id);
    if (form.on_success === FormOnScuccess.message) {
      setShowNotificaiton(true);
    }
    setEmail("");
    setLoading(false);
  };

  return (
    <>
      <form className="flex-1" action="#" onSubmit={onSubmit}>
        <div className="bg-primary flex justify-center items-center">
          <input
            className="bg-bg text-gray-300 text-center ml-1 h-8 flex-1"
            type="email"
            placeholder="@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            className="text-center text-white px-4"
            type="submit"
            loading={loading}
          >
            {form.submit_label}
          </Button>
        </div>
      </form>
      <Notification title={form.success_message} show={showNotification} />
    </>
  );
}

export default NewsletterForm;
