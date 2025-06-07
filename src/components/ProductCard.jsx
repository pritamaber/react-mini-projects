export default function ProductCard({
  title,
  price,
  image,
  category,
  description,
  rating,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 w-full transition hover:shadow-md h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-2 rounded"
      />

      <div className="flex-grow">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
          {category}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-2">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-base font-bold text-green-600 dark:text-green-400">
          ₹{price}
        </span>
        {rating && (
          <span className="text-yellow-500 font-medium text-sm">
            ⭐ {rating}/5
          </span>
        )}
      </div>
    </div>
  );
}
