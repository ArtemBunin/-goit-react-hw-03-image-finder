// import PropTypes from 'prop-types';
import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Searchbar,
  SearchForm,
  FormInput,
  FormButton,
} from './SearchBar.styled';
// import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    query: '',
    page: 1,
  };
  handleSearchChange = ev => {
    this.setState({ query: ev.currentTarget.value.toLowerCase() });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Ти не бачиш клавіатуру?');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const {isSubmiting}= this.props
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit" disabled={isSubmiting}>
            <AiOutlineSearch size="2rem" fill='black'/>
          </FormButton>

          <FormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
            value={this.state.query}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

// SearchBar.prototype = {
//   onSubmit: PropTypes.func.isRequired,
// };
