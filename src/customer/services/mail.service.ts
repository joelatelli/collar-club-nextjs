import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export class MailService {
    private transporter: nodemailer.Transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: String(process.env.SMPT_HOST),
            port: Number(process.env.SMPT_PORT),
            secure: true,
            auth: {
                user: String(process.env.SMPT_USER),
                pass: String(process.env.SMPT_PASSWORD),
            },
        });
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: String(process.env.SMPT_USER),
            to,
            subject: "Activation account" + process.env.API_URL,
            text: "",
            html: `
            <div>
                <h1>For activation click the link</h1>
                <a href="${link}">${link}</a>
            </div>
            `,
        });
    }
}
