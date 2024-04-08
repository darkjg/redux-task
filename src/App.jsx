import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addLista } from './redux/todosSlice';


const App = () => {
  const dispatch = useDispatch();
  dispatch(addLista({ id: 1, nombre: "hacer proyecto" }))
  dispatch(addLista({ id: 2, nombre: "hacer proyecto2" }))



  const lista = useSelector((state) => state.lista)


  return (

    <>
      <ul>
        {lista.lista.map(tarea => {
          return <li>{tarea.nombre}</li>
        })}

      </ul>

    </>
  );
};

export default App;
