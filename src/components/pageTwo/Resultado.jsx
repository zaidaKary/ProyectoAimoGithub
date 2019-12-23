import React from 'react';
import style from '../../css/style.module.css';

const Resultado = (props) => {
  const name = props.name;
  const userName = props.userName;
  const followers = props.followers;
  const following = props.following;
  const public_repos = props.public_repos;
  const avatar_url = props.avatar_url;
  const html_url = props.html_url;
  const location = props.location;
  const dataRepo = props.dataRepo;

  // for (let i = 0; i < dataRepo.length; i++) {
  // console.log(dataRepo[i].name);
  // }
  return (
    <div>
      <p className={style.txthome}>Search results:</p>
      <div className={style.informacion}>
        <img className={style.imgUser} src={avatar_url} alt="foto de usuario" />
        <div className={`${style.viewone} ${style.margin}`}>
          <p>
            <i className="fas fa-user" />
            &nbsp;
                {userName}
            &nbsp;
                {name === null ? '' : `(${name})`}
          </p>
          {location === null ? '' : (<p><i className="fas fa-map-marker-alt" /> {location}</p>)}
          <p>
            <i className="fas fa-database" />
            &nbsp;
                {public_repos}
            &nbsp;
            public repos
          </p>
          <p>
            <i className="fas fa-users" />
            &nbsp;
                {followers}
            &nbsp;
            Followers
          </p>
          <p>
            <i className="fas fa-user-friends" />
            &nbsp;
                {following}
            &nbsp;
            Following
          </p>
          <p>
            <i className="fas fa-external-link-alt" />
            <a target="_blank" rel="noopener noreferrer" href={html_url}> View profile on Github</a>
          </p>
        </div>
      </div>
      <div>
        <p className={style.repositories}>Repositories:</p>
        {dataRepo === [] ? console.log('No existe dataRepo') : (
          dataRepo.map((data) => (
            <div className={style.contenedorepos}>
              <h1 className={style.titulo}>{data.name}</h1>
              <div className={style.contenidoproject}>
                <p>
                  <strong>Language:</strong>
                  &nbsp;
                  {data.language}
                </p>
                <p>
                  <strong>N° Forks:</strong>
                  &nbsp;
                  {data.forks_count}
                </p>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href={data.svn_url}>
                    View project
                    &nbsp;
                    &apos;
                    {data.name}
                    &apos;
                  </a>
                </strong>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Resultado;
