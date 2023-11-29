import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { searchPhoto } from 'services/api';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    searchPhoto(query, page)
      .then(data => {
        const images = data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => {
            return { id, tags, webformatURL, largeImageURL };
          }
        );
        setImages(prevImages => [...prevImages, ...images]);
        setTotalImages(data.totalHits);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const getQuery = newQuery => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      <SearchBar getQuery={getQuery} />
      <ImageGallery images={images} />

      {!isLoading && images.length < totalImages && (
        <Button handleLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default App;
