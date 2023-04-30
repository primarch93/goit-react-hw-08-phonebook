import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { getInitials } from '../../utils/getInitials';
import { ContactEditForm } from '.././ContactEditForm/ContactEditForm';
import {
  TableRow,
  Avatar,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Button,
} from './ContactItem.styled';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const onDelete = contact => {
    dispatch(deleteContact(contact.id));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> deleted!
      </p>
    );
  };

  const onFavorite = contact => {
    if (favourites.find(fav => fav.id === contact.id)) {
      setFavourites(favourites.filter(fav => fav.id !== contact.id));
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> removed
          from favorites!
        </p>
      );
    } else {
      setFavourites([...favourites, contact]);
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> added
          to favorites!
        </p>
      );
    }
  };

  return contacts.map(contact => {
    return (
      <TableRow key={contact.id}>
        <NameCeil>
          <Avatar>{getInitials(contact.name)}</Avatar>
          {contact.name}
        </NameCeil>
        <NumberCeil>{contact.number}</NumberCeil>
        <ActionCeil>
          <Button type="button" onClick={() => onFavorite(contact)}>
            {favourites.find(fav => fav.id === contact.id) ? (
              <BsStarFill size={24} color="#ffd800" />
            ) : (
              <BsStar size={24} color="#ffd800" />
            )}
          </Button>

          <ContactEditForm contact={contact} />

          <Button type="button" onClick={() => onDelete(contact)}>
            <RiDeleteBinLine size={24} color="red" />
          </Button>
        </ActionCeil>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
