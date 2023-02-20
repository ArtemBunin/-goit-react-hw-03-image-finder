import { getImage } from 'api/api';
import { Component } from 'react';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Box } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    isloading: false,
    image: [],
    error: null,
    query: '',
    totalHits: null,
    page: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== this.state.query) {
      this.setState({ isloading: true });

      try {
        const res = await getImage(query, page);
        if (!res.hits.length) {
          alert('Шукай щось інше!');
        }
        this.setState(state => ({
          image: [...this.state.image, ...res.hits],
          totalHits: res.totalHits,
          isloading: false,
        }));
      } catch (error) {
        this.setState({ error });
      }
    }
  }
  handleFormSubmit = query => {
    this.setState({
      query,
      image: [],
      page: 1,
      totalHits: null,
      isloading: false,
      error: null,
    });
  };

  LoadMoreImg = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { image, isloading, error, totalHits,} = this.state;
    return (
      <Box>
        <SearchBar onSubmit={this.handleFormSubmit} isSubmiting={isloading} />
        {error && <p>.....Картинка не знайдена</p>}
        {isloading && <Loader />}
        {image && <ImageGallery imageItem={image} />}
        {totalHits > 12 && <Button onClick={this.LoadMoreImg} />}
      </Box>
    );
  }
}
