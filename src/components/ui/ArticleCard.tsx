import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  date,
  author,
}) => (
  <div className="flex flex-col border-b border-gray-400 p-4">
    <Image
      src={imageUrl}
      alt={title}
      layout="responsive"
      width={300}
      height={200}
      className="object-cover"
    />
    <h3 className="mt-4 text-lg font-bold underline">{title}</h3>
    <p className="mt-2 text-sm font-semibold">{description}</p>
    <div className="mt-auto text-xs text-gray-600">
      <span>{date}</span> | <span>{author}</span>
    </div>
  </div>
);

export default ArticleCard;
