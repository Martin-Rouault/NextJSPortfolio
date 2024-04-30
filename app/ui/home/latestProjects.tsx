export default function LatestProjects() {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-bold ">Latest projects</h2>
      <div className="flex justify-between mt-3">
        <p className="text-md text-neutral-200">
          Here is my latest project.
        </p>
          <button className="text-md text-neutral-200">View all</button>
      </div>
      <div className="mt-3 bg-neutral-800 w-full h-96 rounded-md border-neutral-700 border-2 transition-colors duration-200 ease-in-out hover:border-neutral-500"></div>
    </div>
  );
};
