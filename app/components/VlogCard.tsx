import Link from "next/link";

type VlogCardProps = {
  title: string;
  slug: string;
  image: string;
  description: string;
};

export default function VlogCard({
  title,
  slug,
  image,
  description,
}: VlogCardProps) {
  return (
    <Link href={`/vlog/${slug}`}>
      <div
        style={cardStyle}
        className="hover:scale-[1.025] hover:bg-white hover:text-black bg-[#17203D] text-white "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[85%] object-cover rounded-lg "
        />
        <h3 className="text-nowrap overflow-clip w-[70%] text-center px-6 py-3 ">
          {title}
        </h3>
      </div>
    </Link>
  );
}

const cardStyle = {
  border: "3px solid #17203D ",
  height: "300px",
  width: "200px",
  borderRadius: "10px",
  padding: "10px",
  cursor: "pointer",
};
