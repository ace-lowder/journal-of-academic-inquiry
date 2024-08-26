import Image from 'next/image';
import Link from 'next/link';

const FeaturedArticle: React.FC = () => {
  const article = {
    title: 'Thrills and Physics',
    description:
      'Delve into the engineering of rotating swing rides and explore how these attractions balance safety and excitement.',
    imageUrl: '/featured.png',
    link: '/',
  };

  return (
    <Link href={article.link} passHref>
      <div className="flex bg-indigo-900 text-white cursor-pointer max-w-[1280px] mx-auto h-[400px] overflow-hidden">
        <div className="w-[40%] p-8 h-full">
          <h2 className="text-6xl font-serif font-bold underline">
            {article.title}
          </h2>
          <p className="mt-4 text-lg">{article.description}</p>
        </div>

        <div className="w-[60%] h-full relative">
          <Image
            src={article.imageUrl}
            alt="Featured Article Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
