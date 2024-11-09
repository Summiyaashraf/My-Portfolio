import Image from 'next/image';

const projects = [
  {
    title: "Static Interactive Resume",
    description: "Crafted a sleek, interactive static resume using HTML and CSS, showcasing my skills and experience with clean design and responsive elements.",
    imageSrc: "/Project_01.png",
  },
  {
    title: "Shareable Resume Builder",
    description: "Developed a user-friendly shareable resume builder, enabling users to easily create and share professional resumes online.",
    imageSrc: "/Project_02.png",
  },
  {
    title: "My Resume",
    description: "Developed a professional and visually appealing resume, highlighting skills and experience with clean design and structured layout.",
    imageSrc: "/Project_06.png",
  },
  {
    title: "Student ID Card",
    description: "Designed a Student ID Card component using Next.js and Tailwind CSS, offering a modern and responsive layout.",
    imageSrc: "/Project_03.png",
  },
  {
    title: "My Image",
    description: "Implemented an interactive hover effect on an image, dynamically displaying 'Summiya' using HTML, CSS, and JavaScript for a personalized touch.",
    imageSrc: "/Project_07.png",
  },
  {
    title: "Create Buttons",
    description: "Created a responsive Navbar with interactive buttons for About, Footer, and Contact sections using Next.js for seamless navigation.",
    imageSrc: "/Project_04.png",
  },
];

const Projects = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-6xl font-semibold text-center mb-2">Projects</h2>
      <div className="flex justify-center mb-8">
        {/* Underline Element */}
        <div className="w-60 h-1 bg-black rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={200}
              height={150}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">{project.title}</h3>
            <p className="text-gray-600 text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
