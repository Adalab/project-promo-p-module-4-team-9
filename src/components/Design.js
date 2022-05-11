const Design = (props) => {
  const handleDesignCollapsed = (ev) => {
    const targetId = ev.currentTarget.id;
    props.handleCollapsed(targetId);
  };

  const handleDesignInput = (ev) => {
    const inputValue = ev.target.id;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };
  return (
    <fieldset className="design">
      <legend
        id="design"
        className="design__legend js-designLegend"
        onClick={handleDesignCollapsed}
      >
        <div className="design__legend--topLegend">
          <i className="fa-solid fa-object-ungroup design__legend--icon"></i>
          <h2 className="design__title">Diseña</h2>
        </div>
        <i
          className={`fa-solid fa-angle-up design__legend--arrow js-designArrow ${props.designArrow}`}
        ></i>
      </legend>
      <div className="js-design">
        <div className={`box1 ${props.designClass}`}>
          <h3 className="design__inputname">Colores</h3>
          <div className="design__options">
            <div className="option">
              <input
                className="option__input js-input-1 js-option-input"
                id="1"
                type="radio"
                value={props.dataCard.palette}
                name="palette"
                onChange={handleDesignInput}
                checked={props.dataCard.palette === '1'}
              />
              <label className="design__options--box" htmlFor="option1">
                <div className="option1__color1"></div>
                <div className="option1__color2"></div>
                <div className="option1__color3"></div>
              </label>
            </div>
            <div className="option">
              <input
                className="option__input js-input-2 js-option-input"
                id="2"
                type="radio"
                value={props.dataCard.palette}
                name="palette"
                onChange={handleDesignInput}
                checked={props.dataCard.palette === '2'}
              />
              <label className="design__options--box" htmlFor="option2">
                <div className="option2__color1"></div>
                <div className="option2__color2"></div>
                <div className="option2__color3"></div>
              </label>
            </div>
            <div className="option">
              <input
                className="option__input js-input-3 js-option-input"
                id="3"
                type="radio"
                value={props.dataCard.palette}
                name="palette"
                onChange={handleDesignInput}
                checked={props.dataCard.palette === '3'}
              />
              <label className="design__options--box" htmlFor="option3">
                <div className="option3__color1"></div>
                <div className="option3__color2"></div>
                <div className="option3__color3"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Design;
