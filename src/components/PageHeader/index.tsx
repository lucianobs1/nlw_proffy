import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderPropos{
  title: string;
}


const PageHeader: React.FC<PageHeaderPropos> =  (props) => {
  return  (
    <header className="page-header">

    <div className="top-bar-container">

      <Link to="/">
        <img src={backIcon} alt="Voltar"></img>
      </Link>

      <img src={logoImg} alt="Proffy"/>

    </div>

    <div className="header-content">
       <strong>{props.title}</strong>

       <h2>{props.children}</h2>
    </div>

  </header>
  );
}

export default PageHeader;