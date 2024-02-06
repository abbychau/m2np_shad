export const mails = [
  {
    id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    username: "Abby Chau",
    subject: "[SFW] Budget Approval (joke)",
    text: "I'm happy to announce that the budget for the project has been approved. We can now proceed with the project. Let's make it a success!",
    date: "2022-08-10T16:45:00",
    read: true,
    labels: ["work", "budget"],
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  }
]

const replyData = [
  {
    id: 3,
    userId: 1223,
    username: "Alicia Koch",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "That's great news! I'm excited to get started on the project. Let's make it a success!",
    date: "2022-08-10T16:50:00",
    
  },
  {
    id: 4,
    userId: 1224,
    username: "John Doe",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "I've reviewed the budget, and everything looks good. We're all set to proceed.",
    date: "2022-08-10T16:55:00",
  },
  {
    id: 5,
    userId: 1225,
    username: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Looking forward to working with you on this project. Let's make it a success!",
    date: "2022-08-10T17:00:00",
  },
  {
    id: 6,
    userId: 1226,
    username: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "I'm glad to hear that the budget has been approved. We can now focus on delivering a successful project.",
    date: "2022-08-10T17:05:00",
  },
  {
    id: 7,
    userId: 1227,
    username: "Emily Brown",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "Great news! Let's make sure we deliver a successful project.",
    date: "2022-08-10T17:10:00",
  },
  {
    id: 8,
    userId: 1228,
    username: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "I'm excited to get started on this project. Let's make it a success!",
    date: "2022-08-10T17:15:00",
  },
];

export let replies = [
  {
    threadId: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    replyData: replyData
  }
];
export type Reply = (typeof replyData)[number]
export type Mail = (typeof mails)[number]



export const TermsOfService = `
These General Terms of Use (“General Terms”), along with any applicable Additional Terms (see section 1.2 (Additional Terms) below) (collectively, the “Terms”) govern your use of and access to our websites, web-based applications and products, customer support, discussion forums or other interactive areas or services, and services such as Creative Cloud (collectively, the “Services”) and your installation and use of any software that we include as part of the Services, including, without limitation, mobile and desktop applications, Sample Files and Content Files (defined below), scripts, instruction sets, and related documentation (collectively, the “Software”). If you have agreed to the Subscription and Cancellation Terms, then such terms are also considered part of the Terms. If you are using and accessing the Services and Software through Adobe’s Value Incentive Plan (“VIP”) program, then the Subscription and Cancellation Terms do not apply to you, but the remainder of the Terms will govern your use of and access to the Services and Software. If you have entered into another agreement with us concerning specific Services and Software, then the terms of that agreement control where it conflicts with the Terms.

By using the services or the software, you affirm that you are of legal age to enter into the terms, or, if you are not, that you have obtained parental or guardian consent to enter into the terms.
You must be 13 or older to register for an individual Adobe ID. Schools that participate in the primary and secondary education named user offering may issue a child under 13 an enterprise-level Adobe ID, consistent with the K-12 (Primary and Secondary) and Higher Education Additional Terms for Student Data.
1. Your Agreement with Adobe.

1.1 Choice of Law and Contracting Entity. If you reside in North America (inclusive of the United States, Canada, Mexico, United States territories and possessions, and United States military bases, wherever located), your relationship is with Adobe Inc., a United States company, and the Terms are governed by, and construed and interpreted in accordance with, the laws of the State of California, U.S.A., unless preempted by U.S. federal law, without regard to conflict of law rules. If you reside outside of North America, your relationship is with Adobe Systems Software Ireland Limited, and the Terms are governed by, and construed and interpreted in accordance with, the laws of Ireland, unless preempted by local law. For customers in Australia, Adobe Systems Software Ireland Limited is acting as an authorized agent of Adobe Systems Pty Ltd. and is entering into this contract in its capacity as agent for Adobe Systems Pty Ltd. You may have additional rights under your local law. We do not seek to limit those rights where it is prohibited to do so by law. For purposes of the Terms, “Adobe,” “us,” “we,” and “our” mean either Adobe Inc., Adobe Systems Software Ireland Limited, or Adobe Systems Pty Ltd., as applicable.

1.2 Additional Terms. Our Services and Software are licensed, not sold, to you, and also may be subject to one or more of the additional terms below (“Additional Terms”). If there is any conflict between the terms in the General Terms and the Additional Terms, then the Additional Terms govern in relation to those Services or Software. The Additional Terms are subject to change as described in section 1.5 (Updates to Terms) below.
`