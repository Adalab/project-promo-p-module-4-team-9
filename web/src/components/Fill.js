import GetAvatar from './GetAvatar';
const Fill = (props) => {
  const handleFillCollapsed = (ev) => {
    const targetId = ev.currentTarget.id;
    props.handleCollapsed(targetId);
  };

  const handleFillInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };
  return (
    <>
      <div
        id="fill"
        className="filled js-desplegable"
        onClick={handleFillCollapsed}
      >
        <i className="fa-solid fa-keyboard"></i>
        <legend className="filled__text">Rellena</legend>
        <i
          className={`fa-solid fa-angle-up fill-arrow js-icon-rellena ${props.fillArrow}`}
        ></i>
      </div>
      <fieldset
        action="/signup"
        method="post"
        className={`form2 js-fieldset ${props.fillClass}`}
      >
        <label className="label1">Nombre completo</label>
        <input
          type="text"
          className="input js_resetInput"
          name="name"
          placeholder="Ej: Sally Hill"
          onChange={handleFillInput}
          value={props.dataCard.name}
          required
        />
        <label className="label">Puesto</label>
        <input
          type="text"
          className="input js_resetInput"
          name="job"
          placeholder="Ej: Front-end unicorn"
          onChange={handleFillInput}
          value={props.dataCard.job}
          required
        />

        <label className="label">Imagen de perfil</label>

        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />

        <label className="label">Email</label>
        <input
          type="email"
          className="input js_resetInput"
          name="email"
          placeholder="Ej: sally.hill@gmail.com"
          onChange={handleFillInput}
          value={props.dataCard.email}
          required
        />

        <label className="label">Teléfono</label>
        <input
          type="tel"
          className="input js_resetInput"
          name="phone"
          placeholder="Ej: 555-55-55-55"
          onChange={handleFillInput}
          value={props.dataCard.phone}
          required
        />
        <label className="label">Linkedin</label>
        <input
          type="text"
          className="input js_resetInput"
          name="linkedin"
          placeholder="Ej: /sally-hill-9b3888143/"
          onChange={handleFillInput}
          value={props.dataCard.linkedin}
          required
        />
        <label className="label">Github</label>
        <input
          type="text"
          className="input js_resetInput"
          name="github"
          placeholder="Ej: sally-hill"
          onChange={handleFillInput}
          value={props.dataCard.github}
          required
        />
      </fieldset>
    </>
  );
};

export default Fill;
