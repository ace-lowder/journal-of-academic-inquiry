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
  <div className="flex flex-col border-b border-gray-400 w-full h-full">
    <div className="w-full h-48 md:h-[50%] relative">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full"
      />
    </div>
    <h3 className="mt-4 text-xl font-serif font-bold underline">{title}</h3>
    <p className="mt-2">{description}</p>
    <div className="mt-8 md:mt-auto mb-2 text-xs text-gray-600">
      <span>{date}</span> | <span>{author}</span>
    </div>
  </div>
);

export default ArticleCard;
