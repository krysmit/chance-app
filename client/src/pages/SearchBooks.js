import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
  Row,
  Image
} from "react-bootstrap";

import Auth from "../utils/auth";
import { searchGoogleBooks } from "../utils/API";
import { saveResumeIds, getSavedResumeIds } from "../utils/localStorage";
import { SAVE_RESUME } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

const SearchBooks = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [savedBookIds, setSavedBookIds] = useState(getSavedResumeIds());

  const [saveBook, { error }] = useMutation(SAVE_RESUME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const resumeData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
      }));

      setSearchedBooks(resumeData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };


  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveBook({
        variables: {
          input: bookToSave,
        },
      });

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Give a Chance™</h1>
          <h2>
            Our mission is to enable less than fortunate individuals to build
            skills and references to develop a solid resume and get a new chance
            back at life.{" "}
          </h2>
        </Container>
      </Jumbotron>

  
      

    </>
  );
};

export default SearchBooks;
