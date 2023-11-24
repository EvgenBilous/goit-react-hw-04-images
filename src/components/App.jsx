import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './Searchbar/Searchbar';
import { Component } from 'react';
import { searchPhoto } from 'services/api';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      searchPhoto(query, page)
        .then(data => {
          const images = data.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => {
              return { id, tags, webformatURL, largeImageURL };
            }
          );
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images],
              totalImages: data.totalHits,
            };
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  getQuery = query => {
    if (query === this.state.query) {
      return;
    }
    this.setState({ query, page: 1, images: [] });
  };
  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  render() {
    const { isLoading, images, totalImages } = this.state;
    return (
      <>
        <SearchBar getQuery={this.getQuery} />
        <ImageGallery images={images} />

        {!isLoading && images.length < totalImages && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
