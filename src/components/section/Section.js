import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Section({ children, className }) {
  return <SectionWrapper className={className}>{children}</SectionWrapper>;
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const SectionWrapper = styled.section`
  padding: 0 10px 20px;
  margin: 0;
  height: 100%;
  background-color: var(--light);
`;
