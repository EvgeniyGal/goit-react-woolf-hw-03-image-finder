import { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { getPhotoGallery } from './services/pixabay-api';

const INITIAL_STATE = {
  galleryPhotos: [],
  query: '',
  page: 0,
  nextPage: 0,
  pages: 42,
  isLoading: false,
  isModalOpen: false,
  currentPhotoId: '',
};
const PER_PAGE = 12;

export default class App extends Component {
  state = { ...INITIAL_STATE };

  handlerSubmitFormQuery = ev => {
    ev.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.setState({ ...INITIAL_STATE, query: this.state.query, nextPage: 1 });
  };

  handlerChangeQuery = ev => {
    const query = ev.target.value;
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { nextPage: ++prevState.nextPage };
    });
  };

  async componentDidUpdate(_, prevState) {
    if (
      (this.state.nextPage !== prevState.nextPage ||
        this.state.page !== prevState.page) &&
      this.state.page !== this.state.nextPage
    ) {
      this.setState({ isLoading: true });
      try {
        const {
          data: { hits, total },
        } = await getPhotoGallery(
          this.state.query,
          this.state.nextPage,
          PER_PAGE
        );
        const newPhotos = hits.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });
        const totalPages = total <= 500 ? Math.ceil(total / PER_PAGE) : 42;
        this.setState({
          galleryPhotos: [...this.state.galleryPhotos, ...newPhotos],
          pages: totalPages,
          page: this.state.nextPage,
          isLoading: false,
        });
      } catch (error) {
        this.setState(...INITIAL_STATE);
      }
    }
  }

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleModalOpen = id => {
    this.setState({ isModalOpen: true, currentPhotoId: id });
  };

  render() {
    let largePhotoUrl;
    if (this.state.isModalOpen) {
      largePhotoUrl = this.state.galleryPhotos.find(
        photo => photo.id === this.state.currentPhotoId
      ).largeImageURL;
    }
    return (
      <div className="App">
        <SearchBar
          value={this.state.query}
          onChange={this.handlerChangeQuery}
          onSubmit={this.handlerSubmitFormQuery}
        />
        {this.state.galleryPhotos.length > 0 ? (
          <ImageGallery
            onModalClose={this.handleModalClose}
            onModalOpen={this.handleModalOpen}
            galleryPhotos={this.state.galleryPhotos}
          />
        ) : undefined}
        {this.state.isLoading && <Loader />}
        {this.state.page > 0 && this.state.page < this.state.pages ? (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        ) : undefined}

        {this.state.isModalOpen && (
          <Modal url={largePhotoUrl} onModalClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}
