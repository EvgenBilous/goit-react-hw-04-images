import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { searchPhoto } from 'services/api';

// export default class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     images: [],
//     isLoading: false,
//     totalImages: 0,
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query || prevState.page !== page) {
//       this.setState({ isLoading: true });
//       searchPhoto(query, page)
//         .then(data => {
//           const images = data.hits.map(
//             ({ id, tags, webformatURL, largeImageURL }) => {
//               return { id, tags, webformatURL, largeImageURL };
//             }
//           );
//           this.setState(prevState => {
//             return {
//               images: [...prevState.images, ...images],
//               totalImages: data.totalHits,
//             };
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         })
//         .finally(() => {
//           this.setState({ isLoading: false });
//         });
//     }
//   }

//   getQuery = query => {
//     if (query === this.state.query) {
//       return;
//     }
//     this.setState({ query, page: 1, images: [] });
//   };
//   handleLoadMore = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });
//   };
//   render() {
//     const { isLoading, images, totalImages } = this.state;
//     return (
//       <>
//         <SearchBar getQuery={this.getQuery} />
//         <ImageGallery images={images} />

//         {!isLoading && images.length < totalImages && (
//           <Button handleLoadMore={this.handleLoadMore} />
//         )}
//         {isLoading && <Loader />}
//       </>
//     );
//   }
// }

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
