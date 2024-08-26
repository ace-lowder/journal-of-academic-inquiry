import ArticleCard from '../ui/ArticleCard';
import Image from 'next/image';

const CurrentIssue: React.FC = () => {
  const articles = [
    {
      title: 'Shaping Toddlers with Toys',
      description:
        'Explore the psychological principles that guide the impact of play on early childhood growth.',
      imageUrl: '/toy.png',
      date: 'August 24, 2024',
      author: 'Vanessa Stone',
    },
    {
      title: 'Exploring Quantum Computing',
      description:
        'A dive into the world of quantum mechanics and its application in modern computing.',
      imageUrl: '/quantum.png',
      date: 'August 25, 2024',
      author: 'Jane Doe',
    },
    {
      title: 'Riding the Volatility',
      description:
        'An in-depth analysis of the factors contributing to cryptocurrency volatility and its implications for investors.',
      imageUrl: '/bitcoin.png',
      date: 'August 26, 2024',
      author: 'Mark Rubio',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 mx-4 md:mx-auto -mt-6 max-w-[1280px]">
      <div className="flex flex-col w-full md:w-72 h-full">
        <div className="w-full">
          <Image
            src="/issue.jpg"
            alt="Academic Journal"
            layout="responsive"
            width={564}
            height={732}
            className="border border-gray-400 shadow-md"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 w-full">
            Subscribe
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 w-full">
            View
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-4 mb-12 md:mb-0">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            date={article.date}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentIssue;
