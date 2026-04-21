import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const posts = [
  {
    slug: "what-is-addisons-disease",
    title: "What is Addison's Disease?",
    excerpt:
      "An introduction to primary adrenal insufficiency, its causes, and how it affects daily life.",
    content: `Addison's disease, also known as primary adrenal insufficiency, is a rare disorder in which the adrenal glands fail to produce enough hormones. The adrenal glands are small structures located on top of each kidney, and they produce cortisol and aldosterone—hormones essential for life.

Cortisol helps the body respond to stress, maintain blood pressure, regulate blood sugar, and reduce inflammation. Aldosterone helps the kidneys balance salt and water.

In Addison's disease, the adrenal cortex is damaged, usually by an autoimmune attack where the body mistakenly targets its own tissues. Other causes include infections (such as tuberculosis), bleeding into the adrenals, or genetic conditions.

Symptoms often develop slowly and can include fatigue, weight loss, darkening of the skin, low blood pressure, and salt craving. Diagnosis is confirmed through blood tests and an ACTH stimulation test.

Treatment involves lifelong replacement of the missing hormones—typically hydrocortisone for cortisol and sometimes fludrocortisone for aldosterone. With proper treatment, most people with Addison's can live full, active lives.`,
    createdAt: new Date("2025-01-15"),
  },
  {
    slug: "living-with-addisons",
    title: "Living Well with Addison's",
    excerpt:
      "Practical tips for managing medication, stress, and lifestyle when living with Addison's disease.",
    content: `Living with Addison's disease requires careful management, but it doesn't have to limit your life. Here are some key practices:

**Medication consistency:** Take your hydrocortisone at the same times each day. Never skip doses. If you miss one, take it as soon as you remember.

**Stress dosing:** Learn when to increase your dose—during illness, fever, injury, surgery, or significant emotional stress. Your endocrinologist can give you a clear plan.

**Emergency preparedness:** Always carry an emergency hydrocortisone injection and wear a medical alert bracelet or card. Create a free emergency card from this site to keep in your wallet.

**Routine care:** See your endocrinologist regularly. Keep up with blood tests to ensure your replacement doses are correct.

**Mental health:** Chronic illness can affect mood. Don't hesitate to seek support from a therapist or psychiatrist familiar with chronic conditions. Our directory includes mental health professionals who volunteer to support the Addison's community.`,
    createdAt: new Date("2025-01-10"),
  },
  {
    slug: "emergency-preparedness",
    title: "Emergency Preparedness: What Every Patient Needs",
    excerpt:
      "How to prepare for an Addisonian crisis—emergency kit, stress dosing, and when to call for help.",
    content: `An Addisonian crisis is a life-threatening emergency. Being prepared can save your life.

**What you need:**
1. **Emergency hydrocortisone injection** – Keep a kit at home, at work, and when traveling. Know how to use it (or have someone trained).
2. **Medical emergency card** – Create yours for free on this site. Keep it in your wallet and show it to ambulance crew or emergency responders.
3. **Medical alert jewelry** – A bracelet or necklace stating "Addison's disease - requires hydrocortisone" helps first responders.

**When to inject:** If you cannot keep oral medication down (vomiting), feel severely weak, confused, or are collapsing—inject immediately, then call 112.

**Travel tips:** Carry extra medication. Bring a letter from your doctor. Research healthcare at your destination. Never pack your emergency injection in checked luggage.

**Stress dosing:** Double or triple your oral hydrocortisone during fever, infection, or significant stress. Your doctor will advise on exact amounts. When in doubt, take extra and call for guidance.`,
    createdAt: new Date("2025-01-05"),
  },
  {
    slug: "traveling-with-addisons",
    title: "Traveling Safely with Addison's Disease",
    excerpt:
      "Essential tips for packing medication, doctor letters, time zones, and accessing care abroad.",
    content: `Traveling with Addison's disease takes a bit of planning, but it shouldn't stop you from exploring the world. Here's how to stay safe on the road.

**Pack smart:** Bring at least twice the medication you need. Split it between carry-on bags—never put your emergency hydrocortisone in checked luggage. If one bag is lost, you'll still have a backup.

**Get a doctor's letter:** Ask your endocrinologist for a letter explaining your condition, your medications, and why you need syringes. This helps with airport security and pharmacy visits abroad. Keep a digital copy on your phone too.

**Time zones:** When crossing time zones, take hydrocortisone on a schedule that roughly matches your usual routine. Your doctor can advise whether to shift gradually or stick to home time. The key is consistency.

**Before you go:** Research hospitals or clinics at your destination. Know how to say "Addison's disease" or "adrenal crisis" in the local language. Travel insurance that covers pre-existing conditions is worth considering.

**While away:** Carry your emergency card and injection at all times. Stay hydrated, eat regularly, and don't hesitate to stress dose if you feel unwell. Enjoy the trip—with a little prep, you've got this.`,
    createdAt: new Date("2025-01-03"),
  },
  {
    slug: "addisons-and-mental-health",
    title: "Addison's and Mental Health: You're Not Alone",
    excerpt:
      "How chronic illness affects mood, when to seek support, and resources for the Addison's community.",
    content: `Living with a chronic condition like Addison's doesn't just affect your body—it can take a toll on your mental health too. That's normal, and it's okay to ask for help.

**Why it happens:** Chronic illness brings uncertainty, lifestyle changes, and the constant need to stay vigilant about medication. Anxiety about crisis, low mood, or feeling isolated are common. Cortisol also plays a role in mood regulation; when levels are off, it can affect how you feel.

**When to reach out:** If you're feeling persistently sad, anxious, or overwhelmed, talking to a mental health professional can make a real difference. Therapists and psychiatrists who understand chronic illness can help you cope with the practical and emotional sides of living with Addison's.

**Stress dosing and anxiety:** Worrying about when to stress dose is understandable. A clear plan from your endocrinologist can reduce that anxiety. When in doubt, take extra hydrocortisone and call your doctor—it's safer than risking a crisis.

**Community:** Connecting with others who have Addison's can reduce the sense of isolation. Our directory includes psychiatrists who volunteer to support the Addison's community. You're not in this alone.`,
    createdAt: new Date("2025-01-01"),
  },
];

async function main() {
  // Seed blog posts
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      create: {
        ...post,
        published: true,
      },
      update: {},
    });
  }
  console.log("Seeded 5 blog posts.");

  // Seed test users
  const hashedPassword = await bcrypt.hash("password123", 10);
  
  const patientUser = await prisma.user.upsert({
    where: { email: "patient@test.com" },
    create: {
      email: "patient@test.com",
      name: "Test Patient",
      password: hashedPassword,
      role: "PATIENT",
    },
    update: {},
  });
  console.log("Seeded test patient user:", patientUser.email);

  const doctorUser = await prisma.user.upsert({
    where: { email: "doctor@test.com" },
    create: {
      email: "doctor@test.com",
      name: "Test Doctor",
      password: hashedPassword,
      role: "DOCTOR",
    },
    update: {},
  });
  console.log("Seeded test doctor user:", doctorUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
