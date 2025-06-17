import { CONTACT, SITE_TITLE } from "@/app-config";
import { NextRequest, NextResponse } from "next/server";
import * as yup from 'yup';
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const ContactSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    // country: yup.string().required("Country is required"),
    message: yup.string().notRequired()
});

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();

        // Validate the request body using Yup schema
        const { email, name } = await ContactSchema.validate(body, { abortEarly: false, stripUnknown: true });

        console.log('Received Contact Form Data:', body);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_EMAIL_ADDRESS,
                pass: process.env.EMAIL_CLIENT_PASSWORD,
            },
        });

        /* Email option for admin */
        const companyMailOptions: Mail.Options = {
            from: process.env.ADMIN_EMAIL_ADDRESS,
            to: CONTACT.ownerEmail,
            subject: `Wooden Craft Contact from ${name}`,
            html: `
            <p style="font-family: Arial, sans-serif; font-size: 16px;">
                <strong>Name:</strong> ${name}<br/>
                <strong>Email:</strong> ${email}<br/>
                <strong>Phone:</strong> ${body.phone}<br/>
                <strong>Message:</strong> ${body.message || 'N/A'}
            </p>
            `,
        }

        /* Email option for applicant */
        const applicantMailOptions: Mail.Options = {
            from: process.env.ADMIN_EMAIL_ADDRESS,
            to: email,
            subject: `Thank You for Contacting ${SITE_TITLE}`,
            html: `
            <p style="font-family: Arial, sans-serif; font-size: 16px;">
                Dear ${name},
                <br/><br/>
                Thank you for reaching out to ${SITE_TITLE}. We have received your message and our team will review it and one of our representatives will get back to you shortly.
                <br/><br/>
                We appreciate your interest in ${SITE_TITLE} and look forward to assisting you.
                <br/><br/>
                Best regards,
                <br/><br/>
                ${SITE_TITLE}
            </p>
            `,
        };

        await Promise.all([
            transporter.sendMail(companyMailOptions),
            transporter.sendMail(applicantMailOptions),
        ])

        return NextResponse.json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }

        console.error("err", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};
