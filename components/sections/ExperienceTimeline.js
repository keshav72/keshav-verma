import experience from '../../data/experience';

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience Timeline</h2>

        <div className="space-y-12 border-l-2 border-gray-300 pl-6">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-[33px] top-1.5" />
              <h3 className="text-2xl font-bold">{job.company}</h3>
              <p className="text-sm text-gray-500 mb-4">{job.location}</p>

              <div className="space-y-6">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{role.duration}</p>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                      {role.points.map((p) => (
                        <li key={p} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
