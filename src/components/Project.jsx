import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github }) {
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl overflow-auto h-80 whitespace-pre-line">
      <img className="w-60" src={technologies + theme} />
      <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="leading-7 text-gray-500 dark:text-gray-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-gray-500 dark:text-gray-300 font-medium">
        {link && (
          <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
            <CiLink className="text-2xl self-center" />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs self-center"
            >
              View Project
            </a>
          </a>
        )}
        <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs self-center"
          >
            View Github
          </a>
        </a>
      </div>
    </div>
  );
}

export default Project;
