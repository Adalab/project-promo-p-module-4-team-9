import Profile from './Profile';
const CardPreview = (props) => {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };
  return (
    <section
      className={`main1 js-preview-container palette-${props.dataCard.palette}`}
    >
      <div className="main1__container">
        <div>
          <button
            className="main1__container__reset js_buttonReset"
            onClick={handleClickReset}
          >
            <i className="fa-solid fa-trash-can"></i>reset
          </button>

          <div className="main1__container__text">
            <div className="border">
              <p className="main1__container__text--name js-preview-name">
                {props.dataCard.name || 'Nombre Completo'}
              </p>
              <p className="main1__container__text--profession js-preview-job">
                {props.dataCard.job || 'Front-end developer'}
              </p>
            </div>
          </div>

          {/* <div className="main1__container__cat js__profile-image js_reset_image"></div> */}
          <Profile avatar={props.avatar} />

          <nav className="main1__container__rrss">
            <a
              className="js-preview-phone"
              href={`tel: ${props.dataCard.phone}`}
            >
              <i className="main1__container__rrss__link fa-solid fa-mobile-screen-button"></i>
            </a>
            <a
              className="js-preview-email"
              href={`mailto: ${props.dataCard.email}`}
            >
              <i className="main1__container__rrss__link fa-solid fa-envelope"></i>
            </a>
            <a className="js-preview-linkedin" href={props.dataCard.linkedin}>
              <i className="main1__container__rrss__link fa-brands fa-linkedin-in"></i>
            </a>
            <a className="js-preview-github" href={props.dataCard.github}>
              <i className="main1__container__rrss__link fa-brands fa-github-alt"></i>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
