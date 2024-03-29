"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData?.get("senderEmail");
    const message = formData?.get("message");

    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if(!validateString(message, 5000)) {
        return {
            error: "Invalid sender email"
        }
    }

    let data;
    try {
        await resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: 'deu.av.yunusemre@gmail.com',
            subject: 'Message from from the portfolio webseite',
            reply_to: senderEmail as string,
            //text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        })
    } catch(error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }

    return {
        data,
    }
  } 