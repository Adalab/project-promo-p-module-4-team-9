import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dataApi from '../services/api';
import '../styles/App.scss';
import Create from './Create';
import Landing from './Landing';

function App() {
  //constantes de estado
  const [designClass, setDesignClass] = useState('collapsed');
  const [fillClass, setFillClass] = useState('collapsed');
  const [shareClass, setShareClass] = useState('collapsed');

  const [designArrow, setDesignArrow] = useState('fa-transform');
  const [fillArrow, setFillArrow] = useState('fa-transform');
  const [shareArrow, setShareArrow] = useState('fa-transform');

  const [shareUrl, setShareUrl] = useState('js-createHidden');
  const [shareError, setShareError] = useState('js-createHidden');

  const [avatar, setAvatar] = useState('');

  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    photo: '',
    linkedin: '',
    github: '',
  });
  const [dataFromApi, setDataFromApi] = useState({});

  //funciones manejadoras
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };

  const handleInput = (inputValue, inputChanged) => {
    setDataCard({ ...dataCard, [inputChanged]: inputValue });
  };

  const handleCollapsed = (targetId) => {
    if (targetId === 'design') {
      if (designClass === 'collapsed') {
        setFillClass('collapsed');
        setShareClass('collapsed');
        setFillArrow('fa-transform');
        setShareArrow('fa-transform');
        setDesignClass('');
        setDesignArrow('');
      } else {
        setDesignClass('collapsed');
        setDesignArrow('fa-transform');
      }
    } else if (targetId === 'fill') {
      if (fillClass === 'collapsed') {
        setDesignClass('collapsed');
        setShareClass('collapsed');
        setDesignArrow('fa-transform');
        setShareArrow('fa-transform');
        setFillClass('');
        setFillArrow('');
      } else {
        setFillClass('collapsed');
        setFillArrow('fa-transform');
      }
    } else if (targetId === 'share') {
      if (shareClass === 'collapsed') {
        setDesignClass('collapsed');
        setFillClass('collapsed');
        setFillArrow('fa-transform');
        setDesignArrow('fa-transform');
        setShareClass('');
        setShareArrow('');
      } else {
        setShareClass('collapsed');
        setShareArrow('fa-transform');
      }
    }
  };

  const handleReset = () => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  //aquí hacer la llamada a la api para enviar los datos
  const handleClickCreateCard = () => {
    dataApi(dataCard).then((response) => {
      console.log(response);
      setDataFromApi(response);
      if (response.success) {
        setShareUrl('');
        setShareError('js-createHidden');
      } else {
        setShareError('');
        setShareUrl('js-createHidden');
      }
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/create"
          element={
            <Create
              dataCard={dataCard}
              designClass={designClass}
              fillClass={fillClass}
              shareClass={shareClass}
              shareUrl={shareUrl}
              shareError={shareError}
              designArrow={designArrow}
              fillArrow={fillArrow}
              shareArrow={shareArrow}
              handleInput={handleInput}
              handleCollapsed={handleCollapsed}
              handleClickCreateCard={handleClickCreateCard}
              handleReset={handleReset}
              updateAvatar={updateAvatar}
              avatar={avatar}
              dataFromApi={dataFromApi}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
