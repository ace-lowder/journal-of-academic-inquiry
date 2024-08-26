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
      <div className="mx-4 md:m-0 flex flex-col md:flex-row md:flex-row-reverse md:h-[400px] bg-indigo-900 text-white cursor-pointer max-w-[1280px] mx-auto overflow-hidden">
        <div className="w-full md:w-[60%] h-[200px] md:h-full relative">
          <Image
            src={article.imageUrl}
            alt="Featured Article Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>

        <div className="w-full md:w-[40%] p-8 h-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold underline">
            {article.title}
          </h2>
          <p className="mt-4 md:text-lg">{article.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
