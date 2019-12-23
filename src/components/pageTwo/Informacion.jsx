import React, { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Resultado from './Resultado.jsx';

const Informacion = (props) => {
  const userInput = props.usuario;
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [public_repos, setPublic_repos] = useState('');
  const [avatar_url, setAvatar_url] = useState('');
  const [html_url, setHtml_url] = useState('');
  const [location, setLocation] = useState('');
  const [dataRepo, setDataRepo] = useState([]);
  const [error, setError] = useState(null);
  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    html_url,
    location,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setPublic_repos(public_repos);
    setAvatar_url(avatar_url);
    setHtml_url(html_url);
    setLocation(location);
  };
  useEffect(() => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          console.log('error: usuario no existe');
        } else {
          setData(data);
          setError(null);
          console.log(data);
        }
      });
    fetch(`https://api.github.com/users/${userInput}/repos`)
      .then((res) => res.json())
      .then((dataRepo) => {
        console.log(dataRepo);
        setDataRepo(dataRepo);
      });
  }, [userInput]);
  return (
    <div className="container">
      {error ? (<Error userInput={userInput} />) : (
        <Resultado
          name={name}
          userName={userName}
          followers={followers}
          following={following}
          public_repos={public_repos}
          avatar_url={avatar_url}
          html_url={html_url}
          location={location}
          dataRepo={dataRepo}
        />
      )}
    </div>
  );
};
export default Informacion;
