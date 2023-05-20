import axios from '../../axios';
import { get } from 'lodash';

const getData = async (setIsLoading, setAlunos) => {
  try {
    setIsLoading(true);
    const response = await axios.get('/alunos');
    setAlunos(response.data);
    setIsLoading(false);
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);
    console.log(errors);
  }
};
export default getData;
