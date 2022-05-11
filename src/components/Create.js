import Header from "./Header";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

const Create = (props) => {
  return (
    <>
      <Header />

      <main className="main">
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
          avatar={props.avatar}
        />

        <form action="/signup" method="post" className="main2">
          <Design
            dataCard={props.dataCard}
            designClass={props.designClass}
            designArrow={props.designArrow}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
          />

          <div className="line"></div>

          <Fill
            dataCard={props.dataCard}
            fillClass={props.fillClass}
            fillArrow={props.fillArrow}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
            updateAvatar={props.updateAvatar}
          />

          <div className="line"></div>
          <Share
            dataCard={props.dataCard}
            shareClass={props.shareClass}
            shareArrow={props.shareArrow}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
            handleClickCreateCard={props.handleClickCreateCard}
            dataFromApi={props.dataFromApi}
            shareUrl={props.shareUrl}
            shareError={props.shareError}
          />
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Create;
