
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 md:flex-row md:space-x-8">
      {/* Left Section: Image with "About Me" Title */}
      <div className="flex flex-col items-center md:items-end md:w-1/3">
        <h2 className="text-4xl font-bold mb-4 bg-black text-white px-4 py-1 rounded-md tracking-wider">
          ABOUT ME
        </h2>
        <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/MyProfile.png"
            alt="Summiya Ashraf"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Section: Text with Circular Background */}
      <div className="bg-teal-600 text-white p-11 rounded-full shadow-lg max-w-lg text-center md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Hi, I'm Summiya Ashraf</h2>
        <p className="text-sm leading-relaxed mb-4">
          A passionate web developer with a strong foundation in HTML, CSS, JavaScript, and TypeScript. I love turning ideas into functional projects, using my skills to build websites and applications. I've also gained experience working with design tools like Figma to create visually appealing layouts.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          I have completed my CIT (Certificate in Information Technology) and have intended to gain hands-on experience in the tech industry. Currently, I am pursuing an advanced IT course at Governor House to further enhance my knowledge. Alongside my studies, I work as a teacher, sharing my knowledge and passion for technology with my students.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          With a deep interest in both education and technology, I'm always eager to explore new tools and techniques that enhance user experiences. Balancing my role as a teacher and developer allows me to apply my technical knowledge in a real-world scenario.
        </p>
        <div className="text-center font-semibold text-lg mt-4">Thank You 💚💚</div>
      </div>
    </div>
  );
}
