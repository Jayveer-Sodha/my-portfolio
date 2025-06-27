import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, image, tech = [], link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 hover:border-white/30"
    >
      {image && (
        <div className="h-48 bg-black">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold group-hover:text-[#b49bff] transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((tag, i) => (
              <span
                key={i}
                className="bg-cyan-600/20 text-[#b49bff] text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
