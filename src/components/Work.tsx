import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "AV Admin Portal",
    category: "Internal Fintech CRM",
    image: "/images/projects/av_admin_portal.jpg",
    tools:
      "Django, DRF, React, MySQL, Twilio, TeleCMI, WhatsApp Cloud API, Leegality",
    problem:
      "Loan teams needed one admin workspace for calls, lead capture, e-signing, IVR routing, WhatsApp outreach, and commissions.",
    approach:
      "Built DRF modules for CRM data, click-to-call, dual-leg recording, TeleCMI inbound IVR with language and loan-type routing, bulk campaigns, and a commission-plan engine.",
    outcome:
      "Reduced manual switching between calling, WhatsApp, and loan operations while auto-capturing inbound leads into the CRM.",
  },
  {
    name: "Hotel Booking API",
    category: "Travel Booking Backend",
    image: "/images/projects/hotel_booking.jpg",
    tools: "Python, Django REST Framework, MySQL, TBO/Tek Travels Hotel API",
    problem:
      "The product needed a reliable backend wrapper around TBO hotel booking flows.",
    approach:
      "Created 4 DRF apps and 16 endpoints covering search, prebook, book, voucher, and cancellation, with DB-cached auth token handling.",
    outcome:
      "Delivered a complete API layer that keeps partner authentication reusable and booking steps cleanly separated.",
  },
  {
    name: "AV Finance & Education Loans",
    category: "Loan Application Platform",
    image: "/images/projects/finance_loans.jpg",
    tools: "React, Django, MySQL, Svatantr UTM API, DRF",
    problem:
      "Finance and education loan journeys needed multi-step capture, agent listing, and verified campaign attribution.",
    approach:
      "Built React forms, a 5-table relational MySQL schema, an agent-listing endpoint, and Svatantr UTM verification as Django middleware.",
    outcome:
      "Created a structured application flow with cleaner attribution and backend-ready lead data.",
  },
  {
    name: "Immigration Services CRM",
    category: "Role-Based CRM",
    image: "/images/projects/immigration_crm.jpg",
    tools: "React, TanStack Router, Django, JWT, Twilio, Leegality, WhatsApp",
    problem:
      "Immigration teams needed country-aware lead ownership, reminders, calling, e-signing, and WhatsApp workflows.",
    approach:
      "Designed a 5-stage pipeline with JWT auth, role and country RBAC, Twilio Voice, Leegality flows, WhatsApp messaging, and APScheduler reminders.",
    outcome:
      "Gave teams a controlled CRM flow where access and actions match each user's role and country scope.",
  },
  {
    name: "Hey Fitness",
    category: "Fitness Brand Website",
    image: "/images/projects/hey_fitness.jpg",
    tools: "Django, GSAP, Render, Custom Admin",
    problem:
      "The brand needed a fast, visually bold website with manageable content from an admin dashboard.",
    approach:
      "Built a Django site with a dark acid-lime interface, GSAP motion, custom admin dashboard, and Render deployment.",
    outcome:
      "Delivered a polished marketing site with backend control for day-to-day updates.",
  },
  {
    name: "Anmol Jewellers",
    category: "Jewellery Automation & Commerce",
    image: "/images/projects/anmol_jewellers.jpg",
    tools: "React, WhatsApp DoubleTick, VAPI.ai, SEO, Catalogue Systems",
    problem:
      "A multi-branch jewellery business needed online catalogue, customer automation, and marketing improvements.",
    approach:
      "Worked on an e-commerce SPA, 61-SKU catalogue system, DoubleTick WhatsApp chatbot, Hindi VAPI.ai voice bot, and SEO audit.",
    outcome:
      "Expanded digital sales support across Ludhiana, Delhi, Jammu, and Mohali before winding down direct involvement in July 2026.",
  },
  {
    name: "TaskFlow, AuthFlow & Campaign API",
    category: "Backend Systems",
    image: "/images/projects/taskflow_api.jpg",
    tools: "Django, DRF, JWT, SendGrid, Swagger, GitHub Actions, Render",
    problem:
      "Internal tools needed secure authentication, task approvals, campaign APIs, documentation, and deployment automation.",
    approach:
      "Built a custom User model, JWT auth, OTP via SendGrid, RBAC, approval workflow, Swagger docs, and CI/CD to Render.",
    outcome:
      "Packaged reusable backend patterns for authenticated workflows, approvals, campaign management, and documented API handoff.",
  },
];

const Work = () => {
  useGSAP(() => {
    const workContainer = document.querySelector<HTMLElement>(".work-container");
    const boxes = document.querySelectorAll<HTMLElement>(".work-box");
    if (!workContainer || !boxes.length) return;

    const calculateTranslateX = () => {
      const firstBox = boxes[0];
      const lastBox = boxes[boxes.length - 1];
      const totalWidth =
        lastBox.offsetLeft + lastBox.offsetWidth - firstBox.offsetLeft;
      const containerWidth = workContainer.clientWidth;
      return Math.max(0, totalWidth - containerWidth + 100);
    };

    const isSmoothContent = !!document.querySelector("#smooth-content");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${calculateTranslateX()}`,
        scrub: 1,
        pin: true,
        pinType: isSmoothContent ? "transform" : "fixed",
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -calculateTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="case-study">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                  <h4>Approach</h4>
                  <p>{project.approach}</p>
                  <h4>Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
