import Link from 'next/link';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <p className="mb-4">
        We offer a variety of services to help students and professionals alike.
        Learn more about our specific services below.
      </p>
      <ul className="list-disc pl-5">
        <li>
          <Link href="/services/coaching">
            <div className="text-blue-500 hover:underline">Coaching</div>
          </Link>
        </li>
        {/* Add more services as needed */}
      </ul>
    </div>
  );
};

export default Services;
