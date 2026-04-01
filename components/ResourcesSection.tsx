import Link from "next/link";

export function ResourcesSection() {
  const resources = [
    {
      title: "Addisonian Crisis Info",
      desc: "Learn how to identify and manage emergency situations effectively.",
      link: "/emergency",
    },
    {
      title: "Blog",
      desc: "Read latest updates, patient stories, and expert insights.",
      link: "/blog",
    },
    {
      title: "Information Hub",
      desc: "Explore verified resources and guides about Addison’s disease.",
      link: "/information",
    },
    {
      title: "Find Professionals",
      desc: "Connect with trusted endocrinologists and specialists.",
      link: "/directory",
    },
  ];

  return (
    <section className="bg-[#eaebd0] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-[#2d3c59]">
          Resources
        </h2>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {resources.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-[#2d3c59]/10 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#94a378]/20 flex items-center justify-center mb-4 group-hover:bg-[#2d3c59] transition">
                <div className="w-5 h-5 bg-[#2d3c59] rounded-full group-hover:bg-white"></div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2d3c59]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[#2d3c59]/70 leading-relaxed">
                {item.desc}
              </p>

              {/* Arrow */}
              <div className="mt-4 text-sm text-[#94a378] font-medium group-hover:translate-x-1 transition">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}