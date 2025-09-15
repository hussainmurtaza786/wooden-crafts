import { CONTACT, SITE_TITLE } from "@/app-config";
import { NextRequest, NextResponse } from "next/server";
import * as yup from 'yup';
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const CustomOrderFormSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    orderType: yup.string().required("Order type is required"),
    size: yup.string().required("Size is required"),
    unit: yup.string().required("Unit is required"),
    quantity: yup.number().min(1, "Quantity must be at least 1").required("Quantity is required"),
    material: yup.string().notRequired(),
    description: yup.string().required("Description is required"),
    address: yup.string().required("Address is required"),
    deliveryDate: yup.date().notRequired(),
    budget: yup.string().notRequired(),
    notes: yup.string().notRequired(),
});

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();

        // Extract text fields
        const formValues = JSON.parse(formData.get('formValues') as string || "{}")

        const data = await CustomOrderFormSchema.validate(formValues, { abortEarly: false, stripUnknown: true });

        // Validate the request body using Yup schema

        const referenceImage = formData.get("referenceImage") as File | null;
        console.log("referenceImage", referenceImage)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_EMAIL_ADDRESS,
                pass: process.env.EMAIL_CLIENT_PASSWORD,
            },
        });

        /* Email option for admin */
        let resumeAttachment;
        if (referenceImage) {
            const cvBuffer = await referenceImage.arrayBuffer();
            resumeAttachment = {
                filename: referenceImage.name,
                content: Buffer.from(cvBuffer),
            };
        }
        const companyMailOptions: Mail.Options = {
            from: process.env.ADMIN_EMAIL_ADDRESS,
            to: CONTACT.ownerEmail,
            subject: `Wooden Craft Contact from ${data.name}`,
            html: `
            <p style="font-family: Arial, sans-serif; font-size: 16px;">
                <strong>Name:</strong> ${data.name}<br/>
                <strong>Email:</strong> ${data.email}<br/>
                <strong>Phone:</strong> ${data.phone}<br/>
                <strong>address:</strong> ${data.address}<br/>
                <strong>description:</strong> ${data.description}<br/>
                <strong>orderType:</strong> ${data.orderType}<br/>
                <strong>quantity:</strong> ${data.quantity}<br/>       
                <strong>size:</strong> ${data.size}<br/>
                <strong>unit:</strong> ${data.unit}<br/>
                <strong>budget:</strong> ${data.budget}<br/>
                <strong>deliveryDate:</strong> ${data.deliveryDate}<br/>
                <strong>material:</strong> ${data.material}<br/>
                <strong>notes:</strong> ${data.notes}<br/>
            </p>
            `,
            attachments: resumeAttachment ? [resumeAttachment] : [],
        }

        /* Email option for applicant */
        const applicantMailOptions: Mail.Options = {
            from: process.env.ADMIN_EMAIL_ADDRESS,
            to: data.email,
            subject: `Thank You for Contacting ${SITE_TITLE}`,
            html: `
            <p style="font-family: Arial, sans-serif; font-size: 16px;">
                Dear ${data.name},
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
