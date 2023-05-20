import PropTypes from 'prop-types';
import { Container, Spinner } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div className="vazia" />
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
