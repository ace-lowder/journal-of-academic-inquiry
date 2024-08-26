import ArticleCard from '../ui/ArticleCard';
import Image from 'next/image';

const CurrentIssue: React.FC = () => {
  const articles = [
    {
      title: 'Exploring Quantum Computing',
      description:
        'A dive into the world of quantum mechanics and its application in modern computing.',
      imageUrl: '/path/to/quantum-image.jpg',
      date: 'August 25, 2024',
      author: 'Jane Doe',
    },
    // Add more articles as needed
  ];

  return (
    <div className="flex space-x-4 mt-8 max-w-[1280px] mx-auto">
      {/* First Column: Academic Journal Image and Buttons */}
      <div className="flex flex-col items-center w-1/5">
        <Image
          src="/path/to/journal-image.jpg"
          alt="Academic Journal"
          layout="responsive"
          width={200}
          height={300}
        />
        <div className="flex space-x-2 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2">
            Subscribe
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2">
            View
          </button>
        </div>
      </div>

      {/* Other Columns: Article Cards */}
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
  );
};

export default CurrentIssue;
