import React from 'react';
import logo from './logo.png';
import './App.css'
import { Card, Button, Container, Row, Col, Navbar, Nav, Dropdown } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import ChapterPage from './components/ChapterPage';


const CheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
);

function App() {
  return (
    <ChapterPage chapter={{ videos: [{ url: "https://www.youtube.com/embed/hVvEISFw9w0" }, { url: "https://www.youtube.com/embed/MWyBgudQqsI" }] }} />
  );
}

export default App;
