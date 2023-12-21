import { useState } from "react";
import parse from "html-react-parser";
import Button from "./button.astro";

const data = [
    {
        title: "What are your plans?",
        text: "One plan is available at a cost of <span className='text-blue font-bold'>$25</span> per month. It includes all features. We offer tax returns at a low price of <span className='text-blue font-bold'>$5</span> per tax return.",
    },
    {
        title: "Do I have to purchase a subscription for each employee in my company?",
        text: "The subscription includes an admin account and five team accounts. You can contact us to request custom pricing for additional team accounts.",
    },
    {
        title: "What's the difference between an admin account and a group account?",
        text: "Additional features include billing and subscription management, client additions and team assignment.",
    },
    {
        title: "What's the $5 tax return price?",
        text: "Two-fold pricing is available. To maintain your account, you will need to pay <span className='text-blue font-bold'>$25</span> per month. We charge <span className='text-blue font-bold'>$5</span> for each tax return that we complete via our workflow. This includes an invitation to the client and clients signing up, completing the questionnaire, uploading documents, and finally receiving the completed tax return from the tax professional.",
    },
    {
        title: "Why have a two-fold pricing structure?",
        text: "<span className='text-blue font-bold'>e-Phorm</span> has no hidden fees. A monthly subscription is required to maintain an account and keep all information safe on our servers. Pricing for tax returns is <span className='text-blue font-bold'>$5</span>. This price covers variable workflow costs based on customer activity.",
        text1: "Each accounting firm’s tax practice size is unique, so we believe that each one has its own needs. We thought it would be a good idea to offer a pay-as-you go pricing structure, as our customer base is diverse. You only pay for the tax returns that you have completed.",
    },
    {
        title: "What happens to my account if I forget to renew it?",
        text: "If the monthly plan isn’t renewed or the payment method isn’t updated, all functionality and client access will be lost.",
        text1: "The data is kept on our servers for three months after the expiry of the subscription. If you renew within 3 months of your last renewal, all client accounts will become active again. All data is lost after three months.",
    },
    {
        title: "What payment methods are you accepting?",
        text: "Online payments are accepted through Visa, MasterCard and American Express. For offline payments, please email us at <span className='text-blue font-bold'>help@ephorm.com</span>",
    },
];

const Container10 = () => {
    return (
        <div className="py-20 container">
            <h1 className="text-4xl font-bold text-center mb-4">
                Pricing <span className="text-blue">FAQ’s</span>
            </h1>

            {data.map((item, index) => (
                <Accordion key={index} title={item.title} text={item.text} text1={item.text1} />
            ))}
            <Accordion1 />
            <div className="mt-8">
                <button class="text-sm mx-auto bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
                    Not Sure About Something? Get In Touch.
                </button>
            </div>
        </div>
    );
};

export default Container10;

const Accordion = ({ title, text = "", text1 = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer mt-4 border ring-1 ring-offset-2 ring-blue text-sm p-4 flex-1 rounded-xl shadow-lg select-none"
        >
            {/* top */}
            <div className=" flex justify-between items-center pointer-events-none">
                <h1 className="font-bold text-lg">{parse(title)}</h1>
                <svg
                    style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-all"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {/* bottom */}
            <div className="grid transition-all pointer-events-none" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                    <p className="h-auto mt-4">{parse(text)}</p>
                    <p className="h-auto mt-4">{parse(text1)}</p>
                </div>
            </div>
        </div>
    );
};

const Accordion1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer mt-4 border ring-1 ring-offset-2 ring-blue text-sm p-4 flex-1 rounded-xl shadow-lg select-none"
        >
            {/* top */}
            <div className=" flex justify-between items-center pointer-events-none">
                <h1 className="font-bold text-lg">What's your refund policy?</h1>
                <svg
                    style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-all"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {/* bottom */}
            <div className="grid transition-all pointer-events-none" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                    <p className="h-auto mt-4">Below is our refund policy.</p>
                    <p className="h-auto mt-4 font-bold">Customer Satisfaction policy</p>
                    <p className="h-auto">
                        <span className="text-blue font-bold">e-Phorm</span> strives to make software that you love using for your business. There are many
                        options, and we thank you for choosing <span className="text-blue font-bold">e-Phorm</span>. We are grateful. This policy outlines
                        what we will do if we don’t meet your expectations.
                    </p>
                    <p className="h-auto mt-4 font-bold">Monthly Subscriptions</p>
                    <p className="h-auto">
                        We will be happy to help you if you have any issues during your first month of using our service. We will try our best to resolve
                        your problem, offer a workaround or provide a time frame for you to find a solution that meets your needs. We will happily offer a
                        full refund if you aren’t satisfied. We want you to be satisfied with all aspects of your contract. Not just the first 30 days. We
                        go above and beyond this. We ask that you notify us immediately if we change, remove or discontinue any functionality during your
                        contract. We will give you a PRO-Rated REFUND for any remaining contract if we do not address the issue to your satisfaction.
                    </p>
                    <p className="h-auto mt-4 font-bold">Auto-Renewal</p>
                    <p className="h-auto">
                        Subscriptions will automatically renew until you cancel them. We will mail you a mail stating the amount that will be charged on
                        your credit card each time your subscription auto-renews. We will also send an e-mail receipt after each renewal.
                    </p>
                    <p className="h-auto mt-4">
                        Send us an email at <span className="text-blue font-bold">help@ephorm.com</span> if you have any questions.
                    </p>
                </div>
            </div>
        </div>
    );
};
